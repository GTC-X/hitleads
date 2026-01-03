"use client";
import { useState } from "react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nation: "+86",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center py-12 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Dark Background with Trading Charts */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Trading charts background effect */}
        <div className="absolute inset-0 opacity-30">
          {/* Simulated chart lines */}
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            {/* Candlestick patterns */}
            {[...Array(20)].map((_, i) => (
              <g key={i}>
                <rect
                  x={50 + i * 55}
                  y={200 + Math.random() * 100}
                  width="8"
                  height="30"
                  fill={i % 2 === 0 ? "#10b981" : "#ef4444"}
                  opacity="0.6"
                />
              </g>
            ))}
            {/* Line graphs */}
            <polyline
              points="0,300 100,280 200,260 300,270 400,250 500,240 600,230 700,220 800,210 900,200 1000,190 1100,180 1200,170"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              opacity="0.5"
            />
            <polyline
              points="0,350 100,360 200,370 300,380 400,390 500,400 600,410 700,420 800,430 900,440 1000,450 1100,460 1200,470"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Side - Main Content */}
        <div className="text-white space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Creating additional income opportunities through the foreign exchange
            market
          </h1>

          {/* Key Features */}
          <div className="flex flex-wrap items-center gap-4 text-base md:text-lg text-white/90">
            <span>Beginner-friendly</span>
            <span>•</span>
            <span>Compliant platform</span>
            <span>•</span>
            <span>Full guidance</span>
          </div>

          {/* CTA Text */}
          <p className="text-base md:text-lg text-white/80">
            Start with simulated trading and gradually transition to real
            trading.
          </p>
        </div>

        {/* Right Side - Information Form */}
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Information filling
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Nation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nation
              </label>
              <select
                name="nation"
                value={formData.nation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="+86">+86</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+81">+81</option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed information (optional)
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500">
              By submitting your detailed information, you are agreeing to be
              contacted so that we can respond to your inquiries.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-4 rounded-lg transition-colors duration-200"
            >
              Contact an expert immediately
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

