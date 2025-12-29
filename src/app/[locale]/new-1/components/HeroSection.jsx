"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Cityscape Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900">
        {/* Simulated cityscape skyline */}
        <div className="absolute top-0 bottom-0 left-0 right-0 h-2/3 opacity-90">
          <img src="/page1-banner.svg" alt="" />
        </div>
      </div>

      {/* Semi-transparent Dark Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/75 via-gray-800/70 to-gray-900/80" /> */}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8 w-full container mx-auto">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
          我们凭借超过30年的经验提供一流的工业服务
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl px-4 font-medium">
          先进制造技术提升塞巴利工厂的竞争力
        </p>
      </div>
    </section>
  );
}
