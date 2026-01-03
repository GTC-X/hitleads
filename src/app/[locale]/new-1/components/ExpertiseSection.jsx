import React from "react";

export default function ExpertsCardsSection() {
  const cards = [
    {
      title: "Our experts will assist you in\nmastering all the trading skills.",
      img: "/new/new-icon2.svg",
      darkOverlay: true,
    },
    {
      title: "Market analysis and trading\nstrategies",
      img: "/new/new-icon3.svg",
      darkOverlay: false,
    },
    {
      title: "Foreign exchange investment\ntraining and services",
      img: "/new/new-icon4.svg",
      darkOverlay: false,
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto py-12">
        {/* small label */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-[4px] w-[26px] rounded-full bg-[#ff7a1a]" />
          <span className="text-[20px] font-medium text-[#ff7a1a]">
            Our experts in this field
          </span>
        </div>

        {/* heading */}
        <h2 className="mt-4 text-center md:text-[42px] text-[24px] leading-[1.1] font-[400] text-[#060606]">
          We specialize in sophisticated trading strategies in
          <br />
          the foreign exchange market, helping global
          <br />
          investors achieve stable returns.
        </h2>

        {/* cards - Mobile: 2-Column Layout (Large Left, Two Small Right), Desktop: 3-Column Grid */}
        <div className="mt-14">
          {/* Mobile Layout */}
          <div className="md:hidden flex gap-1.5">
            {/* Left - Large Panel */}
            <div className="flex-1 relative h-[270px] overflow-hidden rounded-[12px] bg-[#e9eef5] shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${cards[0].img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                <p className="text-left font-[400] text-[14px] leading-[1.3] text-white whitespace-pre-line">
                  {cards[0].title}
                </p>
              </div>
            </div>

            {/* Right - Two Small Panels Stacked */}
            <div className="flex-1 flex flex-col gap-1.5">
              {/* Top Right Panel */}
              <div className="relative flex-1 overflow-hidden rounded-[12px] bg-[#e9eef5] shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cards[1].img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-3 pb-3">
                  <p className="text-left font-[400] text-[12px] leading-[1.3] text-white whitespace-pre-line">
                    {cards[1].title}
                  </p>
                </div>
              </div>

              {/* Bottom Right Panel */}
              <div className="relative flex-1 overflow-hidden rounded-[12px] bg-[#e9eef5] shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cards[2].img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-3 pb-3">
                  <p className="text-left font-[400] text-[12px] leading-[1.3] text-white whitespace-pre-line">
                    {cards[2].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - 3 Column Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="relative h-[450px] overflow-hidden rounded-[12px] bg-[#e9eef5] shadow-[0_10px_22px_rgba(0,0,0,0.12)]"
              >
                {/* bg image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.img})` }}
                />

                {/* subtle dark at bottom (like screenshot) */}
                <div
                  className={`absolute inset-0 ${
                    c.darkOverlay
                      ? "bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                      : "bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                  }`}
                />

                {/* bottom text */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
                  <p className="text-center font-[400] text-[22px] leading-[1.25] text-white whitespace-pre-line">
                    {c.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
