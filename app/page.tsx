import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ProductsSection } from "@/components/landing/products-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { VisionSection } from "@/components/landing/vision-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { AboutSection } from "@/components/landing/about-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { StatsSection } from "@/components/landing/stats-section";
import { FAQSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-background">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <HowItWorksSection />
      <VisionSection />
      <AboutSection />
      <TestimonialsSection />
      <StatsSection />
      <DevelopersSection />
      <FAQSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
