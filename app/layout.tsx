
import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Modern font choice
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://consultoriodianacampos.mx'),
    title: {
        template: "%s | Creciendo Juntos",
        default: "Creciendo Juntos - Dra. Diana Campos",
    },
    description: "Plataforma de gestión y atención psicológica profesional. Terapia individual, de pareja y talleres.",
    keywords: ["Psicología", "Terapia", "Salud Mental", "Ansiedad", "Depresión", "CDMX", "Online", "Creciendo Juntos"],
    authors: [{ name: "Dra. Diana Campos" }],
    creator: "Diana Campos",
    publisher: "Creciendo Juntos",
    icons: {
        icon: '/assets/logos/logo-creciendo-juntos.png', // Using the logo as favicon if possible
    },
    openGraph: {
        title: 'Creciendo Juntos - Dra. Diana Campos',
        description: 'Tu espacio seguro para el crecimiento personal y el bienestar emocional.',
        url: 'https://consultoriodianacampos.mx',
        siteName: 'Creciendo Juntos',
        locale: 'es_MX',
        type: 'website',
        images: [
            {
                url: '/assets/logos/logo-creciendo-juntos.png',
                width: 1200,
                height: 630,
                alt: 'Creciendo Juntos Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Creciendo Juntos - Dra. Diana Campos',
        description: 'Tu espacio seguro para el crecimiento personal y el bienestar emocional.',
        images: ['/assets/logos/logo-creciendo-juntos.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${outfit.className} min-h-screen antialiased bg-gray-50 text-gray-900`}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
