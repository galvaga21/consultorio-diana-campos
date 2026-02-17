
import Link from 'next/link';
import { Activity, Heart, Users } from 'lucide-react';

export const metadata = {
    title: 'Servicios',
    description: 'Conoce los servicios de psicología clínica que ofrecemos.',
};

export default function ServicesPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Nuestros Servicios</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Apoyo integral para tu salud mental
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Ofrecemos un enfoque personalizado para cada paciente, utilizando técnicas basadas en evidencia para lograr resultados duraderos.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                                    <Activity className="h-6 w-6 text-white" />
                                </div>
                                Consulta Individual
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">Espacio seguro y confidencial para trabajar en tus metas personales y emocionales. Abordamos ansiedad, depresión, y crecimiento personal.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-500">
                                    <Heart className="h-6 w-6 text-white" />
                                </div>
                                Terapia de Pareja
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">Herramientas para mejorar la comunicación, resolver conflictos y fortalecer el vínculo afectivo y la intimidad.</p>
                            </dd>
                        </div>
                        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-500">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                                Talleres y Grupos
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">Espacios de aprendizaje colaborativo sobre manejo de estrés, mindfulness, y habilidades sociales.</p>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="mt-16 flex justify-center">
                    <Link href="/signup" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                        Agendar Cita
                    </Link>
                </div>
            </div>
        </div>
    );
}
