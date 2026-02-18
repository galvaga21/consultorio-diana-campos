
import { SignUpForm } from '../../../components/auth/SignUpForm';

export const metadata = {
    title: 'Crear Cuenta',
    description: 'Regístrate para comenzar a usar Creciendo Juntos.',
};

export default function SignUpPage() {
    return (
        <>
            <SignUpForm />
        </>
    );
}
