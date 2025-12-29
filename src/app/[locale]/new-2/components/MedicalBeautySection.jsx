"use client";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function MedicalBeautySection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const cards = [
    {
      id: 1,
      image: "financial-chart",
      text: "文案1文案1文案1",
      icon: "/new/icon1bg.svg",
    },
    {
      id: 2,
      image: "gold-coins",
      text: "文案1文案1文案1",
      icon: "/new/icon2bg.svg",
    },
    {
      id: 3,
      image: "bar-chart",
      text: "文案1文案1文案1",
      icon: "/new/icon3bg.svg",
    },
    {
      id: 4,
      image: "hourglass-coins",
      text: "文案1文案1文案1",
      icon: "/new/icon4bg.svg",
    },
  ];

  const scrollCards = (direction) => {
    const container = document.getElementById("cards-container");
    if (container) {
      const scrollAmount = 320; // card width + gap
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className=" py-12 md:pt-16  px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Title and Subtitle */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl  font-medium text-gray-800 mb-3">
            医学美容 解决方案
          </h2>
          <p className="text-lg md:text-2xl text-[#BF966B]">重塑您的美丽</p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-4 mb-4">
          <button
            onClick={() => scrollCards("left")}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors border border-[#BF966B] "
            aria-label="Scroll left"
          >
            <FaArrowLeft className=" text-[#BF966B]" />
          </button>
          <button
            onClick={() => scrollCards("right")}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors border border-[#BF966B]"
            aria-label="Scroll right"
          >
            <FaArrowRight className=" text-[#BF966B]" />
          </button>
        </div>

        {/* Scrollable Cards Container */}
        <div
          id="cards-container"
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-72 md:w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 snap-start"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img src={card?.icon} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className=" mt-10 text-[#C0C0C0]"/>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
