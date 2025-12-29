// "use client";
// import { useState } from "react";

// export default function FormSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section className="bg-amber-50 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//           {/* Left Column - Form */}
//           <div className="space-y-8">
//             {/* Headline */}
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
//               在金融的世界里,每一天都是 充满机遇的新开始。
//             </h2>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Name Input */}
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="姓名"
//                   className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//                 />
//               </div>

//               {/* Email Input */}
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="邮箱"
//                   className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
//                 />
//               </div>

//               {/* Message Textarea */}
//               <div>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="留言内容"
//                   rows="5"
//                   className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold px-6 py-4 rounded-lg transition-colors duration-200"
//               >
//                 让每一分都闪耀
//               </button>
//             </form>
//           </div>

//           {/* Right Column - 3D Characters */}
//           <div className="relative">
//             <div className="flex items-end justify-center gap-4 h-96">
//               {/* Character 1 - Gray Suit */}
//               <div className="relative">
//                 <div className="w-32 h-40 md:w-40 md:h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-full flex items-end justify-center pb-4 shadow-lg">
//                   {/* Character body */}
//                   <div className="w-20 h-24 bg-gray-400 rounded-t-full"></div>
//                 </div>
//                 {/* Hand pointing up */}
//                 <div className="absolute -top-4 right-0 w-8 h-12 bg-gray-300 rounded-full transform rotate-[-20deg]"></div>
//               </div>

//               {/* Character 2 - Brown Suit with Orange Tie */}
//               <div className="relative mt-8">
//                 <div className="w-32 h-40 md:w-40 md:h-48 bg-gradient-to-br from-amber-200 to-amber-300 rounded-t-full flex items-end justify-center pb-4 shadow-lg">
//                   {/* Character body */}
//                   <div className="w-20 h-24 bg-amber-400 rounded-t-full"></div>
//                 </div>
//                 {/* Orange tie */}
//                 <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-orange-500 rounded-full"></div>
//               </div>

//               {/* Character 3 - Purple Top (Woman) */}
//               <div className="relative">
//                 <div className="w-32 h-40 md:w-40 md:h-48 bg-gradient-to-br from-purple-200 to-purple-300 rounded-t-full flex items-end justify-center pb-4 shadow-lg">
//                   {/* Character body */}
//                   <div className="w-20 h-24 bg-purple-400 rounded-t-full"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";

export default function HeroLeadCardZH() {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto">
        {/* Card */}
        <div className="relative overflow-hidden rounded-[16px] bg-[#B0895C] pt-10">
          {/* Bottom center notch */}
          <div className="absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-white" />

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="px-8 py-10 lg:py-0 lg:pl-16 lg:pr-10">
              <h2 className="text-white font-semibold leading-[1.25] text-[18px] lg:text-[20px] max-w-[330px]">
                在金融的世界里，每一天都是
                <br />
                充满机遇的新开始。
              </h2>

              <div className="mt-6 max-w-[500px] space-y-3">
                {/* Row 1: two inputs */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="姓名"
                    className="h-10 w-full rounded-[4px] border border-white/35 bg-transparent px-3 text-[12px] text-white placeholder:text-white/60 outline-none focus:border-white/70"
                  />
                  <input
                    placeholder="电话"
                    className="h-10 w-full rounded-[4px] border border-white/35 bg-transparent px-3 text-[12px] text-white placeholder:text-white/60 outline-none focus:border-white/70"
                  />
                </div>

                {/* Row 2: full input */}
                <textarea
                rows={5}
                  placeholder="留言内容"
                  className="h-20 pt-2 w-full rounded-[4px] border border-white/35 bg-transparent px-3 text-[12px] text-white placeholder:text-white/60 outline-none focus:border-white/70"
                />

                {/* Button */}
                <button
                  type="button"
                  className="mt-2 h-10 w-full rounded-[4px] bg-gradient-to-r from-[#1E825C] to-[#5BC388] text-[12px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.18)] hover:brightness-105 active:brightness-95"
                >
                  让我一步步带你走更远
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative h-[240px] sm:h-[280px] lg:h-[400px]">
              <img
                src="/new/person-2.svg" // <-- replace with your exact image path
                alt="Characters"
                className="absolute right-0 bottom-0 h-full w-full object-cover object-right"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
