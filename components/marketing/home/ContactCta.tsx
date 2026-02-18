
import { Phone, MapPin } from 'lucide-react';

export const ContactCta = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-12 lg:p-16 text-white bg-blue-600 relative">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">¿Tienes dudas? Escríbenos.</h2>
                            <p className="text-blue-100 text-lg mb-8">Déjanos tus datos y nos pondremos en contacto contigo a la brevedad para resolver tus inquietudes o agendar tu cita.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <span>+51 987 495 419</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <span>Lima, Perú / Atención Online</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                    </div>
                    <div className="lg:w-1/2 bg-white p-12 lg:p-16">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                                <input type="text" id="name" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Tu nombre" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
                                <input type="email" id="email" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="tu@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                                <textarea id="message" rows={4} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="¿Cómo podemos ayudarte?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
