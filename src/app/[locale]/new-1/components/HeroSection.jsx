import React from "react";
import NewPageForm from "./FormNewPage";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroWithRightForm() {
  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-[url('/new/banner.webp')] bg-cover bg-center lg:h-[800px]"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-[#141b43b0]/50" />

      <div className="relative z-10 mx-auto container md:py-24 py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          {/* Left content */}
          <div className="text-white lg:text-left text-center">
            <h1 className="md:text-4xl lg:text-[42px] xl:text-7xl text-[28px] leading-[32px] font-[900] md:leading-[1.2]">
         Have Time but Not Enough Income?
            </h1>

            <p className="mt-6 md:text-[30px] text-[16px] md:leading-[40px] leading-[30px] text-white/85 max-w-4xl md:pr-10 capitalize">
             A structured way to learn and build <br></br>extra income step by step.
            </p>

            {/* ✅ WhatsApp Button */}
            <div className="mt-10 flex lg:justify-start justify-center">
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

          {/* Right form card */}
          <div className="md:rounded-[10px] rounded-3xl px-8 py-8 shadow-[0_22px_55px_rgba(0,0,0,0.35)] bg-gradient-to-r from-[#fff] via-[#f2f2f2] to-[#f7f7f7]">
            <NewPageForm
              zapierUrl="https://hooks.zapier.com/hooks/catch/16420445/uzc4qag/"
              successPath="/success"
              isPreAccount={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
