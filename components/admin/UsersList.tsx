
"use client";

import { useEffect, useState } from 'react';
import { getAllUsers, updateUserRole } from '../../lib/firebase-utils';
import { UserProfile, UserRole } from '../../lib/types';
import { Shield, User, Briefcase, Search, Edit2, Check, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { Input } from '../ui/Input';
import { Table } from '../ui/Table';

export function UsersList() {
    const [users, setUsers] = useState<UserProfile[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [selectedRole, setSelectedRole] = useState<UserRole>('patient');

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        setLoading(true);
        try {
            const data = await getAllUsers();
            setUsers(data);
        } catch (error) {
            console.error("Error loading users:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = (user: UserProfile) => {
        setEditingId(user.uid);
        setSelectedRole(user.rol_id);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleSaveRole = async (uid: string) => {
        try {
            await updateUserRole(uid, selectedRole);
            setEditingId(null);
            loadUsers(); // Reload to show updates
        } catch (error) {
            console.error("Error updating role:", error);
            alert("Error al actualizar el rol");
        }
    };

    const filteredUsers = users.filter(user =>
        (user.nombres?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (user.apellidos?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (user.email?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );

    const getRoleBadge = (role: UserRole) => {
        switch (role) {
            case 'admin':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"><Shield className="w-3 h-3" /> Admin</span>;
            case 'psychologist':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><Briefcase className="w-3 h-3" /> Psicóloga</span>;
            case 'patient':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><User className="w-3 h-3" /> Paciente</span>;
            default:
                return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{role}</span>;
        }
    };

    const columns = [
        {
            header: 'Usuario',
            cell: (user: UserProfile) => (
                <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold shrink-0">
                        {user.nombres?.charAt(0)}{user.apellidos?.charAt(0)}
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
                            onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                            options={[
                                { value: 'patient', label: 'Paciente' },
                                { value: 'psychologist', label: 'Psicóloga' },
                                { value: 'admin', label: 'Admin' }
                            ]}
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
                            className="bg-green-600 hover:bg-green-700"
                            title="Guardar"
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
                <div className="w-full sm:w-72">
                    <Input
                        leftIcon={<Search className="h-4 w-4" />}
                        placeholder="Buscar por nombre o email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white"
                    />
                </div>
            </div>

            <Table
                columns={columns}
                data={filteredUsers}
                isLoading={loading}
                emptyText="No se encontraron usuarios."
                actionColumn={actionColumn}
            />
        </div>
    );
}
