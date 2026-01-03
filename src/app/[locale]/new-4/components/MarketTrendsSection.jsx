"use client";

export default function MarketTrendsSection() {
  const trends = [
    {
      date: "2026.01.01",
      category: "Market trend",
      headline:
        "The eurozone economy is slowing down, putting pressure on the euro.",
      description:
        "Recently, the economic data of the Eurozone has slowed down, especially the decline in industrial output and consumer confidence index.",
      image: "eurozone",
    },
    {
      date: "2026.01.01",
      category: "Market trend",
      headline:
        "The US dollar index (DXY) continued to strengthen, breaking above the 105 mark.",
      description:
        "With the strong performance of the US economy, the US Dollar Index (DXY) has continued to strengthen and has surpassed the 105 mark.",
      image: "usd-index",
    },
    {
      date: "2026.01.01",
      category: "Market trend",
      headline:
        "The yen continues to weaken, and the Bank of Japan maintains its loose monetary policy.",
      description:
        "The Japanese yen has been weakening continuously over the past few months, especially against the backdrop of the accelerated US interest rate hike cycle.",
      image: "yen",
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          Foreign exchange market trends
        </h2>

        {/* Three Trend Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Card Image */}
              <div className="h-48 md:h-56 relative overflow-hidden">
                {trend.image === "eurozone" && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center">
                    {/* Blue line graph */}
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <polyline
                        points="0,250 50,230 100,200 150,180 200,160 250,140 300,120 350,100 400,80"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="4"
                      />
                      <polyline
                        points="0,240 50,220 100,190 150,170 200,150 250,130 300,110 350,90 400,70"
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="3"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                )}

                {trend.image === "usd-index" && (
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-blue-900 flex items-end justify-center">
                    {/* Bar chart */}
                    <div className="w-full h-full p-4 flex items-end justify-center gap-2">
                      {[40, 50, 45, 60, 55, 70, 65, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-blue-500 rounded-t opacity-80"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    {/* Glowing lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line
                        x1="0"
                        y1="150"
                        x2="400"
                        y2="50"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                )}

                {trend.image === "yen" && (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                    {/* Purple/pink line graph */}
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <polyline
                        points="0,200 50,180 100,160 150,170 200,150 250,130 300,140 350,120 400,100"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="4"
                      />
                      <polyline
                        points="0,190 50,170 100,150 150,160 200,140 250,120 300,130 350,110 400,90"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="3"
                        opacity="0.7"
                      />
                      {/* Data points */}
                      <circle cx="100" cy="160" r="5" fill="#a855f7" />
                      <circle cx="200" cy="150" r="5" fill="#ec4899" />
                      <circle cx="300" cy="140" r="5" fill="#a855f7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Date and Category */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-gray-500">{trend.date}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm font-medium text-yellow-600">
                    {trend.category}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                  {trend.headline}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {trend.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

