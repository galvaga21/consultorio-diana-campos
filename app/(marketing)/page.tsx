
import { Hero } from '../../components/marketing/home/Hero';
import { BioPreview } from '../../components/marketing/home/BioPreview';
import { ProcessSection } from '../../components/marketing/home/ProcessSection';
import { BenefitsSection } from '../../components/marketing/home/BenefitsSection';
import { ServicesPreview } from '../../components/marketing/home/ServicesPreview';
import { FaqSection } from '../../components/marketing/home/FaqSection';
import { BlogPreview } from '../../components/marketing/home/BlogPreview';
import { ContactCta } from '../../components/marketing/home/ContactCta';

export const metadata = {
    title: 'Inicio | Creciendo Juntos',
    description: 'Tu espacio seguro para el crecimiento personal y el bienestar emocional.',
};

export default function LandingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Physician",
                        "name": "Creciendo Juntos - Dra. Diana Campos",
                        "image": "https://consultoriodianacampos.mx/assets/logos/logo-creciendo-juntos.png",
                        "@id": "https://consultoriodianacampos.mx",
                        "url": "https://consultoriodianacampos.mx",
                        "telephone": "+51987495419",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Consultorio Virtual",
                            "addressLocality": "Lima",
                            "addressRegion": "Lima",
                            "postalCode": "15000",
                            "addressCountry": "PE"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 19.4194,
                            "longitude": -99.1620
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "09:00",
                                "closes": "20:00"
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Saturday",
                                "opens": "10:00",
                                "closes": "14:00"
                            }
                        ],
                    }),
                }}
            />

            <Hero />
            <BioPreview />
            <ProcessSection />
            <BenefitsSection />
            <ServicesPreview />
            <FaqSection />
            <BlogPreview />
            <ContactCta />
        </>
    );
}
