"use client";

import Image from "next/image";
import { useState } from "react";

const DATA = [
  {
    title: "Forex Trading from Zero to First Profits",
    sub: "Learn how people enter forex trading and start earning from market movements.",
    bullets: [
      "Suitable for forex beginners, this course covers the basics· Built for beginners who want to understand how forex trading really works.",
      "Learn how currencies move and how traders look for profit opportunities.",
      "Get comfortable using trading platforms, tools, and basic trading methods.",
    ],
    cta:
      "Start learning forex trading and build your earning foundation",
  },
  {
    title: "Profit-Focused Trading Systems for Real Markets",
    sub: "Learn how skilled traders create strategies to earn in changing market conditions.",
    bullets: [
      "Designed for traders who want stronger results and better trade decisions.",
      "Learn deeper market analysis to find high-quality trade setups.",
      "Apply proven trading strategies used in trending and volatile markets.",
    ],
    cta:
      "Learn advanced trading methods to increase earning potential",
  },
  {
    title: "Smart Market Execution & Risk Control",
    sub: "Learn how to trade smarter using technical analysis and market behavior.",
    bullets: [
      "For traders ready to move beyond basics and trade with more confidence.",
      "Understand trader psychology and how decisions affect profits and losses.",
      "Create personal trading plans with strong risk control to protect capital.",
    ],
    cta:
      "Create personal trading plans with strong risk control to protect capital",
  },
];

function Check() {
  return (
    <span className="mt-[2px] inline-flex h-[14px] w-[14px] items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
      <svg
        viewBox="0 0 24 24"
        className="h-[8px] w-[8px] text-white/80"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function ForexCoursesPixelPerfectV2() {
  const [hovered, setHovered] = useState(null);
  const active = hovered ?? 1; // center card active by default

  return (
    <section className="relative w-full overflow-hidden bg-[#070311] py-16">
      {/* BG like screenshot */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_380px_at_50%_22%,rgba(255,255,255,0.10),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_70%_60%,rgba(124,94,255,0.12),transparent_70%)]" />
        <div className="absolute right-0 top-0 h-full w-[58%] opacity-[0.35]">
          {/* dummy background image */}
          <img
            src="/new/page2-bg-new.svg"
            alt="bg"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#070311]/40 to-[#070311]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070311]/10 via-[#070311]/20 to-[#070311]/75" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-[22px] md:text-[30px] xl:text-[35px] font-semibold leading-[1.35] text-white text-center">
          Learning how markets move and how traders think can help you turn forex trading into a serious income skill.
        </h2>

        <p className="mx-auto mt-5 max-w-6xl  text-center text-[16px] leading-[1.6] text-[#C0BBD9]">
          Trade in real market scenarios, understand price behavior, manage risk wisely, and aim to grow your capital step by step.
        </p>

        {/* Cards */}
        <div
          className="mt-16 grid gap-5 md:grid-cols-3 md:items-stretch px-5"
          onMouseLeave={() => setHovered(null)}
        >
          {DATA.map((c, idx) => {
            const isActive = active === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                className="relative h-full transition-all duration-300"
              >
                {/* Active purple ambient glow behind card */}
                {isActive && (
                  <div className="pointer-events-none absolute -inset-8 rounded-lg bg-[radial-gradient(circle,rgba(124,94,255,0.35),transparent_65%)] blur-2xl" />
                )}

                <div
                  className={[
                    "relative h-full flex flex-col rounded-[15px] px-5 pb-5 pt-6 backdrop-blur transition-all duration-300",
                    isActive
                      ? "bg-[rgba(15,10,30,0.82)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]"
                      : "bg-[rgba(10,6,22,0.76)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
                  ].join(" ")}
                  style={isActive ? {
                    boxShadow: "0 25px 70px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.10)",
                    borderTop: "1px solid rgba(124,94,255,0.6)",
                    borderLeft: "1px solid rgba(124,94,255,0.5)",
                    borderRight: "1px solid rgba(124,94,255,0.5)",
                    borderBottom: "none",
                    filter: "drop-shadow(0 0 15px rgba(124,94,255,0.3))",
                  } : {}}
                >
                  {/* active top shine stronger */}
                  <div
                    className={[
                      "pointer-events-none absolute inset-0 rounded-[15px] bg-gradient-to-b from-white/12 via-transparent to-transparent",
                      isActive ? "opacity-45" : "opacity-30",
                    ].join(" ")}
                  />

                  <h3
                    className={[
                      "whitespace-pre-line text-[18px] font-[400] leading-[1.22]",
                      isActive ? "text-[#C55CFF]" : "text-[#C55CFF]",
                    ].join(" ")}
                  >
                    {c.title}
                  </h3>

                  <p className="mt-3 whitespace-pre-line text-[16px] leading-[1.55] text-[#958BAA]">
                    {c.sub}
                  </p>

                  <div className="mt-4 h-px w-full bg-white/10" />

                  <div className="mt-4 space-y-6">
                    {c.bullets.map((b, i) => (
                      <div key={i} className="flex gap-3">
                        <Check />
                        <p className="whitespace-pre-line text-[14px] leading-[1.6] text-[#958BAA]">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA: inactive is dark, active is purple gradient (exact behavior you asked) */}
                  <div className="mt-auto pt-6">
                  <button
                    type="hero-section"
                    onClick={() => {
                      document
                        .getElementById("hero-section")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="cursor-pointer relative w-full text-center text-[16px] py-3 px-6 font-medium leading-[1.3] text-white"
                    style={{
                      borderRadius: "15px",
                      border: "1px solid #BE9EFF",
                      background:
                        "radial-gradient(65.86% 65.86% at 50% 50%, #2E155A 54.68%, #543593 100%)",
                    }}
                  >
                    <span className="relative block whitespace-pre-line">
                      {c.cta}
                    </span>
</button>

                  </div>

                  {/* bottom fade */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-[15px] bg-gradient-to-t from-[#070311] to-transparent opacity-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
