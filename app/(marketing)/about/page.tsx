
import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpen, Clock, Linkedin } from 'lucide-react';

export const metadata = {
    title: 'Sobre Mí | Consultorio Virtual Diana Campos',
    description: 'Conoce más sobre la Dra. Diana Campos y su experiencia.',
};

export default function AboutPage() {
    return (
        <div className="bg-white overflow-hidden">

            {/* Header Section */}
            <div className="relative bg-slate-900 py-32 sm:py-40">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-50" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Conoce a tu Terapeuta</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        "Mi misión es acompañarte en el proceso de descubrir tu propia fortaleza."
                    </p>
                </div>
            </div>


            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">

                    {/* Bio Column */}
                    <div className="lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-blue-600">Dra. Diana Campos Del Carpio</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Psicóloga Clínica & Especialista en Ansiedad</p>
                            <div className="mt-6 text-lg leading-8 text-gray-600 space-y-6">
                                <p>
                                    Hola, soy Diana. Desde muy joven me he sentido fascinada por la mente humana y la capacidad de resiliencia que todos llevamos dentro.
                                </p>
                                <p>
                                    Soy Licenciada en Psicología Clínica con Maestría en Terapia Cognitivo-Conductual. Durante los últimos 10 años, he tenido el privilegio de acompañar a cientos de personas en sus procesos de sanación y autodescubrimiento.
                                </p>
                                <p>
                                    Mi enfoque no es solo "tratar síntomas", sino comprender la historia completa de cada persona. Creo en una terapia activa, cálida y basada en objetivos claros.
                                </p>
                            </div>

                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none border-l-4 border-blue-100 pl-6">
                                <div className="relative">
                                    <dt className="font-semibold text-gray-900 text-lg mb-2">
                                        Filosofía de Trabajo
                                    </dt>
                                    <dd className="italic text-gray-700">
                                        "La terapia no es para 'locos', es para valientes que deciden hacerse cargo de su propia felicidad. Mi consultorio es un espacio libre de juicios."
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-10 flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <Linkedin className="h-6 w-6" />
                                </a>
                                {/* Add more social icons if needed */}
                            </div>
                        </div>
                    </div>

                    {/* Image / Stats Column */}
                    <div className="relative">
                        <div className="aspect-[4/5] w-full max-w-sm rounded-2xl bg-gray-100 object-cover lg:max-w-none relative overflow-hidden shadow-xl ring-1 ring-gray-900/10 mx-auto">
                            {/* Placeholder for Doctor's Photo */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
                                <span className="text-lg font-medium">Foto Profesional</span>
                            </div>
                        </div>
                        {/* Stats / Badges */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-xl text-center">
                                <span className="block text-3xl font-bold text-blue-600">10+</span>
                                <span className="text-sm text-gray-600">Años de Exp.</span>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl text-center">
                                <span className="block text-3xl font-bold text-purple-600">500+</span>
                                <span className="text-sm text-gray-600">Pacientes</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline / Education Section */}
                <div className="mt-32">
                    <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Formación y Trayectoria</h3>
                    <div className="relative border-l border-gray-200 ml-4 space-y-12">
                        <div className="mb-8 ml-8">
                            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                                <Award className="h-3 w-3 text-blue-600" />
                            </span>
                            <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Maestría en Terapia Cognitivo-Conductual</h4>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2018 - 2020</time>
                            <p className="mb-4 text-base font-normal text-gray-500">Universidad Nacional Autónoma de México (UNAM). Graduada con Mención Honorífica.</p>
                        </div>
                        <div className="mb-8 ml-8">
                            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                                <BookOpen className="h-3 w-3 text-blue-600" />
                            </span>
                            <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Licenciatura en Psicología</h4>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2013 - 2017</time>
                            <p className="mb-4 text-base font-normal text-gray-500">Universidad Iberoamericana. Especialización en Psicología Clínica.</p>
                        </div>
                        <div className="mb-8 ml-8">
                            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                                <Clock className="h-3 w-3 text-blue-600" />
                            </span>
                            <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Diplomado en Intervención en Crisis</h4>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2016</time>
                            <p className="mb-4 text-base font-normal text-gray-500">Cruz Roja Mexicana. Capacitación para atención de primeros auxilios psicológicos.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <Link href="/contact" className="inline-block rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-slate-800 transition-all">
                        Agenda una consulta con Diana
                    </Link>
                </div>
            </div>
        </div>
    );
}
