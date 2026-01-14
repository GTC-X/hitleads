import React from "react";

export default function ExpertsCardsSection() {
  const cards = [
    {
      title: "No rush, no pressure, no spending",
      desc: "No rush. No forced decisions. Understand first before taking any real step.",
      img: "/ht/image1.webp",
      darkOverlay: true,
    },
    {
      title: "Not doing things blindly",
      desc: "No confusing systems or empty promises. Move Forward at Your Own Pace",
      img: "/ht/image2.webp",
      darkOverlay: false,
    },
    {
      title: "You control the pace",
      desc: "Practice first. Decide later. Support will always available for you",
      img: "/ht/image3.webp",
      darkOverlay: false,
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto py-12">
        {/* Section Heading */}
        <div className="max-w-lg mx-auto flex flex-col gap-5 text-center">
          <h2 className="mt-4 md:text-[30px] lg:text-[35px] text-[22px] leading-[1.1] font-[700] text-[#b68756]">
            Not a Shortcut. Not a Get-Rich-Quick Scheme.
          </h2>

          <p className="text-base md:text-xl">
            We focus on learning first, clarity first, and progress only when you are ready.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14">
          {/* Mobile Layout */}
          <div className="md:hidden flex gap-1.5">
            {/* Left Large Card */}
            <div className="flex-1 relative h-[270px] overflow-hidden rounded-[12px] bg-[#e9eef5] shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${cards[0].img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-4 pb-4 text-white">
                <h4 className="font-[600] text-[15px] leading-[1.3]">
                  {cards[0].title}
                </h4>
                <p className="mt-1 text-[13px] leading-[1.35]">
                  {cards[0].desc}
                </p>
              </div>
            </div>

            {/* Right Two Small Cards */}
            <div className="flex-1 flex flex-col gap-1.5">
              {[cards[1], cards[2]].map((card, i) => (
                <div
                  key={i}
                  className="relative flex-1 overflow-hidden rounded-[12px] bg-[#e9eef5] shadow-[0_10px_22px_rgba(0,0,0,0.12)]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-3 pb-3 text-white">
                    <h4 className="font-[600] text-[13px] leading-[1.3]">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-[11px] md:text-[12px] leading-[1.35]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="relative h-[450px] overflow-hidden rounded-[12px] bg-[#e9eef5] shadow-[0_10px_22px_rgba(0,0,0,0.12)] p-3"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.img})` }}
                />

                <div
                  className={`absolute inset-0 ${
                    c.darkOverlay
                      ? "bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                      : "bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                  }`}
                />

                <div className="absolute inset-x-0 bottom-0 px-6 py-6 text-white text-center p-5">
                  <h4 className="font-[600] text-lg md:text-[19px] leading-[1.25]">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-[1.4]">
                    {c.desc}
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
