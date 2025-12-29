"use client";

export default function PricingTableSection() {
  const tableRows = [
    "布森新穿过格马尔",
    "布森新穿过格马尔",
    "布森新穿过格马尔",
    "布森新穿过格马尔",
    "布森新穿过格马尔",
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Bar */}
        <div className="grid grid-cols-3 mb-0 rounded-t-lg overflow-hidden shadow-lg">
          <div className="bg-red-600 px-4 md:px-6 py-4 md:py-6">
            <p className="text-white font-bold text-base md:text-lg text-center">
              是时候告别谷歌了
            </p>
          </div>
          <div className="bg-green-600 px-4 md:px-6 py-4 md:py-6">
            <p className="text-white font-bold text-base md:text-lg text-center mb-2">
              G Suite 基础版
            </p>
            <p className="text-white text-xs md:text-sm text-center opacity-90">
              专业办公设备配备有30G的存储空间
            </p>
          </div>
          <div className="bg-blue-600 px-4 md:px-6 py-4 md:py-6">
            <p className="text-white font-bold text-base md:text-lg text-center mb-2">
              G Suite 商业版
            </p>
            <p className="text-white text-xs md:text-sm text-center opacity-90">
              增强型 chon 系统,具备无限制的存储和备份功能
            </p>
          </div>
        </div>

        {/* Table Rows */}
        <div className="bg-white border border-gray-200 rounded-b-lg shadow-lg overflow-hidden">
          {tableRows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index !== tableRows.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                {row}
              </div>
              <div className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                {row}
              </div>
              <div className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
                {index === tableRows.length - 1 ? (
                  <span>
                    不限制云服务的使用人数上限,多可支持5个用户同时使用。
                  </span>
                ) : (
                  row
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

