
'use client';

import Link from 'next/link';
import { Activity, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-10 w-10">
                                <img
                                    src="/assets/logos/logo-creciendo-juntos.png"
                                    alt="Logo Creciendo Juntos"
                                    className="object-contain" // Using img tag for simplicity in this context, or Next.js Image if preferred but without strictly knowing dimenions. Next.js Image is better.
                                />
                            </div>
                            <span className="font-bold text-xl text-teal-700 tracking-tight">Creciendo Juntos</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                            Servicios
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                            Sobre Mí
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                            Contacto
                        </Link>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
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

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                            aria-label="Menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute top-16 left-0 right-0 p-4 flex flex-col space-y-4 animate-in slide-in-from-top-2 duration-200">
                    <Link
                        href="/services"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Servicios
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Sobre Mí
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Contacto
                    </Link>
                    <div className="border-t border-gray-100 pt-4 mt-2 grid grid-cols-2 gap-4">
                        <Link
                            href="/login"
                            className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Log In
                        </Link>
                        <Link
                            href="/signup"
                            className="flex justify-center items-center px-4 py-2 bg-blue-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
