"use client";

import CommonMainFormCopy from "../../CommonCopyInfoBip";

// import YourForm from "./YourForm"; // <- adjust path

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full min-h-[800px]
        flex items-center overflow-hidden
        bg-[url('/ht/edu1.webp')] bg-cover bg-center
      "
    >
      {/* 1) Overlay gradient over the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02002f]/85 via-[#02002f]/55 to-transparent" />
      {/* Optional: extra dark layer if image is too bright */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 3) Main content max width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* 2) Grid 2 like Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-center gap-10">
          {/* LEFT: Content */}
          <div className="text-left">
            <h1 className="text-white font-bold leading-tight tracking-tight
                           text-3xl sm:text-2xl lg:text-3xl xl:text-5xl capitalize">
              Creating additional income opportunities   through the foreign exchange market
            
            </h1>

            <div className="mt-6">
              <p className="text-white/95 font-medium text-base sm:text-lg lg:text-2xl">
                Beginner-friendly · Compliant platform · Full guidance
              </p>
              <p className="text-white/90 mt-2 text-sm sm:text-base  lg:text-2xl">
                Start with simulated trading and gradually transition to real trading.
              </p>
            </div>
          </div>

          {/* RIGHT: Form Card */}
          <div className="lg:flex lg:justify-end bg-white/80 rounded-xl px-5 py-10">
            <CommonMainFormCopy />
          </div>
        </div>
      </div>
    </section>
  );
}
