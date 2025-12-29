import React from "react";

const FeatureWithImageZH = () => {
  return (
    <section className="w-full bg-white py-16 relative">
      {/* subtle divider lines (top/bottom like screenshot) */}
      <div className="border-t border-[#E6E6E6] absolute top-[15%] left-0 right-0" />
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="max-w-xl">
            <h3 className="text-[34px] font-medium text-[#BF966B] tracking-tight">
              影响汇率是有哪些因素？
            </h3>

            <p className="mt-3 text-[30px] leading-12 text-[#3C3C3C]">
              发现美丽的力量，提升你的实践
              <br />
              发现美丽的力量，提升你的实践
            </p>

            <div className="mt-10 space-y-8">
              {/* Item 1 */}
              <div className=" gap-4">
                <div className="mt-1 flex h-8 w-8 mb-2 items-center justify-center rounded-full bg-[#E8D7C2]">
                  <img src="/new/tick-brown.svg" alt="" />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-[#BF966B]">
                    财富之路，我们为您铺就稳健基石
                  </p>
                  <p className="mt-1 text-[12px] leading-5 text-[#000000]">
                    全面、为您多年经验上总结，帮您在进阶投资里更稳…
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className=" gap-4">
                <div className="mt-1 flex h-8 w-8 items-center mb-2 justify-center rounded-full bg-[#E8D7C2]">
                  <img src="/new/tick-brown.svg" alt="" />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-[#BF966B]">
                    财富之路，我们为您铺就稳健基石
                  </p>
                  <p className="mt-1 text-[12px] leading-5 text-[#000000]">
                    全面、为您多年经验上总结，帮您在进阶投资里更稳…
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="flex justify-center lg:justify-end relative z-10">
            <div className="relative">
              {/* beige frame behind (offset) */}
              {/* main image */}
              <div className="relative bg-[#BF966B57] p-4 overflow-hidden rounded-[18px]  shadow-[0_22px_45px_rgba(0,0,0,0.18)]">
                <img
                  src="/new/lamp-img.svg" // <-- replace with your actual image path
                  alt="Hourglass"
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#E6E6E6] absolute bottom-[15%] left-0 right-0" />
    </section>
  );
};

export default FeatureWithImageZH;
