
import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpen, Clock } from 'lucide-react';

export const metadata = {
    title: 'Sobre Mí',
    description: 'Conoce más sobre la Dra. Diana Campos y su experiencia.',
};

export default function AboutPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-blue-600">Conóceme</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dra. Diana Campos</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Soy psicóloga clínica con más de 10 años de experiencia ayudando a personas a encontrar equilibrio y bienestar en sus vidas. Mi enfoque combina la terapia cognitivo-conductual con técnicas de mindfulness y aceptación.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Award className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                                        Formación Académica.
                                    </dt>
                                    <dd className="inline"> Licenciada en Psicología por la UNAM, con Maestría en Terapia Familiar Sistémica.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Clock className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                                        Experiencia.
                                    </dt>
                                    <dd className="inline"> He trabajado tanto en consulta privada como en instituciones de salud mental, atendiendo a cientos de pacientes.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <BookOpen className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                                        Enfoque.
                                    </dt>
                                    <dd className="inline"> Creo firmemente en la capacidad de cada persona para crecer y superar adversidades con las herramientas adecuadas.</dd>
                                </div>
                            </dl>
                            <div className="mt-10">
                                <Link href="/contact" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500">
                                    Ponte en contacto <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Placeholder for Doctor's Image */}
                        <div className="aspect-[4/5] w-full max-w-sm rounded-2xl bg-gray-100 object-cover lg:max-w-none relative overflow-hidden shadow-xl ring-1 ring-gray-400/10">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                                <span className="text-lg font-medium">Foto Profesional</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
