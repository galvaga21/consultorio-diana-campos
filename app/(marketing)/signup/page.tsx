
import { SignUpForm } from '../../../components/SignUpForm';

export const metadata = {
    title: 'Crear Cuenta',
    description: 'Regístrate para comenzar a usar el Consultorio Virtual.',
};

export default function SignUpPage() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <SignUpForm />
        </div>
    );
}
