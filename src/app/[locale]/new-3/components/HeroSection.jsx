"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/new/page-3-banner.svg')`,
        }}
      ></div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900/40"></div>

     
    </section>
  );
}

