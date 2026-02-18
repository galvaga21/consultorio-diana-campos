
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const BlogPreview = () => {
    const posts = [
        { title: "5 Técnicas para manejar la ansiedad", cat: "Bienestar", date: "15 Oct 2023" },
        { title: "La importancia del autocuidado", cat: "Estilo de Vida", date: "10 Oct 2023" },
        { title: "¿Cuándo es momento de ir a terapia?", cat: "Salud Mental", date: "05 Oct 2023" }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Artículos Recientes</h2>
                        <p className="mt-2 text-slate-600">Recursos y lecturas para tu bienestar.</p>
                    </div>
                    <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 hidden sm:block">Ver todo el blog &rarr;</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
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
    );
};
