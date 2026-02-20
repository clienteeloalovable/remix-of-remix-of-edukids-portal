import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <ProductsSection />
        <TestimonialsSection />
        <SpecialOfferSection />
        <GuaranteeSection />
        <AboutSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
