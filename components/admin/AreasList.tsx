"use client";

import { useEffect, useState } from 'react';
import { getAreas, createArea, deleteArea } from '../../lib/admin-utils';
import { Area } from '../../lib/types';
import { Plus, Trash2, LayoutGrid } from 'lucide-react';

export function AreasList() {
    const [areas, setAreas] = useState<Area[]>([]);
    const [loading, setLoading] = useState(true);
    const [newArea, setNewArea] = useState({ id: '', nombre_area: '', descripcion: '' });

    useEffect(() => {
        loadAreas();
    }, []);

    const loadAreas = async () => {
        setLoading(true);
        try {
            const data = await getAreas();
            setAreas(data);
        } catch (error) {
            console.error("Error loading areas:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createArea({
                id: newArea.id,
                nombre_area: newArea.nombre_area,
                descripcion: newArea.descripcion
            });
            setNewArea({ id: '', nombre_area: '', descripcion: '' });
            loadAreas();
        } catch (error) {
            console.error("Error creating area:", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de eliminar esta área?')) return;
        try {
            await deleteArea(id);
            loadAreas();
        } catch (error) {
            console.error("Error deleting area:", error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <LayoutGrid className="w-5 h-5 text-blue-600" />
                    Crear Nueva Área
                </h3>
                <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ID (ej: recepcion)</label>
                        <input
                            type="text"
                            required
                            value={newArea.id}
                            onChange={e => setNewArea({ ...newArea, id: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            placeholder="Identificador único"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            required
                            value={newArea.nombre_area}
                            onChange={e => setNewArea({ ...newArea, nombre_area: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            placeholder="Nombre del área"
                        />
                    </div>
                    <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                        <input
                            type="text"
                            value={newArea.descripcion}
                            onChange={e => setNewArea({ ...newArea, descripcion: e.target.value })}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            placeholder="Breve descripción"
                        />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors">
                        <Plus className="w-4 h-4" /> Crear
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Área</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {areas.map((area) => (
                            <tr key={area.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{area.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{area.nombre_area}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{area.descripcion}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button onClick={() => handleDelete(area.id)} className="text-red-600 hover:text-red-900">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
