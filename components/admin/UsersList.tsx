"use client";

import { useEffect, useState } from 'react';
import { getAllUsers, updateUserRole } from '../../lib/firebase-utils';
import { UserProfile, UserRole } from '../../lib/types';
import { Shield, User, Briefcase, Search, Edit2, Check, X } from 'lucide-react';

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
        user.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getRoleBadge = (role: UserRole) => {
        switch (role) {
            case 'admin':
                return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"><Shield className="w-3 h-3" /> Admin</span>;
            case 'psychologist':
                return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><Briefcase className="w-3 h-3" /> Psicóloga</span>;
            case 'patient':
                return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><User className="w-3 h-3" /> Paciente</span>;
            default:
                return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{role}</span>;
        }
    };

    if (loading) return <div className="p-4 text-center text-gray-500">Cargando usuarios...</div>;

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
                <h3 className="font-semibold text-gray-900">Gestión de Usuarios</h3>
                <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Buscar por nombre o email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user) => (
                            <tr key={user.uid} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold shrink-0">
                                            {user.nombres.charAt(0)}{user.apellidos.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{user.nombres} {user.apellidos}</div>
                                            <div className="text-sm text-gray-500">Registrado: {user.createdAt?.toDate ? user.createdAt.toDate().toLocaleDateString() : 'N/A'}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{user.email}</div>
                                    <div className="text-sm text-gray-500">{user.celular || '-'}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {editingId === user.uid ? (
                                        <select
                                            value={selectedRole}
                                            onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                                            className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                        >
                                            <option value="patient">Paciente</option>
                                            <option value="psychologist">Psicóloga</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    ) : (
                                        getRoleBadge(user.rol_id)
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    {editingId === user.uid ? (
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => handleSaveRole(user.uid)} className="text-green-600 hover:text-green-900"><Check className="w-5 h-5" /></button>
                                            <button onClick={handleCancelEdit} className="text-red-600 hover:text-red-900"><X className="w-5 h-5" /></button>
                                        </div>
                                    ) : (
                                        <button onClick={() => handleEditClick(user)} className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1">
                                            <Edit2 className="w-4 h-4" /> Editar
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {filteredUsers.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                    No se encontraron usuarios que coincidan con la búsqueda.
                </div>
            )}
        </div>
    );
}
