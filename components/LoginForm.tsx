
import Link from 'next/link';

export function LoginForm() {
    return (
        <>
            <div className="text-left mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-sans">Hola de nuevo 👋</h2>
                <p className="mt-2 text-sm text-gray-500">
                    Ingresa tus datos para acceder a tu panel.
                </p>
            </div>

            <div className="mt-8">
                {/* Google Login Button */}
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:bg-gray-50 transition-all mb-6"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-gray-600">Continuar con Google</span>
                </button>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-400 font-medium">O con tu correo</span>
                    </div>
                </div>

                <form className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-lg border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 focus:bg-white transition-colors border"
                            placeholder="nombre@ejemplo.com"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-lg border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-gray-50 focus:bg-white transition-colors border"
                            placeholder="••••••••"
                        />
                        <div className="text-right mt-1">
                            <a href="#" className="font-medium text-xs text-blue-600 hover:text-blue-500 hover:underline transition-colors">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all transform active:scale-[0.98]"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-center text-sm text-gray-500">
                    ¿Aún no tienes cuenta?{' '}
                    <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors hover:underline">
                        Regístrate ahora
                    </Link>
                </p>
            </div>
        </>
    );
}
