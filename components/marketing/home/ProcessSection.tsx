
import { Calendar, MessageCircle, Activity } from 'lucide-react';

export const ProcessSection = () => {
    const steps = [
        { icon: Calendar, title: '1. Agenda tu cita', desc: 'Elige el horario que mejor se adapte a ti a través de nuestra plataforma en línea.' },
        { icon: MessageCircle, title: '2. Conexión Inicial', desc: 'Tendremos una primera sesión para conocernos y definir tus objetivos.' },
        { icon: Activity, title: '3. Inicia tu proceso', desc: 'Comenzaremos a trabajar juntos con sesiones personalizadas para tu bienestar.' }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">¿Cómo funciona?</h2>
                    <p className="mt-4 text-lg text-slate-600">Iniciar tu proceso terapéutico es más sencillo de lo que crees.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
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
    );
};
