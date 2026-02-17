
import { SignUpForm } from '../../../components/SignUpForm';

export const metadata = {
    title: 'Crear Cuenta',
    description: 'Regístrate para comenzar a usar el Consultorio Virtual.',
};

export default function SignUpPage() {
    return (
        <>
            <SignUpForm />
        </>
    );
}
