"use client";

export default function ThreeCardsSection() {
  const cardContent = {
    text: "汇率,即两种货币之间的兑换比率,对于全球货币流动至关重要。",
  };

  return (
    <section className="bg-gradient-to-b from-[#926B42] to-[#BD976A] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 relative">
      {/* Chevron Separator */}
      <div className="absolute top-0 left-1/2 transform rounded-full h-16 w-16  bg-white -translate-x-1/2 -translate-y-1/2">
        <svg
          className="w-8 h-8 text-gray-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto pt-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-normal leading-[42px] text-white mb-12 md:mb-16 text-center">
          不仅改变您的外貌,更改变您感受的疗法 <br/> 不仅改变您的外貌,更改变您感受
        </h2>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Image - Hands cupping golden sphere */}
              <div className="relative h-64 md:h-72 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                {/* Golden Sphere Placeholder */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full"></div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-32 h-32 bg-yellow-400 rounded-full opacity-30 blur-xl"></div>
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <p className="text-base text-gray-700 leading-relaxed">
                  {cardContent.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

