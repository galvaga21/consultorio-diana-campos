
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Consultorio Diana Campos",
        default: "Consultorio Virtual - Diana Campos",
    },
    description: "Plataforma de gestión y atención psicológica profesional.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${inter.className} min-h-screen antialiased bg-gray-50 text-gray-900`}>
                {children}
            </body>
        </html>
    );
}
