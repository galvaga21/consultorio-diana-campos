
"use client";

import Link from 'next/link';
import { Home, Users, Calendar, FileText, Settings, PieChart, Activity, MessageSquare, ClipboardList, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { NavItem, UserRole } from '../../lib/types';
import Image from 'next/image';

const navItems: NavItem[] = [
    // Common
    { label: 'Inicio', href: '/dashboard', icon: Home },

    // Psychologist
    { label: 'Agenda', href: '/dashboard', icon: Calendar, roles: ['psychologist'] },
    { label: 'Pacientes', href: '/expediente', icon: Users, roles: ['psychologist'] },
    { label: 'Finanzas', href: '/finanzas', icon: PieChart, roles: ['psychologist'] },

    // Patient
    { label: 'Mis Citas', href: '/dashboard', icon: Calendar, roles: ['patient'] },
    { label: 'Mi Expediente', href: '/expediente', icon: ClipboardList, roles: ['patient'] },
    { label: 'Pagos', href: '/finanzas', icon: FileText, roles: ['patient'] },

    // Admin
    { label: 'Usuarios', href: '/usuarios', icon: Users, roles: ['admin'] },
    { label: 'Reportes', href: '/reportes', icon: Activity, roles: ['admin'] },

    // Shared
    { label: 'Chat', href: '/chat', icon: MessageSquare, roles: ['psychologist', 'patient'] },
    { label: 'Configuración', href: '/configuracion', icon: Settings },
];

export function Sidebar() {
    const { user } = useAuth();

    if (!user) return null; // Or a loading skeleton

    const filteredNavItems = navItems.filter(item => {
        if (!item.roles) return true;
        return item.roles.includes(user.role);
    });

    return (
        <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
            <div className="flex items-center h-16 px-6 border-b border-gray-100">
                <div className="relative h-8 w-8 mr-2">
                    <img
                        src="/assets/logos/logo-creciendo-juntos.png"
                        alt="Logo"
                        className="object-contain"
                    />
                </div>
                <span className="text-lg font-bold text-teal-700 tracking-tight">Creciendo Juntos</span>
            </div>

            <div className="px-4 py-2">
                <div className="bg-gray-100 rounded-md px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                    {user.role === 'psychologist' && 'Psicóloga'}
                    {user.role === 'patient' && 'Paciente'}
                    {user.role === 'admin' && 'Admin'}
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {filteredNavItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                    >
                        <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" />
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden relative">
                        {user.photoUrl ? (
                            <Image src={user.photoUrl} alt={user.name} fill className="object-cover" />
                        ) : (
                            <span>{user.name.charAt(0)}</span>
                        )}
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
