"use client";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import TrustedSection from "./components/TrustedSection";
import RecentInsightsSection from "./components/RecentInsightsSection";
import FooterSection from "./components/FooterSection";

export default function New1Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ExpertiseSection />
      <TrustedSection />
      <RecentInsightsSection />
      <FooterSection />
    </div>
  );
}

