"use client";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import TrustedSection from "./components/TrustedSection";
import RecentInsightsSection from "./components/RecentInsightsSection";
import FooterSection from "./components/FooterSection";
import SmarterWaySection from "./components/SmarterWay";
import SkillSection from "./components/SkillSection";

export default function New1Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ExpertiseSection />
      {/* <TrustedSection /> */}
      <SmarterWaySection/>
      <SkillSection/>
      <RecentInsightsSection /> 
      <FooterSection />
    </div>
  );
}

