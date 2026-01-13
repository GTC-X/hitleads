import React from "react";
import NewPageForm from "./FormNewPage";

export default function HeroWithRightForm() {
  return (
    <section id="hero-section" className="relative w-full overflow-hidden bg-[url('/new/banner.webp')] bg-cover bg-center h-[800px]">

      {/* Dark overlay (like screenshot) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-[#141b43b0]/50" />

      <div className="relative z-10 mx-auto container md:py-24 py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          {/* Left content */}
          <div className="text-white md:text-left text-center">
            <h1 className="md:text-[42px] xl:text-6xl text-[32px] leading-[32px] font-[900] md:leading-[1.2]">
              Build a Part Time Income Even If You Are Completely New

            </h1>

            <p className="mt-6 md:text-[28px] text-[16px] md:leading-[40px] leading-[30px] text-white/85 max-w-4xl md:pr-10 ">
              Learn how everyday people use the foreign exchange market to create extra income with step-by-step guidance, flexible time, and a beginner-friendly approach.
            </p>
          </div>

          {/* Right form card */}
          <div className="md:rounded-[10px] rounded-3xl px-8 py-8 shadow-[0_22px_55px_rgba(0,0,0,0.35)] bg-gradient-to-r from-[#24358ba4] via-[#242c75] to-[#141b43b0]">
            <NewPageForm
              zapierUrl={
                "https://hooks.zapier.com/hooks/catch/16420445/uzc4qag/"
              }
              successPath="/success"
              isPreAccount={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
