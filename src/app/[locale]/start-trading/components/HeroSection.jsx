"use client";

import LeadsFrom from "./LeadsFrom";

export default function ForexHeroWithForm() {
  return (
    <section id="hero-section"
      className="relative w-full overflow-hidden bg-cover bg-top-left"
      style={{ backgroundImage: "url(/new-2/banner3.webp)" }}
    >
      <div className="relative mx-auto container flex flex-col lg:flex-row items-center lg:items-cetner justify-between gap-10 py-10 px-6 xl:py-28">
        {/* LEFT TEXT */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-[25px] md:text-[40px] xl:text-[45px] font-bold leading-[1.2] text-white/95">
            Ever Wonder How Traders Make Money Every Day?
          </h1>

          <p className="mt-8 text-[16px] md:text-[22px] font-[400] leading-[1.5] text-[#ADAABE]">
           Real Skills. Clear Structure. No Confusing Theory.<br className="hidden md:block"></br>Learn the basics of forex trading and how people profit from it.
          </p>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="relative w-full max-w-[380px]">
  {/* outer glow */}
  <div className="pointer-events-none absolute -inset-6 rounded-[26px] bg-[radial-gradient(circle_at_top,rgba(159,102,255,0.35),transparent_60%)] blur-2xl" />

  {/* border stroke + glass card */}
  <div className="rounded-[22px] p-[1px] bg-[linear-gradient(180deg,rgba(159,102,255,0.65),rgba(159,102,255,0.10))]">
    <div
      className="rounded-[21px] px-6 pt-8 pb-6 bg-[linear-gradient(180deg,rgba(20,14,40,0.92),rgba(5,2,20,0.82))] backdrop-blur-md"
      style={{
        boxShadow:
          "0 25px 70px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* your form */}
      <LeadsFrom
        zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/uzc4qag/"
        successPath="/new-1"
        isPreAccount={false}
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
