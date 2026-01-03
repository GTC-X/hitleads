"use client";

export default function FinalCTASection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-yellow-500 mb-6">
          Join our Forex trading training and start your profitable journey
        </h2>
      </div>
    </section>
  );
}

