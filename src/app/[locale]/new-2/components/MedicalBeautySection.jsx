"use client";
import { useState } from "react";

export default function MedicalBeautySection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const cards = [
    {
      id: 1,
      image: "financial-chart",
      text: "文案1文案1文案1",
    },
    {
      id: 2,
      image: "gold-coins",
      text: "文案1文案1文案1",
    },
    {
      id: 3,
      image: "bar-chart",
      text: "文案1文案1文案1",
    },
    {
      id: 4,
      image: "hourglass-coins",
      text: "文案1文案1文案1",
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
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            医学美容 解决方案
          </h2>
          <p className="text-lg md:text-xl text-gray-700">重塑您的美丽</p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-4 mb-4">
          <button
            onClick={() => scrollCards("left")}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollCards("right")}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
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
              <div className="h-48 md:h-56 relative overflow-hidden">
                {card.image === "financial-chart" && (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Financial chart with candlesticks */}
                    <div className="w-full h-full p-4 flex items-end justify-center gap-1">
                      {[20, 35, 25, 45, 30, 50, 40].map((height, i) => (
                        <div
                          key={i}
                          className={`w-6 rounded-t ${
                            i % 2 === 0 ? "bg-green-500" : "bg-red-500"
                          }`}
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                {card.image === "gold-coins" && (
                  <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-amber-700 flex items-center justify-center relative">
                    {/* Gold coins and abacus */}
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-lg"></div>
                        <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-lg"></div>
                        <div className="w-12 h-12 bg-yellow-400 rounded-full shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                )}

                {card.image === "bar-chart" && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center">
                    {/* Bar chart */}
                    <div className="w-full h-full p-4 flex items-end justify-center gap-3">
                      {[40, 60, 45, 75, 50, 85, 65].map((height, i) => (
                        <div
                          key={i}
                          className="w-8 bg-blue-500 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                {card.image === "hourglass-coins" && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center relative">
                    {/* Hourglass with coins */}
                    <div className="relative">
                      {/* Hourglass */}
                      <div className="w-24 h-32 border-4 border-yellow-400 rounded-lg"></div>
                      {/* Coins */}
                      <div className="absolute -bottom-2 -right-4 flex flex-col gap-1">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="absolute -top-2 -left-4 flex flex-col gap-1">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Text */}
              <div className="p-4">
                <p className="text-sm text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

