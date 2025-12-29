// "use client";

// export default function GoogleServicesSection() {
//   return (
//     <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Central Google Logo with Connections */}
//         <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
//           {/* Central Google Circle */}
//           <div className="relative z-10">
//             <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-200">
//               {/* Google Logo Text */}
//               <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 <span className="text-blue-500">G</span>
//                 <span className="text-red-500">o</span>
//                 <span className="text-yellow-500">o</span>
//                 <span className="text-blue-500">g</span>
//                 <span className="text-green-500">l</span>
//                 <span className="text-red-500">e</span>
//               </div>
//             </div>
//           </div>

//           {/* SVG Container for Connections */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
//             {/* Connections from top circles to center */}
//             <line x1="25%" y1="15%" x2="50%" y2="40%" stroke="#d1d5db" strokeWidth="2" />
//             <line x1="50%" y1="15%" x2="50%" y2="40%" stroke="#d1d5db" strokeWidth="2" />
//             <line x1="75%" y1="15%" x2="50%" y2="40%" stroke="#d1d5db" strokeWidth="2" />
            
//             {/* Connections from side elements */}
//             <line x1="10%" y1="50%" x2="35%" y2="50%" stroke="#d1d5db" strokeWidth="2" />
//             <line x1="65%" y1="50%" x2="90%" y2="50%" stroke="#d1d5db" strokeWidth="2" />
            
//             {/* Connections from APPS to circles */}
//             <line x1="25%" y1="75%" x2="30%" y2="65%" stroke="#d1d5db" strokeWidth="2" />
//             <line x1="50%" y1="75%" x2="50%" y2="65%" stroke="#d1d5db" strokeWidth="2" />
//             <line x1="75%" y1="75%" x2="70%" y2="65%" stroke="#d1d5db" strokeWidth="2" />
//           </svg>

//           {/* Connected Circles - Top Row */}
//           <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 flex gap-8 md:gap-16 z-20">
//             <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-300">
//               <span className="text-xs md:text-sm text-gray-600">文案1</span>
//             </div>
//             <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-300">
//               <span className="text-xs md:text-sm text-gray-600">文案1</span>
//             </div>
//             <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-300">
//               <span className="text-xs md:text-sm text-gray-600">文案1</span>
//             </div>
//           </div>

//           {/* Yellow Callout Box - Right Side */}
//           <div className="absolute right-[5%] top-[20%] w-64 md:w-80 bg-yellow-400 rounded-lg p-4 md:p-6 shadow-lg z-20">
//             <p className="text-sm md:text-base text-gray-800 leading-relaxed">
//               埃马尔搭配"闪充"动力接索功能,拥有高达300G的存储空间,提供全面的支持,支持多达100个地址,还有更多功能。
//             </p>
//           </div>

//           {/* Left Side - Connect Box and Dollar */}
//           <div className="absolute left-[5%] top-1/2 transform -translate-y-1/2 flex flex-col gap-4 items-center z-20">
//             <div className="bg-gray-200 rounded px-4 py-2 text-xs md:text-sm text-gray-700 whitespace-nowrap">
//               连接
//             </div>
//             <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//               <span className="text-gray-600 font-bold text-lg">$</span>
//             </div>
//           </div>

//           {/* Right Side - Connect Box and Dollar */}
//           <div className="absolute right-[5%] top-1/2 transform -translate-y-1/2 flex flex-col gap-4 items-center z-20">
//             <div className="bg-gray-200 rounded px-4 py-2 text-xs md:text-sm text-gray-700 whitespace-nowrap">
//               连接
//             </div>
//             <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//               <span className="text-gray-600 font-bold text-lg">$</span>
//             </div>
//           </div>

//           {/* Red APPS Circle - Bottom */}
//           <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-20">
//             <div className="w-32 h-32 md:w-40 md:h-40 bg-red-600 rounded-full shadow-lg flex flex-col items-center justify-center">
//               <span className="text-white font-bold text-lg md:text-xl mb-2">APPS</span>
//               <span className="text-white text-xs md:text-sm text-center px-2">
//                 托菲特出游业务
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Text below diagram */}
//         <div className="mt-8 md:mt-12 text-center max-w-3xl mx-auto">
//           <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//             G Suite的邮件和通信功能包括Gmail和移动邮件功能,为企业提供高效的通信解决方案。
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function GSuiteWheelZH() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[12px] font-semibold text-[#1F1F1F]">
            G Suite 是一款极具影响力且流行的智能办公工具
          </h2>
          <p className="mt-1 text-[10px] leading-5 text-[#8B8B8B]">
            适用于各种企业的运营
          </p>

          {/* Red pill */}
          <div className="mt-3 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-[#FF4D4F] px-4 py-[5px] text-[10px] font-semibold text-white shadow-[0_8px_18px_rgba(255,77,79,0.22)]">
              为企业提供协作工具与远程办公
            </span>
          </div>
        </div>

        {/* Diagram */}
        <div className="relative mt-10 h-[270px] w-full">
          {/* soft background circle */}
          <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4F4F4]" />
          <div className="absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)]" />

          {/* Center Card */}
          <div className="absolute left-1/2 top-1/2 w-[170px] -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="rounded-[14px] bg-white px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] ring-1 ring-[#EFEFEF]">
              <div className="flex items-center justify-center gap-[2px] text-[18px] font-semibold leading-none">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>

              <p className="mt-2 text-[9px] leading-[1.55] text-[#7C7C7C]">
                在一个平台中集中管理邮件、文档、表格与在线会议，
                让团队成员随时随地高效沟通、协同编辑并共享资源，
                提升工作效率与信息安全。
              </p>
            </div>
          </div>

          {/* Helper: node item */}
          <Node
            side="left"
            top="52px"
            color="#FF4D4F"
            title="邮件"
            sub="WORKSPACE / GMAIL"
          />
          <Node
            side="left"
            top="150px"
            color="#52C41A"
            title="在线协作"
            sub="DOCS / SHEETS"
          />
          <Node
            side="right"
            top="52px"
            color="#3B82F6"
            title="会议"
            sub="MEET / CALENDAR"
          />
          <Node
            side="right"
            top="150px"
            color="#BFBFBF"
            title="共享"
            sub="DRIVE / STORAGE"
          />
        </div>
      </div>
    </section>
  );
}

/** Left / Right node */
function Node({ side = "left", top = "0px", color, title, sub }) {
  const isLeft = side === "left";

  return (
    <div
      className="absolute flex items-center gap-3"
      style={{
        top,
        left: isLeft ? "38px" : "auto",
        right: isLeft ? "auto" : "38px",
      }}
    >
      {/* Left side has text first, then icon. Right is reversed (like screenshot) */}
      {isLeft && (
        <div className="text-right">
          <p className="text-[10px] font-semibold text-[#1F1F1F]">{title}</p>
          <p className="mt-[2px] text-[8px] tracking-wide text-[#A9A9A9]">
            {sub}
          </p>
        </div>
      )}

      {/* Icon bubble */}
      <div className="relative flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] ring-1 ring-[#EFEFEF]">
        <div
          className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px]"
          style={{ backgroundColor: `${color}18` }}
        >
          {/* tiny doc icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M8 3h6l4 4v14H8V3Z"
              stroke={color}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M14 3v5h5"
              stroke={color}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M10 13h6M10 16h6"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {!isLeft && (
        <div className="text-left">
          <p className="text-[10px] font-semibold text-[#1F1F1F]">{title}</p>
          <p className="mt-[2px] text-[8px] tracking-wide text-[#A9A9A9]">
            {sub}
          </p>
        </div>
      )}
    </div>
  );
}

