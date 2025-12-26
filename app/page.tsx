import { HeroSection } from "@/components/hero-section";
import { FeaturedProperties } from "@/components/featured-properties";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { OffersSection } from "@/components/offers-section";
import { SocialProofSection } from "@/components/social-proof-section";
import { LegalInfoSection } from "@/components/legal-info-section";
import { ProcessSection } from "@/components/process-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { LoadingScreen } from "@/components/loading-screen";

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-background">
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturedProperties color="lab(96.5018% 1.68455 3.32789)" />

      <ServicesSection />
      {/* <SocialProofSection /> */}
      {/* <LegalInfoSection /> */}
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
