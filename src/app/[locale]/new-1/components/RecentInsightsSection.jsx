"use client";

export default function RecentInsightsSection() {
  const articles = [
    {
      title:
        "The eurozone economy is slowing down, putting pressure on the euro.",
      time: "2026.01.01",
      category: "Market trend",
      img: "/new/new-img1.svg",
      description:
        "Recently, the economic data of the Eurozone has slowed down, especially the decline in industrial output and consumer confidence index.",
    },
    {
      title:
        "The US dollar index (DXY) continued to strengthen, breaking above the 105 mark.",
      category: "Market trend",
      img: "/new/new-img2.svg",
      time: "2026.01.01",
      description:
        "With the strong performance of the US economy, the US Dollar Index (DXY) has continued to strengthen and has surpassed the 105 mark. ",
    },
    {
      title:
        "The yen continues to weaken, and the Bank of Japan maintains its loose monetary policy.",
      category: "Market trend",
      img: "/new/new-img3.svg",
      time: "2026.01.01",
      description:
        "The Japanese yen has been weakening continuously over the past few months, especially against the backdrop of the accelerated US interest rate hike cycle. ",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F8F8F8] md:bg-[#F8F8F8] px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1.5 bg-[#FF8A14] rounded-full"></div>
            <p className="text-sm text-[#FF8A14]">
              Our experts in this field
            </p>
          </div>
          <h2 className="md:hidden text-2xl font-bold text-gray-900 leading-tight mb-0">
            Latest trends and trading
            <br />
            strategies in the foreign
            <br />
            exchange market
          </h2>
          
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-1.5 bg-[#FF8A14] rounded-full"></div>
            <p className="text-sm md:text-base text-[#FF8A14]">
              Our experts in this field
            </p>
          </div>
          <h2 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
            Foreign exchange market trends
          </h2>
        </div>

        {/* Article Cards - Mobile: Vertical Stack with Horizontal Layout, Desktop: Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg md:rounded-none overflow-hidden flex md:flex-col"
              style={{ boxShadow: "0px 4px 30px 0px #0000001A" }}
            >
              {/* Mobile: Image Left */}
              <div className="relative w-1/3 md:w-full h-38 md:h-52 flex-shrink-0 overflow-hidden rounded-l-lg md:rounded-none">
                <img
                  src={article.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile: Text Right, Desktop: Full Width */}
              <div className="flex-1 p-4 md:p-6">
                {/* Date and Category */}
                <div className="flex flex-col gap-2 mb-3 md:mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3 md:w-4 md:h-3 flex items-center justify-center flex-shrink-0">
                      <img src="/new/time.svg" alt="" className="w-full h-full" />
                    </div>
                    <span className="text-xs md:text-sm text-[#6A6A6A] font-normal">
                      {article.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:mb-4">
                    <div className="w-4 h-3 md:w-4 md:h-3 flex items-center justify-center flex-shrink-0">
                      <img src="/new/msg-icon.svg" alt="" className="w-full h-full" />
                    </div>
                    <span className="text-xs md:text-sm text-[#6A6A6A] font-normal">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Title - Mobile shows same text, Desktop shows article.title */}
                <h3 className="text-sm md:text-lg font-[400] text-[#000] leading-tight mb-0 md:mb-3">
                  <span className="md:hidden">The eurozone economy is slowing down, putting pressure on the euro.</span>
                  <span className="hidden md:inline">{article.title}</span>
                </h3>

                {/* Article Description - Desktop Only */}
                <p className="hidden md:block text-sm md:text-base text-[#5E5D5D] font-normal leading-normal">
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
