"use client";

export default function HeroSection() {
  return (
    <section className="bg-white pt-12 md:pt-16 lg:pt-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text and Button */}
          <div className="space-y-4 max-w-md pb-16">
            {/* Title */}
            <div className=" flex gap-6 items-center">
              <img className="w-30 h-30" src="/new/tick-icon.png" alt="" />
              <h1 className="text-3xl md:text-4xl text-[#BF966B] leading-tight">
                影响汇率是有
                <br />
                那些因素?
              </h1>
            </div>

            {/* Main Text */}
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
              发现美丽的力量, {" "}提升你的实践 <br /> 发现美丽的力量,提升你的实践
            </p>

               {/* Main Text */}
               <p className="text-lg md:text-2xl text-[#BF966B] leading-relaxed">
              信任和提升你的本质信任和提升 你的本质
            </p>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-[#636363] leading-relaxed">
              汇率,即两种货币之间的兑换比率,对于全球货币流动至关重要。汇率,即两种货币之间的兑换比率,对于全球货币流动至关重要。
            </p>

            {/* Button */}
            <button
              className="inline-flex items-center gap-2 bg-[#1E7E58] hover:bg-green-900 text-white font-semibold px-6 md:px-8 py-3 md:py-4 min-w-xs justify-center rounded-full transition-colors duration-200 mt-4"
              style={{ boxShadow: "0px 4px 20px 0px #0000004F" }}
            >
              <span>按钮按钮按钮按钮</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Column - Man Photo */}
          <div className="relative">
            <div className=" rounded-lg overflow-hidden">
              {/* Placeholder for man photo - replace with actual image */}
              <div className="w-full h-[400px] md:h-[530px]  flex items-center justify-center">
                <div className=" w-full h-full mx-auto rounded-full flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain"
                    src="/new/banner2.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
