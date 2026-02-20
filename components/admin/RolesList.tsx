
"use client";

import { useEffect, useState } from 'react';
import { getRoles, createRole, updateRole, deleteRole, getAreas } from '../../lib/admin-utils';
import { Role, Area } from '../../lib/types';
import { Plus, Trash2, Shield, Edit2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Dialog } from '../ui/Dialog';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { Table } from '../ui/Table';

export function RolesList() {
    const [roles, setRoles] = useState<Role[]>([]);
    const [areas, setAreas] = useState<Area[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingRole, setEditingRole] = useState<Role | null>(null);
    const [formData, setFormData] = useState({ nombre_rol: '', descripcion: '', area_id: '' });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const [rolesData, areasData] = await Promise.all([getRoles(), getAreas()]);
            setRoles(rolesData);
            setAreas(areasData);
        } catch (error) {
            console.error("Error loading data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenCreate = () => {
        setEditingRole(null);
        setFormData({ nombre_rol: '', descripcion: '', area_id: '' });
        setIsModalOpen(true);
    };

    const handleOpenEdit = (role: Role) => {
        setEditingRole(role);
        setFormData({
            nombre_rol: role.nombre_rol,
            descripcion: role.descripcion,
            area_id: role.area_id || ''
        });
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        setEditingRole(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingRole) {
                await updateRole(editingRole.id, formData);
            } else {
                await createRole(formData);
            }
            handleClose();
            loadData(); // Refresh list
        } catch (error) {
            console.error("Error saving role:", error);
        }
    };

    const handleDelete = async (id: string, isSystemRole: boolean) => {
        if (isSystemRole) {
            alert("No puedes eliminar roles del sistema (admin, patient, psychologist).");
            return;
        }
        if (!confirm('¿Estás seguro de eliminar este rol?')) return;
        try {
            await deleteRole(id);
            loadData();
        } catch (error) {
            console.error("Error deleting role:", error);
        }
    };

    const isSystemRole = (roleName: string) => ['admin', 'psychologist', 'patient', 'Admin', 'Patient', 'Psychologist', 'Psicóloga', 'Paciente'].includes(roleName) || ['admin', 'psychologist', 'patient'].includes(roleName.toLowerCase()) || ['developer'].includes(roleName.toLowerCase());

    const columns = [
        {
            header: 'Rol',
            cell: (role: Role) => (
                <div className="flex items-center gap-2 font-medium text-gray-900">
                    <Shield className={`w-4 h-4 ${isSystemRole(role.id) ? 'text-purple-600' : 'text-gray-400'}`} />
                    {role.nombre_rol}
                    {isSystemRole(role.id) && <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">Sistema</span>}
                </div>
            )
        },
        {
            header: 'Descripción',
            cell: (role: Role) => <span className="text-gray-500 truncate max-w-xs block" title={role.descripcion}>{role.descripcion}</span>
        },
        {
            header: 'Área Asignada',
            cell: (role: Role) => {
                const assignedArea = areas.find(a => a.id === role.area_id);
                return assignedArea ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                        {assignedArea.nombre_area}
                    </span>
                ) : (
                    <span className="text-gray-400 text-xs italic">Ninguna</span>
                );
            }
        }
    ];

    const actionColumn = {
        header: 'Acciones',
        align: 'right' as const,
        cell: (role: Role) => (
            <div className="flex justify-end gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleOpenEdit(role)}
                    title="Editar"
                    className="hover:bg-indigo-50 hover:text-indigo-600"
                >
                    <Edit2 className="w-4 h-4" />
                </Button>
                {!isSystemRole(role.id) && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(role.id, false)}
                        title="Eliminar"
                        className="hover:bg-red-50 hover:text-red-600"
                    >
                        <Trash2 className="w-4 h-4" />
                    </Button>
                )}
            </div>
        )
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Administrar Roles</h2>
                    <p className="text-sm text-gray-500 mt-1">Configura los permisos y roles de los usuarios del sistema.</p>
                </div>
                <Button onClick={handleOpenCreate} variant="secondary" leftIcon={<Plus className="w-4 h-4" />}>
                    Nuevo Rol
                </Button>
            </div>

            <Table
                columns={columns}
                data={roles}
                isLoading={loading}
                emptyText="No hay roles registrados."
                actionColumn={actionColumn}
            />

            <Dialog
                isOpen={isModalOpen}
                onClose={handleClose}
                title={editingRole ? 'Editar Rol' : 'Crear Nuevo Rol'}
                actions={
                    <>
                        <Button variant="ghost" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="secondary" onClick={handleSubmit}>
                            {editingRole ? 'Guardar Cambios' : 'Crear Rol'}
                        </Button>
                    </>
                }
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre del Rol"
                        required
                        value={formData.nombre_rol}
                        onChange={e => setFormData({ ...formData, nombre_rol: e.target.value })}
                        placeholder="Ej: Supervisor, Asistente"
                        autoFocus
                    />

                    <Select
                        label="Área Asignada"
                        value={formData.area_id}
                        onChange={e => setFormData({ ...formData, area_id: e.target.value })}
                        options={areas.map(area => ({ value: area.id, label: area.nombre_area }))}
                        placeholder="-- Seleccionar Área --"
                    />
                    <p className="text-xs text-gray-500 -mt-2">Opcional: Vincula este rol a un área física específica.</p>

                    <Textarea
                        label="Descripción"
                        rows={3}
                        value={formData.descripcion}
                        onChange={e => setFormData({ ...formData, descripcion: e.target.value })}
                        placeholder="Define los permisos y funciones de este rol..."
                    />
                </form>
            </Dialog>
        </div>
    );
}
