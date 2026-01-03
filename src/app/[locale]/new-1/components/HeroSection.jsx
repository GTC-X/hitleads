import React from "react";
import NewPageForm from "./FormNewPage";

export default function HeroWithRightForm() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/new/banner-bg-new.svg')",
        }}
      />

      {/* Dark overlay (like screenshot) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25" />

      <div className="relative z-10 mx-auto container md:py-24 py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          {/* Left content */}
          <div className="text-white md:text-center">
            <h1 className="md:text-[42px] text-[32px] leading-[32px] font-[400] md:leading-[1.2] tracking-[-0.2px]">
              Creating additional income opportunities through the foreign
              exchange market
            </h1>

            <p className="mt-6 md:text-[28px] text-[22px] md:leading-[40px] leading-[30px] font-[200] text-white/85">
              Beginner–friendly ・ Compliant platform ・ Full guidance Start
              with simulated trading and gradually transition to real trading.
            </p>
          </div>

          {/* Right form card */}
          <div className="md:rounded-[10px] rounded-3xl px-8 py-8 shadow-[0_22px_55px_rgba(0,0,0,0.35)] form-card-gradient-mobile">
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
