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

export default function GSuiteImpactWheelZH() {
  return (
    <section className="w-full bg-[#F3F3F3]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Headings */}
        <div className="text-center">
          <h2 className="text-[30px] font-medium text-[#2B2B2B]">
            G Suite 是一款极具影响力且操作简便的工具
          </h2>
          <p className="mt-3 text-[16px] font-medium text-[#2B2B2B]">
            适用于任何企业的运营
          </p>

          <div className="mt-5 flex justify-center">
            <span className="rounded-[4px] bg-[#EF766D] px-6 py-[7px] text-[14px] font-medium text-white shadow">
              无论其规模大小——大还是小，无论其规模大小——大还是小
            </span>
          </div>
        </div>

        {/* Diagram */}
        <div className="mt-14 grid grid-cols-3 items-center gap-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-end gap-30">
            <SideItem
              align="right"
              color="#E85A52"
              title="连接"
              desc="找到你的同事，无论他们在哪里"
            />
            <SideItem
              align="right"
              color="#63C97A"
              title="连接"
              desc="找到你的同事，无论他们在哪里"
            />
          </div>

          {/* CENTER WHEEL */}
          <div className="flex justify-center">
            <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full">
              <div className="flex h-[420px] w-[420px] items-center justify-center rounded-full bg-[#E9E9E9]">
                <div className="flex h-[370px] w-[370px] flex-col items-center justify-center rounded-full bg-white shadow ring-1 ring-[#E6E6E6] px-10 text-center">
                  {/* Google logo */}
                  <div className="flex gap-[2px] text-[36px] font-semibold">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </div>

                  <p className="mt-6 text-[14px] leading-[1.8] text-[#000]">
                    通过使用 G
                    Suite，该组织能够获得更加个性化的电子邮件地址（适用于企业版
                    Gmail）、通过安卓系统实现的移动电子邮件功能（用于工作）以及即时通讯服务。通过使用
                    G
                    Suite，该组织能够获得更加个性化的电子邮件地址（适用于企业版
                    Gmail）、通过安卓系统实现的移动电子邮件功能（用于工作）以及即时通讯服务。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col items-start gap-30">
            <SideItem
              align="left"
              color="#3D78FF"
              title="连接"
              desc="找到你的同事，无论他们在哪里"
            />
            <SideItem
              align="left"
              color="#BDBDBD"
              title="连接"
              desc="找到你的同事，无论他们在哪里"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SIDE ITEM ================= */

function SideItem({ align, color, title, desc }) {
  const isLeft = align === "left";

  return (
    <div
      className={`flex items-center gap-6 ${
        isLeft ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Text */}
      <div className={`w-[170px] ${isLeft ? "text-left" : "text-right"}`}>
        <div className="text-[22px] font-medium text-[#2B2B2B]">{title}</div>
        <div className="mt-2 text-[14px] leading-4 text-[#9A9A9A]">{desc}</div>
      </div>

      {/* Icon */}
      <div className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white shadow">
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: `1px solid ${color}` }}
        />
        <div className="flex h-[54px] w-[38px] items-center justify-center rounded-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="69"
            viewBox="0 0 62 69"
            fill={color}
          >
            <path
              d="M40.4396 53.9388C40.4982 56.1525 41.0255 57.8017 41.9825 58.8688C42.9493 59.9536 44.7462 60.5974 47.3634 60.8091V48.6208C43.8282 48.0828 41.2696 47.1127 39.7267 45.7104C38.1642 44.3169 37.3927 42.4561 37.3927 40.163C37.3927 37.7377 38.213 35.7887 39.8731 34.3335C41.5333 32.8783 44.0235 32.0228 47.3732 31.7847V27.9395H50.3712V31.7847C53.6817 32.0845 56.0646 32.94 57.5489 34.3511C59.0333 35.7622 59.756 37.6407 59.756 39.9955H56.1231C55.8595 38.2669 55.3321 36.9881 54.5314 36.1502C53.7306 35.3124 52.3536 34.8273 50.381 34.6951V45.7016C51.4845 45.975 52.4024 46.1866 53.0763 46.3718C53.7696 46.5394 54.336 46.7158 54.795 46.8834C55.2247 47.0421 55.586 47.2097 55.8692 47.3684C56.172 47.536 56.5138 47.7212 56.8946 47.9417C58.2325 48.7531 59.2286 49.7055 59.8438 50.7903C60.4591 51.8839 60.7716 53.2597 60.7716 54.8913C60.7716 57.5812 59.922 59.6802 58.213 61.1619C56.504 62.6435 53.8868 63.5166 50.3517 63.7547V68.1379H47.3536V63.7636C43.4864 63.4902 40.7228 62.5377 39.0626 60.8885C37.4024 59.2392 36.5821 56.9286 36.631 53.93H40.42V53.9388H40.4396ZM42.461 43.338C43.379 44.2111 45.0196 44.8373 47.3732 45.2341V34.7127C45.2149 34.8009 43.6134 35.3124 42.6075 36.2561C41.6017 37.1997 41.0743 38.4256 41.0743 39.9337C41.0939 41.336 41.5333 42.4649 42.461 43.338ZM55.5958 51.3459C54.6485 50.3494 52.9103 49.6085 50.3907 49.1235V60.8532C52.4903 60.8003 54.1114 60.2535 55.2833 59.2128C56.4357 58.1721 57.0216 56.858 57.0216 55.2617C57.0216 53.6566 56.5431 52.3425 55.5958 51.3459Z"
              fill={color}
            />
            <path
              d="M30.6543 0C13.7207 0 0 6.19999 0 13.8375V51.399C0 57.9606 13.7207 63.261 30.6543 63.261V59.3188C16.1523 59.3188 4.38477 55.7822 4.38477 51.4079V45.6665C9.04297 48.6562 16.9824 50.7817 26.2793 51.2932V47.3421C13.8574 46.716 4.38477 43.4616 4.38477 39.5459V33.8045C9.02344 36.7854 16.9824 38.9197 26.2793 39.4312V35.4801C13.8574 34.854 4.38477 31.5996 4.38477 27.6839V20.9812C9.75586 25.0028 19.502 27.6839 30.6543 27.6839C41.8066 27.6839 51.5723 24.994 56.9238 20.9812V26.3433H61.2988V13.8552C61.3086 6.19999 47.5781 0 30.6543 0ZM30.6543 23.724C16.1523 23.724 4.375 19.2879 4.375 13.8463C4.375 8.38718 16.1328 3.95106 30.6445 3.95106C45.1465 3.95106 56.9141 8.38718 56.9141 13.8463C56.9238 19.2967 45.166 23.724 30.6543 23.724Z"
              fill={color}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ================= ICON ================= */

function MoneyDocIcon({ color }) {
  return (
    <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
      <path
        d="M16 10h14l6 6v22H16V10Z"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M30 10v8h8"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M22 30c0 2.6 2.2 4 5 4s5-1.4 5-3.5c0-2.2-2.1-3-5-3s-5-.9-5-3.2c0-2 2.2-3.3 5-3.3s5 1.2 5 3"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// import React from "react";

// export default function GSuiteImpactWheelZH() {
//   return (
//     <section className="w-full bg-[#F3F3F3]">
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         {/* Headings */}
//         <div className="text-center">
//           <h2 className="text-[20px] font-semibold text-[#2B2B2B] tracking-[0.2px]">
//             G Suite 是一款极具影响力且操作简便的工具
//           </h2>
//           <p className="mt-3 text-[16px] font-semibold text-[#2B2B2B]">
//             适用于任何企业的运营
//           </p>

//           {/* Red pill */}
//           <div className="mt-5 flex justify-center">
//             <span className="inline-flex items-center rounded-[4px] bg-[#F06B63] px-6 py-[7px] text-[11px] font-semibold text-white shadow-[0_10px_18px_rgba(240,107,99,0.18)]">
//               无论其规模大小——大还是小，无论其规模大小——大还是小
//             </span>
//           </div>
//         </div>

//         {/* Diagram Area */}
//         <div className="relative mt-12 h-[520px] w-full">
//           {/* Center rings */}
//           <div className="absolute left-1/2 top-[56%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E9E9E9]" />
//           <div className="absolute left-1/2 top-[56%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6F6F6]" />
//           <div className="absolute left-1/2 top-[56%] h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_18px_42px_rgba(0,0,0,0.12)] ring-1 ring-[#E6E6E6]" />

//           {/* Center Content */}
//           <div className="absolute left-1/2 top-[56%] w-[260px] -translate-x-1/2 -translate-y-1/2 text-center">
//             <div className="flex items-center justify-center gap-[2px] text-[36px] font-semibold leading-none">
//               <span className="text-[#4285F4]">G</span>
//               <span className="text-[#EA4335]">o</span>
//               <span className="text-[#FBBC05]">o</span>
//               <span className="text-[#4285F4]">g</span>
//               <span className="text-[#34A853]">l</span>
//               <span className="text-[#EA4335]">e</span>
//             </div>

//             <p className="mt-6 text-[11px] leading-[1.8] text-[#6F6F6F]">
//               通过使用 G Suite，该组织能够获得更加个性化的电子邮件地址（适用于企业版 Gmail），
//               通过安卓系统实现的移动电子邮件功能（用于工作）以及即时通讯服务。
//               通过使用 G Suite，该组织能够获得更加个性化的电子邮件地址（适用于企业版 Gmail），
//               通过安卓系统实现的移动电子邮件功能（用于工作）以及即时通讯服务。
//             </p>
//           </div>

//           {/* Left top (red) */}
//           <SideItem
//             position="leftTop"
//             color="#E85A52"
//             title="连接"
//             desc="找到你的同事，无论他们在哪里"
//           />

//           {/* Left bottom (green) */}
//           <SideItem
//             position="leftBottom"
//             color="#63C97A"
//             title="连接"
//             desc="找到你的同事，无论他们在哪里"
//           />

//           {/* Right top (blue) */}
//           <SideItem
//             position="rightTop"
//             color="#3D78FF"
//             title="连接"
//             desc="找到你的同事，无论他们在哪里"
//           />

//           {/* Right bottom (gray) */}
//           <SideItem
//             position="rightBottom"
//             color="#BDBDBD"
//             title="连接"
//             desc="找到你的同事，无论他们在哪里"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function SideItem({ position, color, title, desc }) {
//   const pos = (() => {
//     switch (position) {
//       case "leftTop":
//         return {
//           left: "70px",
//           top: "170px",
//           textAlign: "right",
//           flexDirection: "row",
//         };
//       case "leftBottom":
//         return {
//           left: "70px",
//           top: "330px",
//           textAlign: "right",
//           flexDirection: "row",
//         };
//       case "rightTop":
//         return {
//           right: "70px",
//           top: "170px",
//           textAlign: "left",
//           flexDirection: "row-reverse",
//         };
//       case "rightBottom":
//         return {
//           right: "70px",
//           top: "330px",
//           textAlign: "left",
//           flexDirection: "row-reverse",
//         };
//       default:
//         return {};
//     }
//   })();

//   const isRight = position.includes("right");

//   return (
//     <div
//       className="absolute flex items-center gap-6"
//       style={{
//         ...pos,
//       }}
//     >
//       {/* Text */}
//       <div style={{ textAlign: pos.textAlign }} className="w-[170px]">
//         <div className="text-[14px] font-semibold text-[#2B2B2B]">{title}</div>
//         <div className="mt-2 text-[10px] leading-4 text-[#9A9A9A]">{desc}</div>
//       </div>

//       {/* Circle icon */}
//       <div className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white shadow-[0_16px_30px_rgba(0,0,0,0.10)]">
//         <div
//           className="absolute inset-0 rounded-full"
//           style={{ border: `1px solid ${color}` }}
//         />
//         <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[14px] bg-white">
//           <MoneyDocIcon color={color} />
//         </div>
//       </div>

//       {/* Small extra text (like screenshot, faint under circle) */}
//       <div
//         className="absolute text-[9px] text-[#B5B5B5]"
//         style={{
//           ...(isRight
//             ? { right: "120px", top: "58px", textAlign: "left" }
//             : { left: "120px", top: "58px", textAlign: "right" }),
//           width: "140px",
//         }}
//       >
//         {desc}
//       </div>
//     </div>
//   );
// }

// function MoneyDocIcon({ color }) {
//   return (
//     <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
//       {/* document */}
//       <path
//         d="M16 10h14l6 6v22H16V10Z"
//         stroke={color}
//         strokeWidth="2.6"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M30 10v8h8"
//         stroke={color}
//         strokeWidth="2.6"
//         strokeLinejoin="round"
//       />
//       {/* coin/dollar */}
//       <path
//         d="M22 30c0 2.6 2.2 4 5 4s5-1.4 5-3.5c0-2.2-2.1-3-5-3s-5-.9-5-3.2c0-2 2.2-3.3 5-3.3s5 1.2 5 3"
//         stroke={color}
//         strokeWidth="2.6"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// import React from "react";

// export default function GSuiteWheelZH() {
//   return (
//     <section className="w-full bg-white">
//       <div className="max-w-6xl mx-auto px-6 py-10">
//         {/* Title */}
//         <div className="text-center">
//           <h2 className="text-[12px] font-semibold text-[#1F1F1F]">
//             G Suite 是一款极具影响力且流行的智能办公工具
//           </h2>
//           <p className="mt-1 text-[10px] leading-5 text-[#8B8B8B]">
//             适用于各种企业的运营
//           </p>

//           {/* Red pill */}
//           <div className="mt-3 flex justify-center">
//             <span className="inline-flex items-center rounded-full bg-[#FF4D4F] px-4 py-[5px] text-[10px] font-semibold text-white shadow-[0_8px_18px_rgba(255,77,79,0.22)]">
//               为企业提供协作工具与远程办公
//             </span>
//           </div>
//         </div>

//         {/* Diagram */}
//         <div className="relative mt-10 h-[270px] w-full">
//           {/* soft background circle */}
//           <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4F4F4]" />
//           <div className="absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)]" />

//           {/* Center Card */}
//           <div className="absolute left-1/2 top-1/2 w-[170px] -translate-x-1/2 -translate-y-1/2 text-center">
//             <div className="rounded-[14px] bg-white px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] ring-1 ring-[#EFEFEF]">
//               <div className="flex items-center justify-center gap-[2px] text-[18px] font-semibold leading-none">
//                 <span className="text-[#4285F4]">G</span>
//                 <span className="text-[#EA4335]">o</span>
//                 <span className="text-[#FBBC05]">o</span>
//                 <span className="text-[#4285F4]">g</span>
//                 <span className="text-[#34A853]">l</span>
//                 <span className="text-[#EA4335]">e</span>
//               </div>

//               <p className="mt-2 text-[9px] leading-[1.55] text-[#7C7C7C]">
//                 在一个平台中集中管理邮件、文档、表格与在线会议，
//                 让团队成员随时随地高效沟通、协同编辑并共享资源，
//                 提升工作效率与信息安全。
//               </p>
//             </div>
//           </div>

//           {/* Helper: node item */}
//           <Node
//             side="left"
//             top="52px"
//             color="#FF4D4F"
//             title="邮件"
//             sub="WORKSPACE / GMAIL"
//           />
//           <Node
//             side="left"
//             top="150px"
//             color="#52C41A"
//             title="在线协作"
//             sub="DOCS / SHEETS"
//           />
//           <Node
//             side="right"
//             top="52px"
//             color="#3B82F6"
//             title="会议"
//             sub="MEET / CALENDAR"
//           />
//           <Node
//             side="right"
//             top="150px"
//             color="#BFBFBF"
//             title="共享"
//             sub="DRIVE / STORAGE"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// /** Left / Right node */
// function Node({ side = "left", top = "0px", color, title, sub }) {
//   const isLeft = side === "left";

//   return (
//     <div
//       className="absolute flex items-center gap-3"
//       style={{
//         top,
//         left: isLeft ? "38px" : "auto",
//         right: isLeft ? "auto" : "38px",
//       }}
//     >
//       {/* Left side has text first, then icon. Right is reversed (like screenshot) */}
//       {isLeft && (
//         <div className="text-right">
//           <p className="text-[10px] font-semibold text-[#1F1F1F]">{title}</p>
//           <p className="mt-[2px] text-[8px] tracking-wide text-[#A9A9A9]">
//             {sub}
//           </p>
//         </div>
//       )}

//       {/* Icon bubble */}
//       <div className="relative flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] ring-1 ring-[#EFEFEF]">
//         <div
//           className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px]"
//           style={{ backgroundColor: `${color}18` }}
//         >
//           {/* tiny doc icon */}
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M8 3h6l4 4v14H8V3Z"
//               stroke={color}
//               strokeWidth="2"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M14 3v5h5"
//               stroke={color}
//               strokeWidth="2"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M10 13h6M10 16h6"
//               stroke={color}
//               strokeWidth="2"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>
//       </div>

//       {!isLeft && (
//         <div className="text-left">
//           <p className="text-[10px] font-semibold text-[#1F1F1F]">{title}</p>
//           <p className="mt-[2px] text-[8px] tracking-wide text-[#A9A9A9]">
//             {sub}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
