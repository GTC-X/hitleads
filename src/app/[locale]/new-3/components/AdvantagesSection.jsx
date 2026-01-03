"use client";

export default function AdvantagesSection() {
  const advantages = [
    {
      id: 1,
      bgColor: "bg-[#E3280B]",
      title: "3D 在亚太地区",
      description: "专业的3D服务覆盖亚太地区",
    },
    {
      id: 2,
      bgColor: "bg-[#E6AD08]",
      title: "5年以上",
      description: "丰富的行业经验和专业知识",
    },
    {
      id: 3,
      bgColor: "bg-[#33A953]",
      title: "5000+",
      description: "服务超过5000家企业客户",
    },
    {
      id: 4,
      bgColor: "bg-[#4385F5]",
      title: "5年以上",
      description: "持续稳定的服务质量",
    },
    {
      id: 5,
      bgColor: "bg-[#9866AF]",
      title: "3D 在亚太地区",
      description: "强大的区域服务网络",
    },
    {
      id: 6,
      bgColor: "bg-[#4C4C4C]",
      title: "5年以上",
      description: "值得信赖的合作伙伴",
    },
  ];

  return (
    <section className="bg-white py-12 md:pt-16">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#14C0C0] text-center mb-8 md:mb-16">
          我们的优势
        </h2>

        {/* Advantage Boxes Grid */}
        <div className="flex gap-2 md:gap-2">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`${advantage.bgColor} rounded-lg p-6 md:pt-8 px-4 shadow-lg hover:shadow-xl transition-shadow duration-200`}
            >
              <h3 className="text-2xl font-medium text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-white text-sm md:text-base opacity-90">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

