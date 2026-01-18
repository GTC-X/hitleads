"use client";

export default function ForexRealtimeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070311] py-10 md:py-14">
      {/* Background glows */}

      {/* Subtle grain (pure CSS) */}

      <div className="= mx-auto container">
        {/* Background Image */}


        {/* Inner panel like screenshot */}
        <div className="mx-auto relative w-full rounded-[24px] bg-[rgba(10,6,22,0.55)] px-6 py-10 ">
          {/* top-left soft highlight */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 rounded-[24px] bg-no-repeat"
            style={{
              backgroundImage: `url('/new/bg-last-2.svg')`,
            }}
          ></div>
          {/* <div className="pointer-events-none absolute -left-24 -top-15 h-[260px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_65%)] blur-2xl" /> */}

          <div className=" max-w-6xl mx-auto text-center md:py-10">
            <h2 className="md:text-[42px] text-[28px] font-normal leading-[1.2] text-white">
              Foreign exchange trading operates 24 hours a day in real time,
              allowing you to seize the latest trends in
               <span className="text-[#7C5EFF]"
                style={{
                  background: "linear-gradient(180deg, #C55CFF 0%, #381158 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              > the global market at any
              time.</span> 
            </h2>

            <p className="mx-auto mt-8 max-w-[760px] text-[16px] leading-[1.2] text-white">
              Free foreign exchange market analysis report, helping you predict
              market trends
            </p>

            <button
              type="button"
              className="relative mt-12  max-w-2xl text-center text-[16px] py-3 px-6 font-medium leading-[1.3] text-white"
              style={{
                borderRadius: "15px",
                border: "1px solid #BE9EFF",
                background:
                  "radial-gradient(65.86% 65.86% at 50% 50%, #2E155A 54.68%, #543593 100%)",
              }}
            >
              <span className="relative block">
                By learning foreign exchange trading strategies, you will be
                able to identify market trends and make efficient trading
                decisions.
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
