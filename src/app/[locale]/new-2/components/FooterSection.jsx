"use client";

export default function FooterSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Title and Text */}
          <div className="space-y-6">
            {/* Title with Shield Icon */}
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-orange-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                影响汇率是有那些因素?
              </h2>
            </div>

            {/* Text */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              汇率,即两种货币之间的兑换比率,对于全球货币流动至关重要。汇率,即两种货币之间的兑换比率,对于全球货币流动至关重要。
            </p>
          </div>

          {/* Right Column - Buttons */}
          <div className="flex flex-col gap-4">
            {/* Button 1 */}
            <button className="w-full lg:w-auto px-6 md:px-8 py-3 md:py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors duration-200 text-left lg:text-center">
              让财富成为必需
            </button>

            {/* Button 2 */}
            <button className="w-full lg:w-auto px-6 md:px-8 py-3 md:py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors duration-200 text-left lg:text-center">
              制定合适的投资策略,让财富在您最需要的地方
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

