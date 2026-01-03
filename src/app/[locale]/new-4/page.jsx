"use client";
import HeroSection from "./components/HeroSection";
import SpecializationSection from "./components/SpecializationSection";
import TestimonialsSection from "./components/TestimonialsSection";
import MarketTrendsSection from "./components/MarketTrendsSection";
import FinalCTASection from "./components/FinalCTASection";

export default function New4Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SpecializationSection />
      <TestimonialsSection />
      <MarketTrendsSection />
      <FinalCTASection />
    </div>
  );
}

