"use client";

import { useEffect, useState } from 'react';
import { getAllUsers, updateUserRole } from '../../lib/firebase-utils';
import { getRoles, adminCreateAuthUser } from '../../lib/admin-utils';
import { UserProfile, UserRole, Role } from '../../lib/types';
import { Shield, User, Briefcase, Search, Edit2, Check, X, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { Input } from '../ui/Input';
import { Table } from '../ui/Table';
import { Dialog } from '../ui/Dialog';

export function UsersList() {
    const [users, setUsers] = useState<UserProfile[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Edit state
    const [editingId, setEditingId] = useState<string | null>(null);
    const [selectedRole, setSelectedRole] = useState<UserRole>('');

    // Create User Modal state
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [createError, setCreateError] = useState('');
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        rol_id: ''
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const [usersData, rolesData] = await Promise.all([
                getAllUsers(),
                getRoles()
            ]);
            setUsers(usersData);
            setRoles(rolesData);
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = (user: UserProfile) => {
        setEditingId(user.uid);
        setSelectedRole(user.rol_id || '');
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleSaveRole = async (uid: string) => {
        try {
            await updateUserRole(uid, selectedRole);
            setEditingId(null);
            loadData(); // Reload to show updates
        } catch (error) {
            console.error("Error updating role:", error);
            alert("Error al actualizar el rol");
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        setCreateError('');
        try {
            await adminCreateAuthUser(
                {
                    nombres: formData.nombres,
                    apellidos: formData.apellidos,
                    email: formData.email,
                    rol_id: formData.rol_id,
                    foto_perfil: ''
                },
                formData.password
            );
            setIsCreateModalOpen(false);
            setFormData({ nombres: '', apellidos: '', email: '', password: '', rol_id: '' });
            loadData(); // Reload list
        } catch (error: any) {
            console.error("Error creating user:", error);
            setCreateError(error.message || 'Error al crear el usuario. Verifica los datos.');
        } finally {
            setIsCreating(false);
        }
    };

    const filteredUsers = users.filter(user =>
        (user.nombres?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (user.apellidos?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (user.email?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );

    const getRoleBadge = (roleId: UserRole) => {
        // Try looking up the role by its ObjectID
        const roleDoc = roles.find(r => r.id === roleId);

        let roleName = roleId;
        if (roleDoc) {
            roleName = roleDoc.nombre_rol;
        } else if (roleId === 'admin') roleName = 'Admin';
        else if (roleId === 'psychologist') roleName = 'Psicóloga';
        else if (roleId === 'patient') roleName = 'Paciente';

        // Styling based on name
        const lowerName = roleName?.toLowerCase() || '';

        if (lowerName.includes('admin') || lowerName.includes('sistema')) {
            return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"><Shield className="w-3 h-3" /> {roleName}</span>;
        } else if (lowerName.includes('psicó') || lowerName.includes('psico')) {
            return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><Briefcase className="w-3 h-3" /> {roleName}</span>;
        } else if (lowerName.includes('pacient') || lowerName.includes('patient')) {
            return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><User className="w-3 h-3" /> {roleName}</span>;
        }

        return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{roleName || 'Desconocido'}</span>;
    };

    // Prepare dropdown options from roles table
    const roleOptions = roles.map(r => ({ value: r.id, label: r.nombre_rol }));

    const columns = [
        {
            header: 'Usuario',
            cell: (user: UserProfile) => (
                <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold shrink-0">
                        {user.nombres?.charAt(0) || ''}{user.apellidos?.charAt(0) || ''}
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.nombres} {user.apellidos}</div>
                        <div className="text-xs text-gray-500">
                            {user.createdAt?.toDate ? new Date(user.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                        </div>
                    </div>
                </div>
            )
        },
        {
            header: 'Contacto',
            cell: (user: UserProfile) => (
                <div>
                    <div className="text-sm text-gray-900">{user.email}</div>
                    <div className="text-xs text-gray-500">{user.celular || '-'}</div>
                </div>
            )
        },
        {
            header: 'Rol',
            cell: (user: UserProfile) => {
                if (editingId === user.uid) {
                    return (
                        <Select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            options={roleOptions}
                            placeholder="Selecciona un rol"
                            className="bg-white"
                        />
                    );
                }
                return getRoleBadge(user.rol_id);
            }
        }
    ];

    const actionColumn = {
        header: 'Acciones',
        align: 'right' as const,
        cell: (user: UserProfile) => {
            if (editingId === user.uid) {
                return (
                    <div className="flex justify-end gap-2">
                        <Button
                            variant="primary"
                            size="icon"
                            onClick={() => handleSaveRole(user.uid)}
                            className="bg-green-600 hover:bg-green-700 disabled:opacity-50"
                            title="Guardar"
                            disabled={!selectedRole}
                        >
                            <Check className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="danger"
                            size="icon"
                            onClick={handleCancelEdit}
                            title="Cancelar"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                );
            }
            return (
                <div className="flex justify-end">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditClick(user)}
                        leftIcon={<Edit2 className="w-3 h-3" />}
                        className="text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50"
                    >
                        Editar Rol
                    </Button>
                </div>
            );
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <User className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Directorio de Usuarios</h3>
                        <p className="text-xs text-gray-500">Administra el acceso y roles.</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <div className="w-full sm:w-72">
                        <Input
                            leftIcon={<Search className="h-4 w-4" />}
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white"
                        />
                    </div>
                    <Button
                        onClick={() => setIsCreateModalOpen(true)}
                        leftIcon={<Plus className="w-4 h-4" />}
                        className="whitespace-nowrap rounded-lg"
                    >
                        Nuevo Usuario
                    </Button>
                </div>
            </div>

            <Table
                columns={columns}
                data={filteredUsers}
                isLoading={loading}
                emptyText="No se encontraron usuarios."
                actionColumn={actionColumn}
            />

            {/* Create User Dialog */}
            <Dialog
                isOpen={isCreateModalOpen}
                onClose={() => !isCreating && setIsCreateModalOpen(false)}
                title="Registrar Nuevo Usuario"
                actions={
                    <>
                        <Button variant="ghost" onClick={() => setIsCreateModalOpen(false)} disabled={isCreating}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleCreateUser} disabled={isCreating || !formData.email || !formData.password || !formData.rol_id}>
                            {isCreating ? 'Registrando...' : 'Registrar Usuario'}
                        </Button>
                    </>
                }
            >
                <form onSubmit={handleCreateUser} className="space-y-4">
                    {createError && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                            {createError}
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Nombres"
                            value={formData.nombres}
                            onChange={e => setFormData({ ...formData, nombres: e.target.value })}
                            required
                        />
                        <Input
                            label="Apellidos"
                            value={formData.apellidos}
                            onChange={e => setFormData({ ...formData, apellidos: e.target.value })}
                            required
                        />
                    </div>
                    <Input
                        label="Correo Electrónico"
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <Input
                        label="Contraseña"
                        type="password"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        required
                        placeholder="Mínimo 6 caracteres"
                    />
                    <Select
                        label="Rol del Sistema"
                        value={formData.rol_id}
                        onChange={e => setFormData({ ...formData, rol_id: e.target.value })}
                        options={roleOptions}
                        placeholder="-- Asignar un rol --"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        El rol asegurará que el ID del objecto real sea guardado en la base de datos de usuarios.
                    </p>
                </form>
            </Dialog>
        </div>
    );
}
