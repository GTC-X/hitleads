"use client";

import Image from "next/image";

export default function SkillSection() {
  const cards = [
    {
      title: "Guidance, Not Guessing",
      desc: "Learn with experienced support and clear structure.",
      icon: "/partner-with-us/why-icon1.svg",
    },
    {
      title: "Clarity, Not Complexity",
      desc: "Understand real scenarios in simple terms.",
      icon: "/partner-with-us/why-icon2.svg",
    },
    {
      title: "Practice, Not Pressure",
      desc: "Apply only when you feel confident and prepared.",
      icon: "/partner-with-us/why-icon3.svg",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-[#293B93] to-[#0D122D] md:py-12 py-10">
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
        <h2 className="mt-4 md:text-[30px] lg:text-[35px] text-[22px] leading-[1.1] font-[700] text-[#b68756]">
          <span className="text-[#B48755]">
            {" "}
           What You Actually Get
          </span>
          .
        </h2>
        <p className="text-base md:text-lg text-white">
    This is not a get-rich-quick program. It is designed for steady learning and gradual progress.
        </p>
        </div>

        {/* Cards grid */}
        <div className="mt-20 grid md:gap-x-10 md:gap-y-24 gap-y-10 gap-x-5 md:grid-cols-3 grid-cols-1">
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
          {/* ✅ WhatsApp Button */}
                            <div className="mt-10 flex md:justify-center justify-center">
                              <a
                                href="https://wa.me/18255698500" // 🔁 replace with your WhatsApp number
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  inline-flex items-center gap-3
                                  bg-[#25D366]
                                  hover:bg-[#1EBE5D]
                                  text-white
                                  font-semibold
                                  px-6 py-3
                                  rounded-full
                                  transition-all duration-300
                                  shadow-lg
                                "
                              >
                                <FaWhatsapp className="text-2xl" />
                                <span className="text-sm md:text-base">
                                  Chat with us on WhatsApp
                                </span>
                              </a>
                            </div>
      </div>
    </section>
  );
}
