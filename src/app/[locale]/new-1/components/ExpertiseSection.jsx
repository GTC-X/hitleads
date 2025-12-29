"use client";

export default function ExpertiseSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-3 bg-[#FF8A14]"></div>
            <p className="text-sm md:text-base text-[#FF8A14]">
              先进制造技术提升塞巴利工厂的竞争力
            </p>
          </div>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
          {/* Left Column - Bar Chart Graphic */}
          <div className="border-gray-300 transition-shadow relative flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl md:leading-[62px] font-normal text-gray-900">
              我们在该行业 <br />
              的专长
            </h2>
            <img src="/new/icon1.svg" className=" absolute right-[-25%] z-10 bottom-[-50px]" alt="" />
          </div>

          {/* Middle Column - Business Person Image */}
          <div className="relative  border-gray-200 transition-shadow">
            <img src="/new/icon2.svg" alt="" />
          </div>

          {/* Right Column - Abstract Data Visualization */}
          <div className="border-gray-700  transition-shadow">
            <img src="/new/icon3.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
