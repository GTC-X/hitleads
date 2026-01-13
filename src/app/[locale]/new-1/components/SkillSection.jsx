"use client";

import Image from "next/image";

export default function SkillSection() {
  const cards = [
    {
      title: "Expert-Led Training",
      desc: "Access structured sessions led by experienced professionals, focused on execution logic, risk awareness, and disciplined decision-making.",
      icon: "/partner-with-us/why-icon1.svg",
    },
    {
      title: "Analysis Workshops",
      desc: "Break down real scenarios to understand how opportunities are identified, evaluated, and filtered using practical frameworks.",
      icon: "/partner-with-us/why-icon2.svg",
    },
    {
      title: "Live Sessions & Application",
      desc: "See how strategies are applied in real time, with clear reasoning behind each action and outcome.",
      icon: "/partner-with-us/why-icon3.svg",
    },
  ];

  return (
    <section className="relative w-full bg-white md:py-20 py-10">
      {/* Map background (replace this image with your real map asset) */}

      <div className="relative mx-auto container">
        {/* Heading */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative ">
            <img
              src="/partner-with-us/map-bg.svg"
              alt="Map background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-5 text-center">
        <h2 className="mt-4 md:text-[42px] text-[24px] leading-[1.1] font-[700] text-[#b68756]">
          <span className="text-[#B48755]">
            {" "}
            Structured Access to Skills, Analysis, and Real Execution
          </span>
          .
        </h2>
        <p className="text-base md:text-lg">
          Built for proactive individuals who look for structured programs, real
          execution, and practical learning not surface-level information.
        </p>
        </div>

        {/* Cards grid */}
        <div className="mt-20 grid md:gap-x-10 md:gap-y-24 gap-y-10 gap-x-5 md:grid-cols-3 grid-cols-2">
          {cards.map((c) => (
            <div
              className="relative mx-auto w-full max-w-[360px] rounded-[20px] bg-[#F6F6F6]"
              style={{
                boxShadow: "0px 4px 30px 0px #00000033",
              }}
              key={c.title}
            >
              <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="grid h-[70px] w-[70px] place-items-center rounded-full">
                  <img
                    src={c.icon}
                    alt="icon"
                    width={44}
                    height={44}
                    className="h-[60px] w-[60px] object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="card-notch text-center relative rounded-[14px] h-full bg-white px-8 pb-7 pt-12">
                <h3 className="font-[600] text-lg mt-4 md:text-[19px] leading-[1.25]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.4]">
                  {c.desc}
                </p>
              </div>

              <style jsx>{`
                .card-notch {
                  /* creates a circular "bite" at the top center */
                  -webkit-mask: radial-gradient(
                    circle 46px at 50% 0,
                    transparent 98%,
                    #000 100%
                  );
                  mask: radial-gradient(
                    circle 46px at 50% 0,
                    transparent 98%,
                    #000 100%
                  );
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
