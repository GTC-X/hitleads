"use client";

export default function RecentInsightsSection() {
  const articles = [
    {
      title: "文案文案文案文案",
      category: "文案文案",
      description:
        "制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排",
    },
    {
      title: "文案文案文案文案",
      category: "文案文案",
      description:
        "制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排",
    },
    {
      title: "文案文案文案文案",
      category: "文案文案",
      description:
        "制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排制造商可能有融资安排",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F8F8F8] px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-3 bg-[#FF8A14]"></div>
            <p className="text-sm md:text-base text-[#FF8A14]">
              先进制造技术提升塞巴利工厂的竞争力
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
            近期见解
          </h2>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white border-gray-200 overflow-hidden"
              style={{ boxShadow: "0px 4px 30px 0px #0000001A" }}
            >
              {/* Article Image */}
              <div className="relative h-52 md:h-66 bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-600 overflow-hidden">
                {/* Gold Coins Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/new/gold-icon.svg" alt="" />
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Category Icon */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <img src="/new/msg-icon.svg" alt="" />
                  </div>
                  <span className="text-sm text-[#6A6A6A]">
                    {article.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <img src="/new/msg-icon.svg" alt="" />
                  </div>
                  <span className="text-sm text-[#6A6A6A]">
                    {article.category}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3">
                  {article.title}
                </h3>

                {/* Article Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
