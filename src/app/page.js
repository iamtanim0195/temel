import CustomersSection from "@/components/CustomersSection";
import Hero2Section from "@/components/Hero2Section";
import Hero3Section from "@/components/Hero3Section";
import HeroImageCollage from "@/components/HeroImageCollage";
import HeroSection from "@/components/HeroSection";
import SunProtectionSection from "@/components/SunProtectionSection";
import TemelSonnenschutzConfigurator from "@/components/TemelSonnenschutzConfigurator";
import TopServiceSection from "@/components/TopServiceSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Hero2Section />
      <Hero3Section />
      <HeroImageCollage />
      <TemelSonnenschutzConfigurator />
      <CustomersSection />
      <TopServiceSection />
      <SunProtectionSection />
    </div>
  );
}
