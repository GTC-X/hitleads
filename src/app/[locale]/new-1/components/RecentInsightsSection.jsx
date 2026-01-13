"use client";
import { FaWhatsapp } from "react-icons/fa";
export default function RecentInsightsSection() {
  const articles = [
    {
      title:
        "Built for Consistent Execution",
      time: "2026.01.01",
      category: "Market trend",
      img: "/ht/image31.webp",
      description:"This opportunity rewards discipline and routine. The more consistent you are, the more value you gain from the learning and execution process."
     },
    {
      title:
        "Accessible From Anywhere",
      category: "Market trend",
      img: "/ht/image32.webp",
      time: "2026.01.01",
      description:"No physical location required. As long as you have internet access and time to focus, you can participate fully from any city or region."
    },
    {
      title:
        "Clear Structure, Repeatable Process",
      category: "Market trend",
      img: "/ht/image33.webp",
      time: "2026.01.01",
      description:"Follow a defined framework that allows you to apply the same process daily without relying on guesswork or external dependency."
     },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#F8F8F8] md:bg-[#F8F8F8] px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto flex flex-col gap-5 text-center">
            <h2 className="mt-4 md:text-[35px] text-[24px] leading-[1.51] font-[700] text-[#b68756]">
              A Practical Opportunity for Focused & Consistent Individuals
            </h2>

            <p className="text-base md:text-lg">
              If you have time, focus, and the willingness to follow a
              structured process, this program is designed to help you use those
              strengths effectively regardless of where you’re based.
            </p>
          </div>
        </div>

        {/* Article Cards - Mobile: Vertical Stack with Horizontal Layout, Desktop: Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg md:rounded-none overflow-hidden flex md:flex-col"
              style={{ boxShadow: "0px 4px 30px 0px #0000001A" }}
            >
              {/* Mobile: Image Left */}
              <div className="relative w-1/3 md:w-full h-38 md:h-52 flex-shrink-0 overflow-hidden rounded-l-lg md:rounded-none">
                <img
                  src={article.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile: Text Right, Desktop: Full Width */}
              <div className="flex-1 p-4 md:p-6">
                {/* Date and Category */}
                {/* <div className="flex flex-col gap-2 mb-3 md:mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3 md:w-4 md:h-3 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/new/time.svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-xs md:text-sm text-[#6A6A6A] font-normal">
                      {article.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:mb-4">
                    <div className="w-4 h-3 md:w-4 md:h-3 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/new/msg-icon.svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-xs md:text-sm text-[#6A6A6A] font-normal">
                      {article.category}
                    </span>
                  </div>
                </div> */}

                {/* Article Title - Mobile shows same text, Desktop shows article.title */}
                <h3 className="text-sm md:text-lg font-[400] text-[#000] leading-tight mb-0 md:mb-3">
                  <span className="md:hidden">
                    The eurozone economy is slowing down, putting pressure on
                    the euro.
                  </span>
                  <span className="hidden md:inline">{article.title}</span>
                </h3>

                {/* Article Description - Desktop Only */}
                <p className="hidden md:block text-sm md:text-base text-[#5E5D5D] font-normal leading-normal">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
            {/* ✅ WhatsApp Button */}
                    <div className="mt-10 flex md:justify-center justify-center">
                      <a
                        href="https://wa.me/971000000000" // 🔁 replace with your WhatsApp number
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
