"use client";
import HeroSection from "./components/HeroSection";
import ThreeCardsSection from "./components/ThreeCardsSection";
import MedicalBeautySection from "./components/MedicalBeautySection";
import AboutSection from "./components/AboutSection";
import ExchangeRateSection from "./components/ExchangeRateSection";
import FormSection from "./components/FormSection";
import FooterSection from "./components/FooterSection";

export default function New2Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ThreeCardsSection />
      <MedicalBeautySection />
      <AboutSection />
      <ExchangeRateSection />
      <FormSection />
      <FooterSection />
    </div>
  );
}

