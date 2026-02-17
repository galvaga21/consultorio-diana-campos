
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
    title: 'Contacto',
    description: 'Comunícate para agendar tu cita o resolver dudas.',
};

export default function ContactPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hablemos</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Estamos aquí para escucharte. Envíanos un mensaje o contáctanos por los canales oficiales.
                    </p>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-start lg:gap-12">
                    {/* Contact Information */}
                    <div className="flex-1 bg-gray-50 p-10 rounded-2xl border border-gray-100">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">Información de Contacto</h3>
                        <dl className="mt-4 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Dirección</span>
                                    <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>Av. Principal 123, Consultorio 4B<br />Colonia Roma Norte, CDMX</dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Teléfono</span>
                                    <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900" href="tel:+52 (55) 1234-5678">+52 (55) 1234-5678</a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900" href="mailto:hola@dianacampos.mx">hola@dianacampos.mx</a>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    {/* Contact Form Mockup */}
                    <form action="#" method="POST" className="flex-1 bg-white p-2">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
                                <div className="mt-2.5">
                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Apellido</label>
                                <div className="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Mensaje</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
