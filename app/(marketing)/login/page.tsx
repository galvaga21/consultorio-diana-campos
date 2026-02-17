
import { LoginForm } from '../../../components/LoginForm';

export const metadata = {
    title: 'Iniciar Sesión',
    description: 'Inicia sesión en tu cuenta del Consultorio Virtual.',
};

export default function LoginPage() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <LoginForm />
        </div>
    );
}
