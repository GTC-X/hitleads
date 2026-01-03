"use client";

export default function CallToActionSection() {
  return (
    <section className="bg-white pb-12 md:pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Call to Action Box */}
        <div className="bg-[#0393C8] rounded-lg p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            立即拨打 1234 567 869
          </h2>
          <p className="text-lg md:text-xl text-white opacity-90">
            与谷歌应用服务经销商代表交流
          </p>
        </div>
      </div>
    </section>
  );
}

