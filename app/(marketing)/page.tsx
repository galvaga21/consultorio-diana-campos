import Link from 'next/link';
import { Activity, Brain, Calendar, CheckCircle2, Clock, Heart, MessageCircle, Shield, Sparkles, Users } from 'lucide-react';

export const metadata = {
    title: 'Inicio | Consultorio Virtual Diana Campos',
    description: 'Tu espacio seguro para el crecimiento personal y el bienestar emocional.',
};

export default function LandingPage() {
    return (
        <>
            {/* Hero Section */}
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
                                className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-50 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
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
                        <div className="mt-12 flex items-center justify-center gap-8 text-slate-400 text-sm font-medium">
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

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
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

            {/* Services Highlight */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">¿Cómo podemos ayudarte?</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Selecciona la modalidad que mejor se adapte a lo que estás buscando hoy.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
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

            {/* Testimonials */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Lo que dicen nuestros pacientes</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { text: "Dra. Diana me ayudó a ver las cosas desde otra perspectiva. Su empatía es increíble.", author: "Sofía M." },
                            { text: "El sistema de citas es super fácil y las sesiones online son muy cómodas.", author: "Carlos R." },
                            { text: "Gracias a los talleres he aprendido a gestionar mejor mi ansiedad.", author: "Ana P." }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative">
                                <div className="text-blue-200 absolute top-4 left-4">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                                </div>
                                <p className="text-slate-700 relative z-10 pt-6 italic mb-4">"{testimonial.text}"</p>
                                <p className="text-slate-900 font-semibold text-right">— {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                        No tienes que hacerlo solo.
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                        Da el primer paso hoy. Estamos aquí para escucharte y acompañarte en tu proceso.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/signup"
                            className="rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-lg hover:bg-blue-50 transition-colors"
                        >
                            Comenzar Ahora
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-xl bg-blue-700 px-8 py-4 text-base font-semibold text-white border border-blue-500 hover:bg-blue-600 transition-colors"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
