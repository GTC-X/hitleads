"use client";

export default function AdvantagesSection() {
  const advantages = [
    {
      id: 1,
      bgColor: "bg-red-500",
      title: "3D 在亚太地区",
      description: "专业的3D服务覆盖亚太地区",
    },
    {
      id: 2,
      bgColor: "bg-yellow-400",
      title: "5年以上",
      description: "丰富的行业经验和专业知识",
    },
    {
      id: 3,
      bgColor: "bg-green-500",
      title: "5000+",
      description: "服务超过5000家企业客户",
    },
    {
      id: 4,
      bgColor: "bg-blue-500",
      title: "5年以上",
      description: "持续稳定的服务质量",
    },
    {
      id: 5,
      bgColor: "bg-purple-500",
      title: "3D 在亚太地区",
      description: "强大的区域服务网络",
    },
    {
      id: 6,
      bgColor: "bg-gray-700",
      title: "5年以上",
      description: "值得信赖的合作伙伴",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8 md:mb-12">
          我们的优势
        </h2>

        {/* Advantage Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className={`${advantage.bgColor} rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-200`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
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

