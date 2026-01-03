"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "James Anderson",
      quote:
        "After taking this course, my Forex trading skills greatly improved, and I am now making consistent profits.",
      image: "james",
    },
    {
      name: "Arthur",
      quote:
        "The practical teaching system of this foreign exchange trading course effectively made up for my shortcomings in trading strategies and capital management, helping me achieve a crucial breakthrough from losses to continuous profits.",
      image: "arthur",
    },
    {
      name: "Ethan",
      quote:
        "This forex trading course not only taught me the skills, but also provided me with a complete trading logic. With this logic, I am now able to achieve stable profits.",
      image: "ethan",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Dark Background with Keyboard and Coins */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Keyboard and coins effect */}
        <div className="absolute inset-0 opacity-30">
          {/* Simulated keyboard keys */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              {[...Array(50)].map((_, i) => (
                <rect
                  key={i}
                  x={20 + (i % 10) * 110}
                  y={10 + Math.floor(i / 10) * 30}
                  width="90"
                  height="20"
                  fill="#4b5563"
                  opacity="0.6"
                  rx="2"
                />
              ))}
            </svg>
          </div>
          {/* Gold coins */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-yellow-400 rounded-full opacity-40"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 12}%`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-0.5 bg-yellow-500"></div>
            <p className="text-sm md:text-base text-yellow-500 font-medium">
              Our experts in this field
            </p>
            <div className="w-12 h-0.5 bg-yellow-500"></div>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          Latest trends and trading strategies in the foreign exchange market
        </h2>

        {/* Three Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative"
            >
              {/* Profile Picture */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">Success Story</p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                {/* Large quotation marks */}
                <div className="absolute -top-4 -left-2 text-6xl md:text-7xl text-gray-300 font-serif leading-none">
                  "
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed relative z-10 pl-8">
                  {testimonial.quote}
                </p>
                <div className="absolute -bottom-4 -right-2 text-6xl md:text-7xl text-gray-300 font-serif leading-none">
                  "
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Section CTA Button */}
        <div className="text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 md:px-12 py-4 md:py-5 rounded-lg transition-colors duration-200 text-lg md:text-xl">
            Join our Forex trading training and start your profitable journey
          </button>
        </div>
      </div>
    </section>
  );
}

