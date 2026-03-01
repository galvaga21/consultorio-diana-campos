"use client";

import { useState, useEffect } from 'react';
import { db, firebaseConfig } from '../../lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { adminCreateAuthUser } from '../../lib/admin-utils';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Select } from '../../components/ui/Select';
import { Shield, PlusSquare, UserPlus, Database } from 'lucide-react';

export default function SetupPage() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [areas, setAreas] = useState<{ id: string, nombre_area: string }[]>([]);
    const [roles, setRoles] = useState<{ id: string, nombre_rol: string }[]>([]);

    // Form states
    const [areaForm, setAreaForm] = useState({ nombre_area: '', descripcion: '' });
    const [roleForm, setRoleForm] = useState({ nombre_rol: '', descripcion: '', area_id: '' });
    const [adminForm, setAdminForm] = useState({ nombres: '', apellidos: '', email: '', password: '', rol_id: '' });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    useEffect(() => {
        if (isAuthenticated) {
            loadDropdowns();
        }
    }, [isAuthenticated]);

    const loadDropdowns = async () => {
        try {
            const areasSnap = await getDocs(collection(db, "areas"));
            setAreas(areasSnap.docs.map(doc => ({ id: doc.id, nombre_area: doc.data().nombre_area })));

            const rolesSnap = await getDocs(collection(db, "roles"));
            setRoles(rolesSnap.docs.map(doc => ({ id: doc.id, nombre_rol: doc.data().nombre_rol })));
        } catch (error) {
            console.error("Error cargando datos:", error);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "G1@nc@r10@G21") {
            setIsAuthenticated(true);
        } else {
            setStatus({ type: 'error', message: 'Contraseña incorrecta.' });
            setTimeout(() => setStatus({ type: '', message: '' }), 3000);
        }
    };

    const handleCreateArea = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, "areas"), areaForm);
            setStatus({ type: 'success', message: 'Área creada exitosamente.' });
            setAreaForm({ nombre_area: '', descripcion: '' });
            loadDropdowns();
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message });
        } finally {
            setLoading(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 3000);
        }
    };

    const handleCreateRole = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, "roles"), roleForm);
            setStatus({ type: 'success', message: 'Rol creado exitosamente.' });
            setRoleForm({ nombre_rol: '', descripcion: '', area_id: '' });
            loadDropdowns();
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message });
        } finally {
            setLoading(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 3000);
        }
    };

    const handleCreateAdmin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await adminCreateAuthUser(
                {
                    nombres: adminForm.nombres,
                    apellidos: adminForm.apellidos,
                    email: adminForm.email,
                    rol_id: adminForm.rol_id,
                    foto_perfil: ''
                },
                adminForm.password
            );
            setStatus({ type: 'success', message: 'Administrador creado exitosamente.' });
            setAdminForm({ nombres: '', apellidos: '', email: '', password: '', rol_id: '' });
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message });
        } finally {
            setLoading(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 3000);
        }
    };

    const handleGeneratePatientDefaults = async () => {
        setLoading(true);
        try {
            // 1. Crear Área "Consultorio Clínico"
            const areaDoc = await addDoc(collection(db, "areas"), {
                nombre_area: "Consultorio Clínico",
                descripcion: "Área generada por defecto para atenciones a pacientes."
            });

            // 2. Crear Rol "Paciente"
            await addDoc(collection(db, "roles"), {
                nombre_rol: "Paciente",
                descripcion: "Usuario estándar que recibe servicios terapéuticos.",
                area_id: areaDoc.id
            });

            setStatus({ type: 'success', message: 'Configuración de Paciente (Área y Rol) generada exitosamente. Ahora los pacientes podrán registrarse normalmente.' });
            loadDropdowns();
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message });
        } finally {
            setLoading(false);
            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
                <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-2xl space-y-6">
                    <div className="text-center">
                        <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h1 className="text-2xl font-bold text-white">Configuración del Sistema</h1>
                        <p className="text-gray-400 text-sm mt-2">Acceso restringido. Ingresa la contraseña maestra.</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                        />
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Verificar</Button>
                    </form>
                    {status.message && (
                        <p className={`text-sm text-center ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                            {status.message}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center mb-10">
                    <Shield className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl font-extrabold text-gray-900">Configuración Super Admin</h1>
                    <p className="mt-2 text-lg text-gray-600">Gestión de estructura inicial del sistema (Object IDs puros)</p>
                </div>

                {status.message && (
                    <div className={`p-4 rounded-lg font-medium text-center shadow-sm ${status.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'} transition-all`}>
                        {status.message}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Crear Área */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-4 text-indigo-700 font-bold border-b pb-2">
                            <Database className="w-5 h-5" /> 1. Crear Área
                        </div>
                        <form onSubmit={handleCreateArea} className="space-y-4">
                            <Input label="Nombre del Área" required value={areaForm.nombre_area} onChange={e => setAreaForm({ ...areaForm, nombre_area: e.target.value })} placeholder="Ej: Gerencia General" />
                            <Input label="Descripción" required value={areaForm.descripcion} onChange={e => setAreaForm({ ...areaForm, descripcion: e.target.value })} />
                            <Button type="submit" disabled={loading} className="w-full" leftIcon={<PlusSquare className="w-4 h-4" />}>Guardar Área</Button>
                        </form>
                    </div>

                    {/* Crear Rol */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-4 text-emerald-700 font-bold border-b pb-2">
                            <Shield className="w-5 h-5" /> 2. Crear Rol
                        </div>
                        <form onSubmit={handleCreateRole} className="space-y-4">
                            <Input label="Nombre del Rol" required value={roleForm.nombre_rol} onChange={e => setRoleForm({ ...roleForm, nombre_rol: e.target.value })} placeholder="Ej: Administrador del Sistema" />
                            <Select label="Asignar Área" required value={roleForm.area_id} onChange={e => setRoleForm({ ...roleForm, area_id: e.target.value })} options={areas.map(a => ({ value: a.id, label: a.nombre_area }))} placeholder="-- Seleccionar --" />
                            <Input label="Descripción" required value={roleForm.descripcion} onChange={e => setRoleForm({ ...roleForm, descripcion: e.target.value })} />
                            <Button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700" leftIcon={<PlusSquare className="w-4 h-4" />}>Guardar Rol</Button>
                        </form>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
                    <div className="flex items-center gap-2 mb-4 text-blue-700 font-bold border-b pb-2">
                        <UserPlus className="w-5 h-5" /> 3. Crear Usuario Administrador
                    </div>
                    <form onSubmit={handleCreateAdmin} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4 md:col-span-1 border-r border-gray-100 pr-4">
                            <Input label="Nombres" required value={adminForm.nombres} onChange={e => setAdminForm({ ...adminForm, nombres: e.target.value })} />
                            <Input label="Apellidos" required value={adminForm.apellidos} onChange={e => setAdminForm({ ...adminForm, apellidos: e.target.value })} />
                        </div>
                        <div className="space-y-4 md:col-span-1 pl-4">
                            <Input label="Email" type="email" required value={adminForm.email} onChange={e => setAdminForm({ ...adminForm, email: e.target.value })} />
                            <Input label="Contraseña" type="password" required value={adminForm.password} onChange={e => setAdminForm({ ...adminForm, password: e.target.value })} />
                            <Select label="Asignar Rol" required value={adminForm.rol_id} onChange={e => setAdminForm({ ...adminForm, rol_id: e.target.value })} options={roles.map(r => ({ value: r.id, label: r.nombre_rol }))} placeholder="-- Seleccionar --" />
                        </div>
                        <div className="md:col-span-2 mt-4 pt-4 border-t border-gray-100">
                            <Button type="submit" disabled={loading || !adminForm.rol_id} className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">Registrar Administrador</Button>
                        </div>
                    </form>
                </div>

                <div className="bg-purple-50 p-6 rounded-2xl shadow-sm border border-purple-200 mt-8 text-center">
                    <h3 className="font-bold text-purple-900 mb-2 text-xl">Configuración por Defecto (Pacientes)</h3>
                    <p className="text-purple-700 mb-6 text-sm">Generar automáticamente el Área "Consultorio Clínico" y el Rol "Paciente" con Object IDs para que el registro de pacientes funcione correctamente.</p>
                    <Button onClick={handleGeneratePatientDefaults} disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                        Generar Rol/Área Paciente Default
                    </Button>
                </div>
            </div>
        </div>
    );
}
