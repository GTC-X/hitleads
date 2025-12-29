"use client";

export default function GSuiteIntroSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          G Suite 是一款极具影响力且操作简便的工具
        </h2>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          适用于任何企业的运营
        </p>

        {/* Highlight Box */}
        <div className="inline-block bg-red-500 rounded-lg px-6 md:px-8 py-4 md:py-5 mt-6">
          <p className="text-white text-base md:text-lg font-medium">
            无论其规律大小————大还是小,无论其幾樣大小————大还是小
          </p>
        </div>
      </div>
    </section>
  );
}

