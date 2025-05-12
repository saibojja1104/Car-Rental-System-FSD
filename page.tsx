import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import CarCatalogSection from '@/components/sections/car-catalog';
import PricingSection from '@/components/sections/pricing';
import BookingSection from '@/components/sections/booking';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import BenefitsSection from '@/components/sections/benefits';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <CarCatalogSection />
        <PricingSection />
        <BookingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
