
import Link from 'next/link';
import { Sparkles, CheckCircle2, Shield, Clock } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-blue-50/50 to-white pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 blur-3xl opacity-30 pointer-events-none">
                <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#3b82f6] to-[#9333ea]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-sm font-medium mb-8 border border-blue-200">
                        <Sparkles className="w-4 h-4" />
                        <span>Tu salud mental es prioridad</span>
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-6">
                        Recupera tu equilibrio <span className="text-blue-600 relative whitespace-nowrap">emocional
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Un espacio seguro, confidencial y empático donde podemos trabajar juntos para superar los desafíos y construir la vida que mereces.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/signup"
                            className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                        >
                            Agendar Primera Cita
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-all"
                        >
                            Ver Servicios
                        </Link>
                    </div>
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-slate-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span>Atención Certificada</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-500" />
                            <span>100% Confidencial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-purple-500" />
                            <span>Horarios Flexibles</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
