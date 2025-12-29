"use client";

export default function ExchangeRateSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              影响汇率是有那些因素?
            </h2>

            {/* Main Text */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              发现美丽的力量,提升你的实践 发现美丽的力量,提升你的实践
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  财富之路,我们为您铺就稳健基石 血,为您的事业上,制定合适的
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  财富之路,我们为您铺就稳健基石
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Hourglass Image Card */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              {/* Hourglass Image */}
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center">
                {/* Hourglass */}
                <div className="relative">
                  <div className="w-32 h-40 border-4 border-yellow-400 rounded-lg bg-transparent"></div>
                  {/* Sand effect */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-400 opacity-60 rounded-t-lg"></div>
                  
                  {/* Coins around hourglass */}
                  <div className="absolute -bottom-4 -right-8 flex flex-col gap-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
                  </div>
                  <div className="absolute -top-4 -left-8 flex flex-col gap-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
                  </div>
                  {/* Paper currency */}
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                    <div className="w-12 h-8 bg-green-600 rounded shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

