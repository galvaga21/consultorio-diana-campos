
import Link from 'next/link';
import { Activity } from 'lucide-react';

export const ServicesPreview = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">¿Cómo podemos ayudarte?</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Selecciona la modalidad que mejor se adapte a lo que estás buscando hoy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {['Terapia Individual', 'Terapia de Pareja', 'Talleres y Grupos'].map((service, idx) => (
                        <div key={idx} className="relative group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:border-blue-100">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Activity className="w-24 h-24 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service}</h3>
                            <p className="text-slate-600 mb-8">
                                Sesiones diseñadas para profundizar en tus emociones y brindarte herramientas prácticas para el día a día.
                            </p>
                            <Link href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                                Saber más <div className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform">→</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
