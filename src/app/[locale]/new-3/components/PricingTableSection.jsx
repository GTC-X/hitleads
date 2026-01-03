// "use client";

// export default function PricingTableSection() {
//   const tableRows = [
//     "布森新穿过格马尔",
//     "布森新穿过格马尔",
//     "布森新穿过格马尔",
//     "布森新穿过格马尔",
//     "布森新穿过格马尔",
//   ];

//   return (
//     <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Bar */}
//         <div className="grid grid-cols-3 mb-0 rounded-t-lg overflow-hidden border border-[#858383]">
//           <div className="bg-[#EE5255] px-4 md:px-6 py-4 md:py-6">
//             <p className="text-white font-medium text-base md:text-lg text-center">
//               是时候告别谷歌了
//             </p>
//           </div>
//           <div className="bg-[#34A853] px-4 md:px-6 py-4 md:py-6">
//             <p className="text-white font-medium text-base md:text-lg text-center mb-2">
//               G Suite 基础版
//             </p>
//             <p className="text-white text-xs md:text-sm text-center opacity-90">
//               专业办公设备配备有 30G 的存储空间
//             </p>
//           </div>
//           <div className="bg-[#4385F5] px-4 md:px-6 py-4 md:py-6">
//             <p className="text-white font-medium text-base md:text-lg text-center mb-2">
//               G Suite 商业版
//             </p>
//             <p className="text-white text-xs md:text-sm text-center opacity-90">
//               增强型 chon 系统,具备无限制的存储和备份功能
//             </p>
//           </div>
//         </div>

//         {/* Table Rows */}
//         <div className="bg-white border border-gray-200 rounded-b-lg  overflow-hidden">
//           {tableRows.map((row, index) => (
//             <div
//               key={index}
//               className={`grid grid-cols-3 ${
//                 index !== tableRows.length - 1 ? "border-b border-gray-200" : ""
//               }`}
//             >
//               <div className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
//                 {row}
//               </div>
//               <div className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
//                 {row}
//               </div>
//               <div className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-700">
//                 {index === tableRows.length - 1 ? (
//                   <span>
//                     不限制云服务的使用人数上限,多可支持5个用户同时使用。
//                   </span>
//                 ) : (
//                   row
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";

export default function GSuiteCompareTableZH() {
  const rows = [
    { c1: "布森斯穿过格马尔", c2: "布森斯穿过格马尔", c3: "布森斯穿过格马尔" },
    { c1: "布森斯穿过格马尔", c2: "布森斯穿过格马尔", c3: "布森斯穿过格马尔" },
    { c1: "布森斯穿过格马尔", c2: "布森斯穿过格马尔", c3: "布森斯穿过格马尔" },
    { c1: "布森斯穿过格马尔", c2: "布森斯穿过格马尔", c3: "布森斯穿过格马尔" },
    {
      c1: "布森斯穿过格马尔",
      c2: "布森斯穿过 格马尔",
      c3: "不限制作云服务的使用人数上限，最多可支持 5 个用户同时使用。",
    },
    { c1: "布森斯穿过格马尔", c2: "布森斯穿过格马尔", c3: "布森斯穿过格马尔" },
    { c1: "布森斯穿过格马尔", c2: "布森斯穿过格马尔", c3: "布森斯穿过格马尔" },
    { c1: "布森斯穿过格马尔", c2: "布森斯穿过格马尔", c3: "布森斯穿过格马尔" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* outer frame (like screenshot) */}
        <div className="border border-[#BDBDBD]/40">
          {/* header */}
          <div className="grid grid-cols-3">
            {/* left red */}
            <div className="bg-[#F04B4B] px-10 py-10">
              <h3 className="text-white text-[26px] font-semibold tracking-[0.2px]">
                是时候告别谷歌了
              </h3>
            </div>

            {/* middle green */}
            <div className="bg-[#34A853] px-8 py-9 text-center">
              <h3 className="text-white text-[22px] font-semibold">
                G Suite 基础版
              </h3>
              <p className="mt-2 text-[12px] text-white/90">
                专业办公设备配备有 30G 的存储空间
              </p>
            </div>

            {/* right blue */}
            <div className="bg-[#4A84FF] px-8 py-9 text-center">
              <h3 className="text-white text-[22px] font-semibold">
                G Suite 商业版
              </h3>
              <p className="mt-2 text-[12px] text-white/90">
                增强型 office 系统，具备无限制的存储和备份功能
              </p>
            </div>
          </div>

          {/* body rows */}
          <div className="grid grid-cols-3">
            {rows.map((r, i) => {
              const zebra = i % 2 === 0;
              const rowBg = zebra ? "bg-[#F3F3F3]" : "bg-white";

              return (
                <React.Fragment key={i}>
                  {/* col 1 */}
                  <div
                    className={`min-h-[52px] px-10 flex items-center ${rowBg}`}
                  >
                    <span className="text-[12px] text-[#666]">{r.c1}</span>
                  </div>

                  {/* col 2 */}
                  <div
                    className={`min-h-[52px] px-10 flex items-center justify-center ${rowBg}`}
                  >
                    <span className="text-[12px] text-[#666]">{r.c2}</span>
                  </div>

                  {/* col 3 */}
                  <div
                    className={`min-h-[52px] px-10 flex items-center justify-center text-center ${rowBg}`}
                  >
                    <span className="text-[12px] text-[#666] leading-5">
                      {r.c3}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          {/* bottom tiny icon (center) */}
          {/* <div className="relative h-[26px] bg-white">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F04B4B]">
               <svg width="14" height="10" viewBox="0 0 28 20" fill="none">
                <path
                  d="M4 12c2.6 0 3.2-4 6-4s3.4 4 6 4 3.2-4 6-4 3.4 4 6 4"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
