import { Navbar } from '../../components/marketing/layout/Navbar';
import { Footer } from '../../components/marketing/layout/Footer';
import { FloatingContactButtons } from '../../components/marketing/layout/FloatingContactButtons';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
            <Navbar />
            <main className="flex-1 w-full">
                {children}
            </main>
            <Footer />
            <FloatingContactButtons />
        </div>
    );
}
