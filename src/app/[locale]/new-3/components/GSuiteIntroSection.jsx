// "use client";

// export default function GSuiteIntroSection() {
//   return (
//     <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Main Headline */}
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//           G Suite 是一款极具影响力且操作简便的工具
//         </h2>

//         {/* Sub-headline */}
//         <p className="text-xl md:text-2xl text-gray-700 mb-8">
//           适用于任何企业的运营
//         </p>

//         {/* Highlight Box */}
//         <div className="inline-block bg-red-500 rounded-lg px-6 md:px-8 py-4 md:py-5 mt-6">
//           <p className="text-white text-base md:text-lg font-medium">
//             无论其规律大小————大还是小,无论其幾樣大小————大还是小
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function AppsBubbleMindmap() {
  const nodes = [
    { id: 1, top: "86px", left: "66px" },
    { id: 2, top: "132px", left: "116px" },
    { id: 3, top: "178px", left: "72px" },
    { id: 4, top: "226px", left: "118px" },
    { id: 5, top: "260px", left: "170px" },

    { id: 6, top: "86px", right: "66px" },
    { id: 7, top: "132px", right: "116px" },
    { id: 8, top: "178px", right: "72px" },
    { id: 9, top: "226px", right: "118px" },
    { id: 10, top: "260px", right: "170px" },

    { id: 11, bottom: "86px", left: "210px" },
    { id: 12, bottom: "86px", right: "210px" },
  ];

  return (
    <section className="w-full bg-[#F2F4F7]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Card */}
        <div className="relative overflow-hidden rounded-[6px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
          {/* Top image strip */}
          <div className="h-[86px] w-full overflow-hidden">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.18)), url('https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=60')",
              }}
            />
          </div>

          {/* Cloud divider */}
          <div className="relative -mt-[22px] h-[54px] w-full">
            <CloudTop />
          </div>

          {/* Content area */}
          <div className="relative px-10 pb-14 pt-2">
            {/* Google text */}
            <div className="flex justify-center">
              <div className="text-[14px] font-semibold leading-none">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
            </div>

            {/* Diagram wrapper (fixed like screenshot) */}
            <div className="relative mx-auto mt-5 h-[310px] w-[520px]">
              {/* Center */}
              <div className="absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D57] shadow-[0_18px_40px_rgba(255,77,87,0.25)] flex flex-col items-center justify-center">
                <div className="text-white text-[14px] font-semibold tracking-[0.4px]">
                  APPS
                </div>
                <div className="mt-[2px] text-white/90 text-[9px] leading-none">
                  尽享智能办公服务
                </div>
              </div>

              {/* Lines (very light) */}
              <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F0F0F0]" />
              <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F3F3F3]" />

              {/* Nodes */}
              {nodes.map((n) => (
                <CircleNode key={n.id} pos={n} />
              ))}

              {/* Tooltip */}
              <div className="absolute right-[22px] top-[76px] w-[190px] rounded-[6px] bg-[#F3C337] px-4 py-3 text-[9px] leading-[1.55] text-[#5A4A00] shadow-[0_14px_26px_rgba(243,195,55,0.22)]">
                我们提供多样化的云端解决方案，帮助企业更高效地协作与管理。
                支持多终端接入、灵活扩展与安全配置，适用于 100+ 行业。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CircleNode({ pos }) {
  const style = {
    top: pos.top,
    left: pos.left,
    right: pos.right,
    bottom: pos.bottom,
  };

  return (
    <div className="absolute" style={style}>
      <div className="relative">
        <div className="h-[44px] w-[44px] rounded-full bg-white shadow-[0_10px_22px_rgba(0,0,0,0.06)] ring-1 ring-[#F0F0F0]" />
        {/* tiny label like screenshot */}
        <div className="absolute left-1/2 top-[52px] -translate-x-1/2 text-[8px] text-[#9C9C9C]">
          文案1
        </div>
      </div>
    </div>
  );
}

function CloudTop() {
  return (
    <svg
      viewBox="0 0 1200 140"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      <path
        d="M0,120 
           C80,70 140,70 220,120
           C300,50 380,50 460,120
           C540,60 620,60 700,120
           C780,45 860,45 940,120
           C1020,70 1100,70 1200,120
           L1200,140 L0,140 Z"
        fill="#ffffff"
      />
    </svg>
  );
}
