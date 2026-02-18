
import Link from 'next/link';
import { Activity, Check, Heart, Users, Sparkles, Brain, Clock, Shield } from 'lucide-react';

export const metadata = {
    title: 'Servicios | Consultorio Virtual Diana Campos',
    description: 'Conoce los servicios de psicología clínica, terapia de pareja y talleres que ofrecemos.',
};

export default function ServicesPage() {
    return (
        <>
            {/* Header Section */}
            <div className="bg-blue-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Nuestros Servicios</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Apoyo integral para tu salud mental
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos un enfoque personalizado para cada paciente, utilizando técnicas basadas en evidencia para lograr resultados duraderos y significativos.
                    </p>
                </div>
            </div>

            {/* Detailed Services Grid */}
            <div className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Service 1 */}
                        <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 ring-1 ring-gray-900/5 transition-all hover:shadow-2xl hover:-translate-y-1">
                            <div className="p-8 sm:p-10 flex-auto">
                                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Consulta Individual</h3>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Un espacio privado y confidencial diseñado exclusivamente para ti. Trabajaremos en identificar patrones, procesar emociones y desarrollar herramientas prácticas para tu bienestar.
                                </p>
                                <div className="mt-8 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Ideal para:</h4>
                                    <div className="h-px flex-auto bg-gray-100" />
                                </div>
                                <ul role="list" className="mt-4 grid grid-cols-1 gap-2 text-sm leading-6 text-gray-600">
                                    {['Ansiedad y Estrés', 'Depresión', 'Autoestima', 'Duelo', 'Crecimiento Personal'].map((item) => (
                                        <li key={item} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-2 bg-gray-50 text-center border-t border-gray-100">
                                <Link href="/signup" className="block w-full py-4 text-sm font-semibold text-blue-600 hover:text-blue-500">
                                    Agendar Sesión &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 ring-1 ring-gray-900/5 transition-all hover:shadow-2xl hover:-translate-y-1">
                            <div className="p-8 sm:p-10 flex-auto">
                                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-pink-100 text-pink-600 mb-6">
                                    <Heart className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Terapia de Pareja</h3>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Fortalezcan su relación en un entorno neutral. Les ayudaré a mejorar la comunicación, resolver conflictos arraigados y reconectar emocionalmente.
                                </p>
                                <div className="mt-8 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-pink-600">Enfoques:</h4>
                                    <div className="h-px flex-auto bg-gray-100" />
                                </div>
                                <ul role="list" className="mt-4 grid grid-cols-1 gap-2 text-sm leading-6 text-gray-600">
                                    {['Resolución de Conflictos', 'Problemas de Comunicación', 'Infidelidad', 'Distanciamiento Afectivo', 'Planes a Futuro'].map((item) => (
                                        <li key={item} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-pink-600" aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-2 bg-gray-50 text-center border-t border-gray-100">
                                <Link href="/signup" className="block w-full py-4 text-sm font-semibold text-pink-600 hover:text-pink-500">
                                    Solicitar Información &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 ring-1 ring-gray-900/5 transition-all hover:shadow-2xl hover:-translate-y-1">
                            <div className="p-8 sm:p-10 flex-auto">
                                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Talleres y Grupos</h3>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Aprende y crece en comunidad. Nuestros talleres ofrecen herramientas prácticas para la vida diaria en un ambiente de apoyo mutuo.
                                </p>
                                <div className="mt-8 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-purple-600">Próximos temas:</h4>
                                    <div className="h-px flex-auto bg-gray-100" />
                                </div>
                                <ul role="list" className="mt-4 grid grid-cols-1 gap-2 text-sm leading-6 text-gray-600">
                                    {['Manejo de la Ansiedad', 'Mindfulness para Principiantes', 'Habilidades Sociales', 'Inteligencia Emocional', 'Escuela para Padres'].map((item) => (
                                        <li key={item} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-purple-600" aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-2 bg-gray-50 text-center border-t border-gray-100">
                                <Link href="/contact" className="block w-full py-4 text-sm font-semibold text-purple-600 hover:text-purple-500">
                                    Ver Calendario &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing / Investment Section Mockup */}
            <div className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Inversión en tu Bienestar</h2>
                        <p className="mt-2 text-lg text-gray-600">
                            Tarifas transparentes y accesibles. Tu salud mental es la mejor inversión.
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Sesión Individual</h3>
                                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Más Popular</span>
                            </div>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-gray-900">$800</span>
                                <span className="text-gray-500 ml-2">/ sesión (50 min)</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-gray-600">
                                <li className="flex gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Evaluación inicial completa
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Material de apoyo digital
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Seguimiento personalizado
                                </li>
                            </ul>
                            <Link href="/signup" className="block w-full bg-slate-900 text-white text-center py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                                Agendar ahora
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Pack Mensual</h3>
                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">Ahorra 10%</span>
                            </div>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-gray-900">$2,800</span>
                                <span className="text-gray-500 ml-2">/ 4 sesiones</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-gray-600">
                                <li className="flex gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Incluye 4 sesiones individuales
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Acceso prioritario a agenda
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Contacto directo por mensaje
                                </li>
                            </ul>
                            <Link href="/signup" className="block w-full bg-white border-2 border-slate-900 text-slate-900 text-center py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                                Adquirir Pack
                            </Link>
                        </div>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-8">
                        * Precios en MXN. Aceptamos tarjetas de crédito, débito y transferencias.
                    </p>
                </div>
            </div>

            {/* Conditions / Tags Section */}
            <div className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-8 text-gray-900">Problemas comunes que atendemos</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Ansiedad Generalizada', 'Depresión', 'Estrés Laboral (Burnout)', 'Duelo', 'Trauma', 'Autoestima', 'Problemas de Pareja', 'Crianza', 'Trastornos del Sueño', 'Manejo de la Ira', 'Adicciones Leves', 'TOC', 'Fobias'].map((tag) => (
                            <span key={tag} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

function CheckCircle2({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
