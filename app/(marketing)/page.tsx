
import Link from 'next/link';
import { Activity, ArrowRight, Brain, Calendar, CheckCircle2, Clock, HelpCircle, MapPin, MessageCircle, Phone, Shield, Sparkles, Users } from 'lucide-react';

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
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#3b82f6] to-[#9333ea]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
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
                className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
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
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-slate-500 text-sm font-medium">
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

      {/* Meet the Doctor Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto bg-slate-100 ring-1 ring-slate-900/5">
                        {/* Placeholder for Doctor Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
                         <div className="absolute bottom-0 left-0 p-8 z-20 text-white">
                            <h3 className="text-2xl font-bold">Dra. Diana Campos</h3>
                            <p className="text-white/90">Psicóloga Clínica & Terapeuta Familiar</p>
                        </div>
                        {/* Mock Image Background if no real image asset */}
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                           <Users className="w-24 h-24 opacity-20" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6">
                        <span className="h-px w-8 bg-blue-600"></span>
                        Sobre Mí
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Un enfoque humano para sanar.</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Entiendo que dar el primer paso hacia la terapia puede ser difícil. Mi objetivo es proporcionarte un entorno cálido y sin juicios donde te sientas seguro para explorar tus pensamientos y emociones.
                    </p>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Con más de 10 años de experiencia, utilizo un enfoque integrador que se adapta a tus necesidades específicas, combinando la terapia cognitivo-conductual con técnicas de mindfulness.
                    </p>
                    <Link href="/about" className="group inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                        Conoce mi trayectoria completa
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">¿Cómo funciona?</h2>
                  <p className="mt-4 text-lg text-slate-600">Iniciar tu proceso terapéutico es más sencillo de lo que crees.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { icon: Calendar, title: '1. Agenda tu cita', desc: 'Elige el horario que mejor se adapte a ti a través de nuestra plataforma en línea.' },
                      { icon: MessageCircle, title: '2. Conexión Inicial', desc: 'Tendremos una primera sesión para conocernos y definir tus objetivos.' },
                      { icon: Activity, title: '3. Inicia tu proceso', desc: 'Comenzaremos a trabajar juntos con sesiones personalizadas para tu bienestar.' }
                  ].map((step, idx) => (
                      <div key={idx} className="relative flex flex-col items-center text-center p-8">
                          <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative z-10">
                              <step.icon className="w-8 h-8 text-blue-600" />
                              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-700">
                                  {idx + 1}
                              </div>
                          </div>
                          {idx !== 2 && (
                              <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-slate-200 -z-0" />
                          )}
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                          <p className="text-slate-600">{step.desc}</p>
                      </div>
                  ))}
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

       {/* FAQ Section */}
       <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                  {[
                      { q: "¿Cuánto dura cada sesión?", a: "Las sesiones de terapia individual tienen una duración aproximada de 50 minutos." },
                      { q: "¿Aceptan seguros médicos?", a: "Actualmente trabajamos por reembolso. Te proporcionamos la factura necesaria para que la presentes a tu aseguradora." },
                      { q: "¿La terapia es confidencial?", a: "Absolutamente. Todo lo discutido en sesión está protegido por el secreto profesional y ética psicológica." },
                      { q: "¿Qué necesito para la sesión online?", a: "Solo necesitas un dispositivo con cámara y micrófono, una conexión estable a internet y un lugar privado." }
                  ].map((faq, idx) => (
                      <div key={idx} className="border border-slate-200 rounded-xl p-6 hover:border-blue-200 transition-colors">
                          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-3">
                             <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                             {faq.q}
                          </h3>
                          <p className="mt-3 text-slate-600 pl-8">{faq.a}</p>
                      </div>
                  ))}
              </div>
          </div>
       </section>

        {/* Blog Preview Section */}
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Artículos Recientes</h2>
                        <p className="mt-2 text-slate-600">Recursos y lecturas para tu bienestar.</p>
                    </div>
                    <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 hidden sm:block">Ver todo el blog &rarr;</Link>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                     {[
                         { title: "5 Técnicas para manejar la ansiedad", cat: "Bienestar", date: "15 Oct 2023" },
                         { title: "La importancia del autocuidado", cat: "Estilo de Vida", date: "10 Oct 2023" },
                         { title: "¿Cuándo es momento de ir a terapia?", cat: "Salud Mental", date: "05 Oct 2023" }
                     ].map((post, idx) => (
                         <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                             <div className="h-48 bg-slate-200 relative">
                                  {/* Mock Image Placeholder */}
                                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                      <span className="text-sm font-medium">Imagen del Artículo</span>
                                  </div>
                             </div>
                             <div className="p-6">
                                 <div className="flex justify-between items-center text-xs text-slate-500 mb-3">
                                     <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">{post.cat}</span>
                                     <span>{post.date}</span>
                                 </div>
                                 <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">{post.title}</h3>
                                 <Link href="#" className="text-sm text-slate-500 font-medium hover:text-blue-600 inline-flex items-center gap-1 mt-4">
                                     Leer artículo <ArrowRight className="w-3 h-3" />
                                 </Link>
                             </div>
                         </div>
                     ))}
                </div>
            </div>
        </section>

      {/* Embedded Contact Form Section */}
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
                                <span>+52 (55) 1234-5678</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <span>CDMX, Colonia Roma</span>
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
    </>
  );
}
