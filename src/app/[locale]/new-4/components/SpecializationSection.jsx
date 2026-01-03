"use client";

export default function SpecializationSection() {
  const features = [
    {
      id: 1,
      title: "Our experts will assist you in mastering all the trading skills.",
      image: "skills-assistance",
    },
    {
      id: 2,
      title: "Market analysis and trading strategies",
      image: "market-analysis",
    },
    {
      id: 3,
      title: "Foreign exchange investment training and services",
      image: "investment-training",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-0.5 bg-yellow-500"></div>
            <p className="text-sm md:text-base text-yellow-600 font-medium">
              Our experts in this field
            </p>
            <div className="w-12 h-0.5 bg-yellow-500"></div>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          We specialize in sophisticated trading strategies in the foreign
          exchange market, helping global investors achieve stable returns.
        </h2>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Card Image */}
              <div className="h-64 md:h-72 relative overflow-hidden">
                {feature.image === "skills-assistance" && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    {/* Holographic interface placeholder */}
                    <div className="relative">
                      <div className="w-48 h-48 border-4 border-cyan-400 rounded-lg opacity-60 transform rotate-12"></div>
                      <div className="absolute inset-0 w-48 h-48 border-4 border-blue-400 rounded-lg opacity-40 transform -rotate-12"></div>
                      {/* Data points */}
                      <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="absolute top-12 right-8 w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="absolute bottom-8 left-12 w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                )}

                {feature.image === "market-analysis" && (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                    {/* Dollar sign with charts */}
                    <div className="text-8xl md:text-9xl font-bold text-gray-600 opacity-40">
                      $
                    </div>
                    {/* Bar graphs background */}
                    <div className="absolute inset-0 flex items-end justify-center gap-2 px-8 pb-8">
                      {[40, 60, 50, 70, 45, 65, 55].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-green-500 rounded-t opacity-60"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                {feature.image === "investment-training" && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-800 to-indigo-900 flex items-center justify-center relative">
                    {/* Woman silhouette placeholder */}
                    <div className="w-32 h-40 bg-blue-400/30 rounded-full flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-white/50"
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
                    {/* Floating coins */}
                    <div className="absolute top-4 right-8 w-8 h-8 bg-yellow-400 rounded-full"></div>
                    <div className="absolute bottom-8 left-12 w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-1/2 right-4 w-10 h-10 bg-yellow-400 rounded-full"></div>
                  </div>
                )}
              </div>

              {/* Card Text */}
              <div className="p-6">
                <p className="text-base md:text-lg text-gray-700 text-center">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

