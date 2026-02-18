
'use client';

import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function FloatingContactButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a small delay or scroll
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* Email Button */}
            <Link
                href="mailto:cdelcarpio05@gmail.com"
                className="flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-50 transition-all hover:scale-110 border border-blue-100 group relative"
                aria-label="Enviar Correo"
            >
                <Mail className="w-6 h-6" />
                <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Escríbenos
                </span>
            </Link>

            {/* WhatsApp Button */}
            <Link
                href="https://wa.me/51987495419" // Replace with actual number
                target="_blank"
                className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 group relative animate-bounce-subtle"
                aria-label="Chat de WhatsApp"
            >
                <MessageCircle className="w-7 h-7" />
                <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chat en vivo
                </span>
            </Link>
        </div>
    );
}
