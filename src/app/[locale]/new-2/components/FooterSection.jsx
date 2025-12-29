import React from "react";

export default function ZHHeaderStrip() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* wrapper with the same airy spacing */}
        <div className="flex items-center justify-between py-6">
          {/* Left: icon + title */}
          <div className="flex items-start gap-4">
            {/* Icon (approx) */}
            <div>
              <img className="w-20 h-20" src="/new/tick-icon.png" alt="" />
            </div>

            {/* Title + small subtitle line */}
            <div>
              <h3 className="text-[28px] font-medium leading-[1.2] text-[#BF966B]">
                影响汇率是有
                <br />
                哪些因素？
              </h3>
            </div>
          </div>

          {/* Right: two pills + small text under (like screenshot) */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-5">
              <span className="inline-flex h-[24px] items-center rounded-full bg-[#6D5A45] px-5 text-[9.5px] font-medium text-white/95 shadow-[0_6px_14px_rgba(0,0,0,0.12)]">
                汇率变化与交易、汇率波动的关键
              </span>
              <span className="inline-flex h-[24px] items-center rounded-full bg-[#6D5A45] px-5 text-[9.5px] font-medium text-white/95 shadow-[0_6px_14px_rgba(0,0,0,0.12)]">
                全球经济数据、政策与风险情绪的影响
              </span>
            </div>
          </div>

        </div>
        
        <div className="flex justify-between">
            <p className="mt-2 max-w-[520px] text-right text-[9.5px] leading-[1.6] text-[#B9B9B9]">
              全面了解不同因素对汇率的影响，帮助您更好地把握全球市场与投资机会
            </p>
            <p className="mt-2 max-w-[360px] text-[9.5px] leading-[1.6] text-[#B9B9B9]">
              全面了解不同因素对汇率的影响，帮助您更好地把握全球市场与投资机会
            </p>
          </div>
      </div>

      {/* subtle bottom divider */}    </section>
  );
}
