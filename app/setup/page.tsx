"use client";

import { useState } from 'react';
import { createDefaultAdmin } from '../../lib/firebase-utils';

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

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Configuración Inicial</h1>
                <p className="mb-6 text-gray-600">
                    Utiliza este botón para generar el usuario Administrador por defecto.
                    <br />
                    <small className="text-gray-400">admin@creciendojuntos.com / AdminPassword123!</small>
                </p>

                <button
                    onClick={handleCreateAdmin}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Crear Admin Default
                </button>

                {status && (
                    <div className="mt-4 p-3 bg-gray-100 rounded text-sm font-medium">
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
}
