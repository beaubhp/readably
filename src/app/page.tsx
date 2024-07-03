import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { FeaturesSection } from "@/components/features-section";
import { FeatureWithImageLeft } from "@/components/feature-image-left";
import { FeatureWithImageRight } from "@/components/feature-image-right";
import { CtaSection } from "@/components/cta-section";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SocialProof />
      <Footer />
    </>
  );
}
