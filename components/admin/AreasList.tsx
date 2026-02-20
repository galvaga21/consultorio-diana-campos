
"use client";

import { useEffect, useState } from 'react';
import { getAreas, createArea, updateArea, deleteArea } from '../../lib/admin-utils';
import { Area } from '../../lib/types';
import { Plus, Edit2, Trash2, LayoutGrid } from 'lucide-react';
import { Button } from '../ui/Button';
import { Dialog } from '../ui/Dialog';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Table } from '../ui/Table';

export function AreasList() {
    const [areas, setAreas] = useState<Area[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingArea, setEditingArea] = useState<Area | null>(null);
    const [formData, setFormData] = useState({ nombre_area: '', descripcion: '' });

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

    const handleOpenCreate = () => {
        setEditingArea(null);
        setFormData({ nombre_area: '', descripcion: '' });
        setIsModalOpen(true);
    };

    const handleOpenEdit = (area: Area) => {
        setEditingArea(area);
        setFormData({ nombre_area: area.nombre_area, descripcion: area.descripcion });
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
        setEditingArea(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingArea) {
                await updateArea(editingArea.id, formData);
            } else {
                await createArea(formData);
            }
            handleClose();
            loadAreas();
        } catch (error) {
            console.error("Error saving area:", error);
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

    const columns = [
        {
            header: 'Nombre',
            cell: (area: Area) => (
                <div className="flex items-center gap-2 font-medium text-gray-900">
                    <div className="p-1.5 bg-blue-50 rounded-lg">
                        <LayoutGrid className="w-4 h-4 text-blue-600" />
                    </div>
                    {area.nombre_area}
                </div>
            )
        },
        {
            header: 'Descripción',
            cell: (area: Area) => <span className="text-gray-500 truncate max-w-xs block" title={area.descripcion}>{area.descripcion}</span>
        },
        {
            header: 'ID Sistema',
            cell: (area: Area) => <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100">{area.id}</span>
        }
    ];

    const actionColumn = {
        header: 'Acciones',
        align: 'right' as const,
        cell: (area: Area) => (
            <div className="flex justify-end gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleOpenEdit(area)}
                    title="Editar"
                    className="hover:bg-indigo-50 hover:text-indigo-600"
                >
                    <Edit2 className="w-4 h-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(area.id)}
                    title="Eliminar"
                    className="hover:bg-red-50 hover:text-red-600"
                >
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        )
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Administrar Áreas Físicas</h2>
                    <p className="text-sm text-gray-500 mt-1">Gestiona los espacios y departamentos del consultorio.</p>
                </div>
                <Button onClick={handleOpenCreate} leftIcon={<Plus className="w-4 h-4" />}>
                    Nueva Área
                </Button>
            </div>

            <Table
                columns={columns}
                data={areas}
                isLoading={loading}
                emptyText="No hay áreas registradas todavía."
                actionColumn={actionColumn}
            />

            <Dialog
                isOpen={isModalOpen}
                onClose={handleClose}
                title={editingArea ? 'Editar Área' : 'Crear Nueva Área'}
                actions={
                    <>
                        <Button variant="ghost" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            {editingArea ? 'Guardar Cambios' : 'Crear Área'}
                        </Button>
                    </>
                }
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre del Área"
                        required
                        value={formData.nombre_area}
                        onChange={e => setFormData({ ...formData, nombre_area: e.target.value })}
                        placeholder="Ej: Recepción, Consultorio 1"
                        autoFocus
                    />
                    <Textarea
                        label="Descripción"
                        rows={3}
                        value={formData.descripcion}
                        onChange={e => setFormData({ ...formData, descripcion: e.target.value })}
                        placeholder="Breve descripción del espacio y su función..."
                    />
                </form>
            </Dialog>
        </div>
    );
}
