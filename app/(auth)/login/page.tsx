import { LoginForm } from '../../../components/auth/LoginForm';

export const metadata = {
    title: 'Iniciar Sesión',
    description: 'Inicia sesión en tu cuenta de Creciendo Juntos.',
};

export default function LoginPage() {
    return (
        <>
            <LoginForm />
        </>
    );
}
