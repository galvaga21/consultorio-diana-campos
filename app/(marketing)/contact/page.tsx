
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export const metadata = {
    title: 'Contacto | Consultorio Virtual Diana Campos',
    description: 'Comunícate para agendar tu cita o resolver dudas. Estamos aquí para ti.',
};

export default function ContactPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hablemos</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Estamos aquí para escucharte. Envíanos un mensaje o contáctanos por los canales oficiales.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Contact Card */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-semibold leading-7 text-gray-900 mb-6">Información General</h3>
                            <dl className="space-y-6 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Dirección</span>
                                        <MapPin className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                    </dt>
                                    <dd>Consultorio Virtual<br />Lima, Perú / Atención Online</dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Teléfono</span>
                                        <Phone className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-blue-600 transition-colors" href="tel:+51987495419">+51 987 495 419</a>
                                        <p className="text-xs text-gray-400 mt-1">Lunes a Viernes, 9am - 6pm</p>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <Mail className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-blue-600 transition-colors" href="mailto:cdelcarpio05@gmail.com">cdelcarpio05@gmail.com</a>
                                    </dd>
                                </div>
                            </dl>

                            {/* Social Icons */}
                            <div className="mt-8 flex gap-4">
                                <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition-all">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-pink-600 transition-all">
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="h-6 w-6 text-blue-600" />
                                <h3 className="text-xl font-semibold leading-7 text-gray-900">Horarios de Atención</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span>Lunes - Viernes</span>
                                    <span className="font-medium text-gray-900">9:00 AM - 8:00 PM</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span>Sábados</span>
                                    <span className="font-medium text-gray-900">10:00 AM - 2:00 PM</span>
                                </li>
                                <li className="flex justify-between text-gray-400">
                                    <span>Domingos</span>
                                    <span>Cerrado</span>
                                </li>
                            </ul>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-2xl overflow-hidden h-64 shadow-sm border border-gray-200 bg-gray-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                            {/* Map Image / Iframe Placeholder */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-300 transition-colors">
                                <MapPin className="h-10 w-10 opacity-30" />
                                <span className="ml-2 font-medium">Ver en Mapa (Google Maps)</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Envíanos un mensaje</h3>
                        <p className="text-gray-500 mb-8">Completa el formulario y te responderemos en menos de 24 horas.</p>

                        <form action="#" method="POST" className="space-y-6">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
                                    <div className="mt-2.5">
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Apellido</label>
                                    <div className="mt-2.5">
                                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50 focus:bg-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50 focus:bg-white transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">Teléfono (Opcional)</label>
                                <div className="mt-2.5">
                                    <input type="tel" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50 focus:bg-white transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Mensaje o Motivo de Consulta</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} className="block w-full rounded-lg border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-gray-50 focus:bg-white transition-colors"></textarea>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="block w-full rounded-lg bg-blue-600 px-3.5 py-3 text-center text-sm font-bold text-white shadow-lg hover:bg-blue-500 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all transform active:scale-[0.98]">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
