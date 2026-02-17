
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                    <Link href="/terms" className="hover:text-gray-900 transition-colors">
                        Términos de Servicio
                    </Link>
                    <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                        Política de Privacidad
                    </Link>
                    <Link href="/contact" className="hover:text-gray-900 transition-colors">
                        Contacto
                    </Link>
                </div>
                <p className="text-gray-400 text-sm font-medium">
                    &copy; {new Date().getFullYear()} Consultorio Virtual Diana Campos. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
