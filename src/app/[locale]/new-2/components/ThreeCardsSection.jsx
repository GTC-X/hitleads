"use client";

export default function ThreeCardsSection() {
  const cardContent = {
    text: "汇率,即两种货币之间的兑换比率,对于全球货币流动至关重要。",
  };

  return (
    <section className="bg-gradient-to-b from-[#926B42] to-[#BD976A] py-12 md:py-20 px-4 md:px-6 lg:px-8 relative">
      {/* Chevron Separator */}
      <div className="absolute top-0 flex justify-center items-center left-1/2 transform rounded-full h-12 w-12  bg-white -translate-x-1/2 -translate-y-1/2">
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

      <div className="container mx-auto pt-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-normal leading-[42px] text-white mb-12 md:mb-16 text-center">
          不仅改变您的外貌,更改变您感受的疗法 <br />{" "}
          不仅改变您的外貌,更改变您感受
        </h2>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Image with text overlay */}
              <div className="relative h-64 md:h-64 overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/new/page2-bg.svg')`,
                  }}
                ></div>
                
                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6  to-transparent">
                  <p className="text-gray-900 text-base leading-relaxed">
                    {cardContent.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
