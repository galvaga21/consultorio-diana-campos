
import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';

export const BioPreview = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto bg-slate-100 ring-1 ring-slate-900/5">
                            {/* Placeholder for Doctor Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                                <h3 className="text-2xl font-bold">Dra. Diana Campos Del Carpio</h3>
                                <p className="text-white/90">Psicóloga Clínica & Terapeuta Familiar</p>
                            </div>
                            {/* Mock Image Background if no real image asset */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                <Users className="w-24 h-24 opacity-20" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6">
                            <span className="h-px w-8 bg-blue-600"></span>
                            Sobre Mí
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Un enfoque humano para sanar.</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Entiendo que dar el primer paso hacia la terapia puede ser difícil. Mi objetivo es proporcionarte un entorno cálido y sin juicios donde te sientas seguro para explorar tus pensamientos y emociones.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Con más de 10 años de experiencia, utilizo un enfoque integrador que se adapta a tus necesidades específicas, combinando la terapia cognitivo-conductual con técnicas de mindfulness.
                        </p>
                        <Link href="/about" className="group inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                            Conoce mi trayectoria completa
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
