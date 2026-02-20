"use client";

import { useState } from 'react';
import { createDefaultAdmin } from '../../lib/firebase-utils';
import { seedDatabase } from '../../lib/seed-data';

export default function SetupPage() {
    const [status, setStatus] = useState('');

    const handleCreateAdmin = async () => {
        setStatus('Creando administrador...');
        try {
            await createDefaultAdmin();
            setStatus('✅ Administrador creado correctamente. Revisa la consola para credenciales. Ya puedes ir al Login.');
        } catch (error: any) {
            setStatus('❌ Error: ' + error.message);
        }
    };

    const handleSeedData = async () => {
        setStatus('Sembrando datos de ejemplo...');
        try {
            await seedDatabase();
            setStatus('✅ Datos de Áreas y Roles creados exitosamente.');
        } catch (error: any) {
            setStatus('❌ Error: ' + error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center space-y-6">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Configuración Inicial</h1>
                    <p className="text-gray-600 mb-4">Herramientas para inicializar el sistema.</p>
                </div>

                <div className="border-b border-gray-100 pb-6">
                    <p className="mb-2 text-sm text-gray-700 font-medium">1. Crear Usuario Admin</p>
                    <button
                        onClick={handleCreateAdmin}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Crear Admin Default
                    </button>
                    <p className="text-xs text-gray-400 mt-2">admin@creciendojuntos.com / AdminPassword123!</p>
                </div>

                <div className="pb-2">
                    <p className="mb-2 text-sm text-gray-700 font-medium">2. Sembrar Datos (Áreas y Roles)</p>
                    <button
                        onClick={handleSeedData}
                        className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                        Generar Datos de Ejemplo
                    </button>
                    <p className="text-xs text-gray-400 mt-2">Crea áreas (Clínica, TI) y roles básicos.</p>
                </div>

                {status && (
                    <div className={`p-3 rounded text-sm font-medium ${status.includes('❌') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
}
