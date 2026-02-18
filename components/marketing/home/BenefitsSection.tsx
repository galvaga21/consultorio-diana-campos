
import { Shield, Brain, Calendar } from 'lucide-react';

export const BenefitsSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Shield className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Espacio Seguro</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Tu privacidad es fundamental. Ofrecemos un entorno digital encriptado donde puedes expresarte con total libertad.
                        </p>
                    </div>
                    <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-purple-50 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Brain className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Enfoque Integral</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Combinamos técnicas basadas en evidencia con un trato humano y personalizado para abordar tus necesidades únicas.
                        </p>
                    </div>
                    <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-teal-50 transition-colors duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Calendar className="w-7 h-7 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">A tu Ritmo</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Gestiona tus citas fácilmente desde nuestra plataforma. La terapia se adapta a tu vida, no al revés.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
