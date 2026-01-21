"use client";

export default function ForexRealtimeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070311] py-10 md:py-14">
      {/* Background glows */}

      {/* Subtle grain (pure CSS) */}

      <div className="mx-auto max-w-6xl">
        {/* Background Image */}


        {/* Inner panel like screenshot */}
        <div className="mx-auto relative w-full rounded-[24px] bg-gradient-to-r from-[#2C2838] to-[#030013] px-6 py-5 ">
          {/* top-left soft highlight */}
       
          {/* <div className="pointer-events-none absolute -left-24 -top-15 h-[260px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_65%)] blur-2xl" /> */}

          <div className=" max-w-5xl mx-auto text-center md:py-10">
            <h2 className="text-[22px] md:text-[30px] xl:text-[35px] font-semibold leading-[1.35] text-white text-center">
              Forex market operates 24 hours a day, giving you the flexibility to act on market movements and global trends whenever they happen.
            </h2>

            <p className="mx-auto mt-8 max-w-[760px] text-[16px] leading-[1.6] text-white">
              Get access to free foreign exchange market insights and analysis reports designed to help you forecast market trends accurately.
            </p>

           <button
            type="button"
            onClick={() => {
              document
                .getElementById("hero-section")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer relative mt-12 max-w-2xl text-center text-[16px] py-3 px-6 font-medium leading-[1.3] text-white"
            style={{
              borderRadius: "15px",
              border: "1px solid #BE9EFF",
              background:
                "radial-gradient(65.86% 65.86% at 50% 50%, #2E155A 54.68%, #543593 100%)",
            }}
          >
            <span className="relative block">
              Start learning foreign exchange trading strategies today to recognize opportunities, make informed decisions, and trade with confidence.
            </span>
          </button>

          </div>
        </div>
      </div>
    </section>
  );
}
