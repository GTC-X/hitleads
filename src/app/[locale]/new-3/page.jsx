"use client";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GSuiteIntroSection from "./components/GSuiteIntroSection";
import GoogleServicesSection from "./components/GoogleServicesSection";
import PricingTableSection from "./components/PricingTableSection";
import QuoteFormSection from "./components/QuoteFormSection";
import AdvantagesSection from "./components/AdvantagesSection";
import CallToActionSection from "./components/CallToActionSection";
import FooterSection from "./components/FooterSection";
import AppsRadialMap from "./components/Section2";

export default function New3Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AppsRadialMap/>
      <GSuiteIntroSection />
      <GoogleServicesSection />
      <PricingTableSection />
      <QuoteFormSection />
      <AdvantagesSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}

