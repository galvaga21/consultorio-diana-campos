
"use client";

import Link from 'next/link';
import { Home, Users, Calendar, FileText, Settings, PieChart, Activity, MessageSquare, ClipboardList, Shield, LogOut } from 'lucide-react';
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

import { X } from 'lucide-react';

// ... imports remain the same

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { user, logout, loading } = useAuth();

    if (loading || !user) {
        return (
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col md:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex items-center h-16 px-6 border-b border-gray-100">
                    <div className="animate-pulse flex items-center gap-3 w-full">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                </div>
                <div className="flex-1 p-4 space-y-4">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="animate-pulse h-10 bg-gray-100 rounded-lg w-full"></div>
                    ))}
                </div>
                <div className="p-4 border-t border-gray-100">
                    <div className="animate-pulse flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-200 rounded w-20"></div>
                            <div className="h-2 bg-gray-200 rounded w-16"></div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }



    const filteredNavItems = navItems.filter(item => {
        if (!item.roles) return true;
        const currentRole = user.role || user.rol_id || 'patient';
        return item.roles.includes(currentRole);
    });

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
            `}>
                <div className="flex items-center justify-between h-16 px-6 border-b border-gray-100">
                    <div className="flex items-center">
                        <div className="relative h-8 w-8 mr-2">
                            <Image
                                src="/assets/logos/logo-creciendo-juntos.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-bold text-teal-700 tracking-tight">Creciendo Juntos</span>
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="md:hidden text-gray-500 hover:text-gray-700">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="px-4 py-2">
                    <div className="bg-gray-100 rounded-md px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                        {user.role === 'psychologist' && 'Psicóloga'}
                        {user.role === 'patient' && 'Paciente'}
                        {user.role === 'admin' && 'Admin'}
                    </div>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                    {filteredNavItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={onClose} // Auto-close on mobile selection
                            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                        >
                            <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3 overflow-hidden">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden relative shrink-0">
                                {user.photoUrl ? (
                                    <Image src={user.photoUrl} alt={user.name!} fill className="object-cover" />
                                ) : (
                                    <span>{user.name?.charAt(0)}</span>
                                )}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            title="Cerrar Sesión"
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
