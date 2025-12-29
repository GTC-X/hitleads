"use client";

export default function AboutSection() {
  const cards = [
    {
      id: 1,
      image: "/new/page2-img.svg",
    },
    {
      id: 2,
      image: "/new/page2-img2.svg",
    },
    {
      id: 3,
      image: "/new/page2-img1.svg",
    },
  ];

  return (
    <section className=" py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            关于......的
          </h2>
          <p className="text-lg md:text-2xl text-[#BF966B]">
            重塑您的美丽重塑您的
          </p>
          <p className="text-lg md:text-lg text-gray-700">
            不仅改变您的外貌,更改变您感受的疗法
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className=" transition-shadow duration-200"
            >
              {/* Card Image */}
              <div className=" relative w-full overflow-hidden">
                <img className="h-[400px] w-full" src={card?.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
