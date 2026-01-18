"use client";

import Image from "next/image";
import NewPageForm from "../../new-1/components/FormNewPage";

export default function ForexHeroWithForm() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070311]">
      {/* Background Image (replace src) */}
      <div className="absolute inset-0">
        <img
          src="/new/new-banner-bg-page2.svg"
          alt="bg"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlays like screenshot */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,3,17,0.92)_0%,rgba(7,3,17,0.72)_45%,rgba(7,3,17,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_30%_40%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(650px_300px_at_80%_40%,rgba(124,94,255,0.20),transparent_65%)]" />
      </div>

      <div className="relative mx-auto flex container items-center justify-between gap-10 px-6 py-20">
        {/* LEFT TEXT */}
        <div className="max-w-2xl text-center">
          <h1 className="text-[28px] md:text-[40px] font-medium leading-[1.2] text-white/95">
            In the world of forex trading, every
            trade is a new opportunity waiting
            to be seized
          </h1>

          <p className="mt-8 text-[18px] md:text-[28px] font-[400] leading-[1.3] text-[#ADAABE]">
            Understand market trends, master the core
            <br />
            skills of forex trading
          </p>
        </div>

        {/* RIGHT FORM CARD */}
        {/* <div className="relative w-full max-w-[360px]">
           <div className="pointer-events-none absolute -inset-8 rounded-[22px] bg-[radial-gradient(circle,rgba(124,94,255,0.35),transparent_65%)] blur-2xl" />

          <div 
            className="relative rounded-lg bg-[rgba(22,14,40,0.85)] px-6 pb-6 pt-6 backdrop-blur"
            style={{
              boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
              borderTop: "1px solid rgba(124,94,255,0.6)",
              borderLeft: "1px solid rgba(124,94,255,0.5)",
              borderRight: "1px solid rgba(124,94,255,0.5)",
              borderBottom: "none",
              filter: "drop-shadow(0 0 15px rgba(124,94,255,0.3))",
            }}
          >
             <h3 className="text-center text-2xl font-medium text-white mb-6">
              Information filling
            </h3>

             <NewPageForm
              zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/uzc4qag/"
              successPath="/new-1"
              isPreAccount={false}
            />
          </div>
        </div> */}
           {/* Right form card */}
           <div className="md:rounded-[10px] rounded-3xl px-8 py-8 shadow-[0_22px_55px_rgba(0,0,0,0.35)] bg-gradient-to-r from-[#fff] via-[#f2f2f2] to-[#f7f7f7] w-full max-w-[380px]">
            <NewPageForm
              zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/uzc4qag/"
              successPath="/new-1"
              isPreAccount={false}
            />
          </div>
      </div>

      {/* Mobile stacking */}
      <style jsx>{`
        @media (max-width: 1023px) {
          section > div.relative.mx-auto {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
