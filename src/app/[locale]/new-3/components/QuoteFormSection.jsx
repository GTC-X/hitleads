"use client";
import { useState } from "react";

export default function QuoteFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    companyUsers: "",
    currentSolution: "",
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
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8 md:mb-12">
          获取 GSuite 的免费报价
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">姓名</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">手机</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">公司名</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">公司用户</label>
                <input
                  type="text"
                  name="companyUsers"
                  value={formData.companyUsers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  您目前的电子邮件解决方案
                </label>
                <input
                  type="text"
                  name="currentSolution"
                  value={formData.currentSolution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-lg transition-colors duration-200"
            >
              SUEMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

