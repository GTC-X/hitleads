"use client";

export default function TrustedSection() {
  const testimonials = [
    {
      name: "James Anderson",
      subName: "Success Story",
      quote: "After taking this course, my Forex trading skills greatly improved, and I am now making consistent profits.",
    },
    {
      name: "Arthur",
      subName: "Success Story",
      quote: "The practical teaching system of this foreign exchange trading course effectively made up for my shortcomings in trading strategies and capital management, helping me achieve a crucial breakthrough from losses to continuous profits.",
    },
    {
      name: "Ethan",
      subName: "Success Story",
      quote: "This forex trading course not only taught me the skills, but also provided me with a complete trading logic. With this logic, I am now able to achieve stable profits.",
     },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/new/new-bg-section3.svg')`,
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1.5 bg-[#FF8A14] rounded-full"></div>
            <p className="text-base md:text-[20px] text-[#FF8A14]">
            Our experts in this field
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[400] text-white">
          The Success Story of a Forex Trader
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
              <p className="text-[#C7C7C7] font-[300] text-sm md:text-base leading-[26px] min-h-[200px] mb-8 line-clamp-6">
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
        <div className=" mt-12 flex justify-center">
          <button
            type="button"
            className="mt-2 px-4 py-4   w-full rounded-full md:bg-[#BF966B] bg-[#3A72F5] max-w-xl text-[20px] font-[400] leading-[1.15] text-white hover:brightness-95"
          >
            Join our Forex trading training and start your
            profitable journey
          </button>
        </div>
      </div>
    </section>
  );
}

