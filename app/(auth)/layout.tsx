
import Link from 'next/link';

export const metadata = {
    title: 'Consultorio Virtual - Acceso',
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-white">
            {/* Desktop Left side: Image only visible on lg+ screens */}
            <div className="hidden lg:flex lg:w-1/2 bg-gray-50 relative overflow-hidden items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/images/psychology.jpg')" }}
                />
            </div>

            {/* Right side: Content/Forms */}
            <div className="flex-1 flex flex-col bg-white relative">

                {/* Mobile Image Banner (Visible only on < lg screens) */}
                <div className="lg:hidden w-full h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/images/psychology.jpg')" }}>
                    {/* Overlay gradient for text readability if needed, or just style */}
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Mobile Logo/Home Link */}
                    <Link href="/" className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:bg-white transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        <span className="text-sm font-bold text-gray-900">Consultorio</span>
                    </Link>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
                    {/* Desktop Logo (only visible when split screen is active, positioned absolute top-right or similar? 
                         Actually, standard design might just have no logo on desktop right side if it's minimal, 
                         or a small one. The previous design had a link top-right. Let's keep a subtle return link for Desktop.) 
                     */}
                    <div className="hidden lg:block absolute top-8 right-8">
                        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            Volver al inicio
                        </Link>
                    </div>

                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
