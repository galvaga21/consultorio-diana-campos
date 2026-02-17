
import Link from 'next/link';
import { Activity } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Activity className="h-8 w-8 text-blue-600" />
                            <span className="font-bold text-xl text-gray-900 tracking-tight">Consultorio Virtual</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#servicios" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                            Servicios
                        </Link>
                        <Link href="/#sobre-mi" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                            Sobre Mí
                        </Link>
                        <Link href="/#contacto" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                            Contacto
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="text-gray-900 hover:text-blue-600 font-medium text-sm transition-colors">
                            Log In
                        </Link>
                        <Link
                            href="/signup"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm hover:shadow-md"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
