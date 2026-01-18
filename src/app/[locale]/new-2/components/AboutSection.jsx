// "use client";

// const cards = [
//   {
//     title: "Basic Forex Trading Course",
//     sub: "Understand market fundamentals and master\ntrading techniques.",
//     bullets: [
//       "Suitable for forex beginners, this course covers the basics\nof the forex market and trading operations.",
//       "It includes introductory market analysis techniques to help\nyou build a fundamental understanding of the forex market.",
//       "Learn how to operate a forex trading platform and master\nsimple trading tools and techniques.",
//     ],
//     cta: "Enroll immediately in the basic foreign exchange course\nand embark on your trading journey",
//   },
//   {
//     title: "Advanced Forex Trading\nStrategies",
//     sub: "How to formulate profit-making strategies in a\ncomplex market environment",
//     bullets: [
//       "Suitable for experienced traders, this course offers in-depth\nstudy of technical analysis and market trend prediction.",
//       "Offer a series of advanced trading strategies, such as\nvolatility trading and trend trading methods.",
//       "Master the advanced functions of the foreign exchange\ntrading platform to enhance profitability.",
//     ],
//     cta: "Enroll in the advanced foreign exchange trading strategy\ncourse to enhance your trading skills.",
//   },
//   {
//     title: "Intermediate Foreign Exchange\nStrategy",
//     sub: "How to Conduct Efficient Trading Based on\nTechnical Analysis",
//     bullets: [
//       "Suitable for experienced traders, this course covers the\nlearning of quantitative trading and high-frequency\ntrading techniques.",
//       "Deeply analyze market psychology to help you make\naccurate decisions in a complex market environment.",
//       "Personalized trading plans and risk management to\nensure high returns while controlling risks.",
//     ],
//     cta: "Become an expert in foreign exchange trading. Register\nfor the advanced training course now",
//   },
// ];

// export default function ForexCoursesSection() {
//   return (
//     <section className="relative w-full overflow-hidden py-16">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('/new/page2-bg-new.svg')`,
//         }}
//       ></div>

//       {/* Overlay with gradient */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: "linear-gradient(180deg, #010101 0%, rgba(3, 0, 19, 0.1) 91.22%)",
//         }}
//       ></div>

//       <div className="relative mx-auto max-w-[1100px] px-6">
//         {/* Heading */}
//         <h2 className="mx-auto max-w-[820px] text-center text-[22px] font-medium leading-[1.4] text-white/95">
//           Mastering market analysis and trading psychology can enhance
//           <br />
//           the success rate of foreign exchange trading.
//         </h2>
//         <p className="mx-auto mt-3 max-w-[860px] text-center text-[10px] leading-[1.6] text-white/40">
//           Through simulated trading, deepen your understanding of market fluctuations and achieve precise operations,
//           <br />
//           efficient risk control strategies ensure the safety of your funds.
//         </p>

//         {/* Cards */}
//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {cards.map((c, idx) => {
//             const isCenter = idx === 1; // default highlighted
//             return (
//               <div
//                 key={idx}
//                 className={[
//                   "group relative rounded-[16px] p-[1px] transition-all duration-300",
//                   // default state
//                   isCenter
//                     ? "bg-gradient-to-b from-[#7C5EFF] to-[#5B3FE0] shadow-[0_28px_90px_rgba(124,94,255,0.25)]"
//                     : "bg-white/10",
//                   // hover -> look like center card
//                   "hover:bg-gradient-to-b hover:from-[#7C5EFF] hover:to-[#5B3FE0] hover:shadow-[0_28px_90px_rgba(124,94,255,0.25)]",
//                 ].join(" ")}
//               >
//                 <div
//                   className={[
//                     "relative h-full rounded-[15px] px-5 pb-5 pt-6",
//                     "bg-[rgba(10,6,22,0.86)]",
//                     "backdrop-blur",
//                     "transition-all duration-300",
//                     // inner border/glow only for center/hover
//                     isCenter
//                       ? "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]"
//                       : "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]",
//                     "group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]",
//                   ].join(" ")}
//                 >
//                   {/* soft top sheen like screenshot */}
//                   <div className="pointer-events-none absolute inset-0 rounded-[15px] bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-40" />

//                   <h3 className="whitespace-pre-line text-[14px] font-semibold leading-[1.25] text-white/95">
//                     {c.title}
//                   </h3>
//                   <p className="mt-3 whitespace-pre-line text-[10px] leading-[1.55] text-white/45">
//                     {c.sub}
//                   </p>

