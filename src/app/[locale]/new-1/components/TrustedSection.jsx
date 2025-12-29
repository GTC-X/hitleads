"use client";

export default function TrustedSection() {
  const testimonials = [
    {
      name: "詹姆斯·安德森",
      subName: "鱼过斯·安德森",
      quote: "汇率，即两种货币之间的兑换比率，对于全球货币流动至关重要。但你对这方面的情况究竟了解多少呢汇率，即两种货币之间的兑换比率，对于全球货币流动至关重要。但你对这方面的情况究竟了解多少呢……",
    },
    {
      name: "詹姆斯·安德森",
      subName: "鱼过斯·安德森",
      quote: "汇率，即两种货币之间的兑换比率，对于全球货币流动至关重要。但你对这方面的情况究竟了解多少呢汇率，即两种货币之间的兑换比率，对于全球货币流动至关重要。但你对这方面的情况究竟了解多少呢……",
    },
    {
      name: "詹姆斯·安德森",
      subName: "鱼过斯·安德森",
      quote: "汇率，即两种货币之间的兑换比率，对于全球货币流动至关重要。但你对这方面的情况究竟了解多少呢汇率，即两种货币之间的兑换比率，对于全球货币流动至关重要。但你对这方面的情况究竟了解多少呢……",
     },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/new/section-3-bg.svg')`,
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-3 bg-[#FF8A14]"></div>
            <p className="text-sm md:text-base text-[#FF8A14]">
              先进制造技术提升塞巴利工厂的竞争力
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            我们在全球50个国家都备受信赖
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#181E2A] rounded-[20px] p-6 md:p-8 hover:shadow-xl transition-shadow relative"
            >
              {/* Profile Picture */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 md:w-20 md:h-20  rounded-full flex-shrink-0 border-2">
                  <img src="/new/person.svg" alt="" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-base md:text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#FF8A14] text-sm">{testimonial.subName}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#C7C7C7] text-sm md:text-base leading-[26px] min-h-[200px] mb-8 line-clamp-6">
                {testimonial.quote}
              </p>

              {/* Quotation Mark Icon */}
              <div className="absolute bottom-6 right-6">
                <svg
                  className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 text-[#232934]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

