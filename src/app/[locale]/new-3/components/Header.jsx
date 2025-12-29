"use client";

export default function Header() {
  return (
    <header className="bg-gray-900 py-4 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-white font-bold text-xl md:text-2xl">LOGO</div>

        {/* Right - Navigation Dots and Phone Button */}
        <div className="flex items-center gap-4">
          {/* Navigation Dots */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium transition-colors">
              1
            </button>
            <button className="w-8 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium transition-colors">
              2
            </button>
            <button className="w-8 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium transition-colors">
              3
            </button>
          </div>

          {/* Phone Button */}
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm md:text-base">12345678909</span>
          </button>
        </div>
      </div>
    </header>
  );
}

