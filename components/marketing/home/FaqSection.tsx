
import { HelpCircle } from 'lucide-react';

export const FaqSection = () => {
    const faqs = [
        { q: "¿Cuánto dura cada sesión?", a: "Las sesiones de terapia individual tienen una duración aproximada de 50 minutos." },
        { q: "¿Aceptan seguros médicos?", a: "Actualmente trabajamos por reembolso. Te proporcionamos la factura necesaria para que la presentes a tu aseguradora." },
        { q: "¿La terapia es confidencial?", a: "Absolutamente. Todo lo discutido en sesión está protegido por el secreto profesional y ética psicológica." },
        { q: "¿Qué necesito para la sesión online?", a: "Solo necesitas un dispositivo con cámara y micrófono, una conexión estable a internet y un lugar privado." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
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
    );
};
