"use client";

import { useEffect, useState } from 'react';
import { getRoles, createRole, deleteRole } from '../../lib/admin-utils';
import { Role, UserRole } from '../../lib/types';
import { Plus, Trash2, Shield } from 'lucide-react';

export function RolesList() {
    const [roles, setRoles] = useState<Role[]>([]);
    const [loading, setLoading] = useState(true);
    const [newRole, setNewRole] = useState({ id: '', nombre_rol: '', descripcion: '' });

    useEffect(() => {
        loadRoles();
    }, []);

    const loadRoles = async () => {
        setLoading(true);
        try {
            const data = await getRoles();
            setRoles(data);
        } catch (error) {
            console.error("Error loading roles:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createRole({
                id: newRole.id as UserRole, // Casting for flexibility in this generic CRUD
                nombre_rol: newRole.nombre_rol,
                descripcion: newRole.descripcion
            });
            setNewRole({ id: '', nombre_rol: '', descripcion: '' });
            loadRoles();
        } catch (error) {
            console.error("Error creating role:", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar este rol?')) return;
        try {
            await deleteRole(id);
            loadRoles();
        } catch (error) {
            console.error("Error deleting role:", error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                    Crear Nuevo Rol
                </h3>
                <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ID (ej: contador)</label>
                        <input
                            type="text"
                            required
                            value={newRole.id}
                            onChange={e => setNewRole({ ...newRole, id: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            placeholder="Identificador único"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            required
                            value={newRole.nombre_rol}
                            onChange={e => setNewRole({ ...newRole, nombre_rol: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            placeholder="Nombre visible"
                        />
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                        <input
                            type="text"
                            value={newRole.descripcion}
                            onChange={e => setNewRole({ ...newRole, descripcion: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            placeholder="Breve descripción"
                        />
                    </div>
                    <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2 transition-colors">
                        <Plus className="w-4 h-4" /> Crear
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rol</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {roles.map((role) => (
                            <tr key={role.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{role.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{role.nombre_rol}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{role.descripcion}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    {!['admin', 'psychologist', 'patient'].includes(role.id) && (
                                        <button onClick={() => handleDelete(role.id)} className="text-red-600 hover:text-red-900">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
