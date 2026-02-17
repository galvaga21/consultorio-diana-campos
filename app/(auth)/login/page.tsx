
import { LoginForm } from '../../../components/LoginForm';
import { MagicLogin } from '../../../components/auth/MagicLogin';

export const metadata = {
    title: 'Iniciar Sesión',
    description: 'Inicia sesión en tu cuenta del Consultorio Virtual.',
};

export default function LoginPage() {
    return (
        <>
            <LoginForm />
            <MagicLogin />
        </>
    );
}
