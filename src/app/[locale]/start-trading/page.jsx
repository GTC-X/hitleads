"use client";
import HeroSection from "./components/HeroSection";
import ThreeCardsSection from "./components/ThreeCardsSection";
import MedicalBeautySection from "./components/MedicalBeautySection";
import AboutSection from "./components/AboutSection";
import ExchangeRateSection from "./components/ExchangeRateSection";
import FormSection from "./components/FormSection";
import FooterSection from "./components/FooterSection";
import Meta from "../components/Meta";

export default function New2Page() {
  return (
    <>
     <Meta title="Understand market trends, master the core skills of forex trading" description="In the world of forex trading, every trade is a new opportunity waiting to be seized." />
     <div className="min-h-screen bg-white">
      <HeroSection />
      <ThreeCardsSection />
      <MedicalBeautySection />
      <AboutSection />
      <ExchangeRateSection />
    </div>
    </>
    
  );
}

