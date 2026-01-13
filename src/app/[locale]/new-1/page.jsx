"use client";
import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/ExpertiseSection";
import TrustedSection from "./components/TrustedSection";
import RecentInsightsSection from "./components/RecentInsightsSection";
import FooterSection from "./components/FooterSection";
import SmarterWaySection from "./components/SmarterWay";
import SkillSection from "./components/SkillSection";
import Meta from "../components/Meta";

export default function New1Page() {
  return (
    <div className="min-h-screen bg-white">
       <Meta title="Build a Part Time Income Even If You Are Completely New" description="Learn how everyday people use the foreign exchange market to create extra income with step-by-step guidance, flexible time, and a beginner-friendly approach." />
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

