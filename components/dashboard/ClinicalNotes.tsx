
import React from 'react';
import { ClinicalNote } from '../../lib/types';
import { PencilLine, Clock } from 'lucide-react';

interface ClinicalNotesProps {
    notes: ClinicalNote[];
}

export const ClinicalNotes: React.FC<ClinicalNotesProps> = ({ notes }) => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <PencilLine className="w-5 h-5 mr-2 text-blue-600" />
                    Nueva Nota de Evolución
                </h3>
                <textarea
                    className="w-full h-32 p-4 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-shadow hover:shadow-inner"
                    placeholder="Escribe aquí los detalles de la sesión..."
                ></textarea>
                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm cursor-pointer">
                        Guardar Nota
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {notes.length === 0 ? (
                    <div className="text-center text-gray-400 py-10">
                        No hay notas registradas.
                    </div>
                ) : (
                    notes.map((note) => (
                        <div key={note.id} className="relative pl-8 before:absolute before:left-3 before:top-4 before:bottom-0 before:w-0.5 before:bg-gray-200 last:before:hidden">
                            <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-emerald-100 border-2 border-white shadow-sm flex items-center justify-center">
                                <Clock className="w-3 h-3 text-emerald-600" />
                            </div>
                            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                        {new Date(note.date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>
                                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                        {note.type}
                                    </span>
                                </div>
                                <div className="prose prose-sm text-gray-700 max-w-none" dangerouslySetInnerHTML={{ __html: note.content }} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
