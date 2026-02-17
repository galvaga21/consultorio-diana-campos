
import Link from 'next/link';
import { Home, Users, Calendar, FileText, Settings, PieChart, Activity } from 'lucide-react';

const navItems = [
    { label: 'Inicio', href: '/dashboard', icon: Home },
    { label: 'Mis Pacientes', href: '/expediente', icon: Users }, // Demo: redirect to expediente
    { label: 'Calendario', href: '/dashboard', icon: Calendar },
    { label: 'Archivos', href: '/archivos', icon: FileText },
    { label: 'Finanzas', href: '/finanzas', icon: PieChart },
    { label: 'Configuración', href: '/configuracion', icon: Settings },
];

export function Sidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
            <div className="flex items-center h-16 px-6 border-b border-gray-100">
                <Activity className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900 tracking-tight">Consultorio</span>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
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
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        DC
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">Dr. Diana Campos</p>
                        <p className="text-xs text-gray-500">Psicóloga Clínica</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