//                   <div className="mt-5 space-y-3">
//                     {c.bullets.map((b, i) => (
//                       <div key={i} className="flex gap-3">
//                         <div className="mt-[3px] h-[14px] w-[14px] flex-none rounded-full bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
//                           <svg
//                             viewBox="0 0 24 24"
//                             className="mx-auto mt-[3px] h-[8px] w-[8px] text-white/80"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="3"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path d="M20 6L9 17l-5-5" />
//                           </svg>
//                         </div>
//                         <p className="whitespace-pre-line text-[9px] leading-[1.6] text-white/40">
//                           {b}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA */}
//                   <div className="mt-6">
//                     <button
//                       type="button"
//                       className={[
//                         "relative w-full rounded-[10px] px-3 py-3 text-center text-[9px] font-medium leading-[1.15] text-white",
//                         "ring-1 ring-white/10",
//                         // default subdued on side cards
//                         isCenter
//                           ? "bg-gradient-to-b from-[#7C5EFF] to-[#5B3FE0] shadow-[0_16px_40px_rgba(124,94,255,0.25)]"
//                           : "bg-white/10 shadow-[0_14px_34px_rgba(0,0,0,0.25)]",
//                         // hover becomes center-like
//                         "transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-[#7C5EFF] group-hover:to-[#5B3FE0] group-hover:shadow-[0_16px_40px_rgba(124,94,255,0.25)]",
//                       ].join(" ")}
//                     >
//                       <span className="whitespace-pre-line">{c.cta}</span>
//                     </button>
//                   </div>

//                   {/* bottom fade like screenshot */}
//                   <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 rounded-b-[15px] bg-gradient-to-t from-[#070311] to-transparent opacity-60" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { useState } from "react";

const DATA = [
  {
    title: "Basic Forex Trading Course",
    sub: "Understand market fundamentals and master trading techniques.",
    bullets: [
      "Suitable for forex beginners, this course covers the basics of the forex market and trading operations.",
      "It includes introductory market analysis techniques to help you build a fundamental understanding of the forex market.",
      "Learn how to operate a forex trading platform and master simple trading tools and techniques.",
    ],
    cta:
      "Enroll immediately in the basic foreign exchange course and embark on your trading journey",
  },
  {
    title: "Advanced Forex Trading Strategies",
    sub: "How to formulate profit-making strategies in a complex market environment",
    bullets: [
      "Suitable for experienced traders, this course offers in-depth study of technical analysis and market trend prediction.",
      "Offer a series of advanced trading strategies, such as volatility trading and trend trading methods.",
      "Master the advanced functions of the foreign exchange trading platform to enhance profitability.",
    ],
    cta:
      "Enroll in the advanced foreign exchange trading strategy course to enhance your trading skills.",
  },
  {
    title: "Intermediate Foreign Exchange Strategy",
    sub: "How to Conduct Efficient Trading Based on Technical Analysis",
    bullets: [
      "Suitable for experienced traders, this course covers the learning of quantitative trading and high-frequency trading techniques.",
      "Deeply analyze market psychology to help you make accurate decisions in a complex market environment.",
      "Personalized trading plans and risk management to ensure high returns while controlling risks.",
    ],
    cta:
      "Become an expert in foreign exchange trading. Register for the advanced training course now",
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

      <div className="relative mx-auto container">
        <h2 className="text-center md:text-[42px] max-w-6xl mx-auto text-[28px] font-medium leading-[1.3] text-white">
          Mastering market analysis and trading psychology can enhance
          the success rate of foreign exchange trading.
        </h2>

        <p className="mx-auto mt-5 max-w-6xl  text-center text-[16px] leading-[1.6] text-[#C0BBD9]">
          Through simulated trading, deepen your understanding of market fluctuations and achieve precise operations,
          <br />
          efficient risk control strategies ensure the safety of your funds.
        </p>

        {/* Cards */}
        <div
          className="mt-16 grid gap-6 md:grid-cols-3 md:items-stretch"
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
                      "whitespace-pre-line text-[22px] font-[400] leading-[1.22]",
                      isActive ? "text-white/95" : "text-white/90",
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
                      type="button"
                      className="relative w-full text-center text-[16px] py-3 px-6 font-medium leading-[1.3] text-white"
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
