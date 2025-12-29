"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Cityscape Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
        {/* Cityscape Illustration */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 opacity-60">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            {/* Buildings */}
            <rect x="0" y="200" width="80" height="200" fill="#1e3a8a" />
            <rect x="100" y="150" width="60" height="250" fill="#1e40af" />
            <rect x="180" y="180" width="70" height="220" fill="#1e3a8a" />
            <rect x="270" y="100" width="90" height="300" fill="#1e40af" />
            <rect x="380" y="160" width="75" height="240" fill="#1e3a8a" />
            <rect x="475" y="80" width="100" height="320" fill="#1e40af" />
            <rect x="595" y="140" width="85" height="260" fill="#1e3a8a" />
            <rect x="700" y="110" width="95" height="290" fill="#1e40af" />
            <rect x="815" y="170" width="70" height="230" fill="#1e3a8a" />
            <rect x="905" y="130" width="80" height="270" fill="#1e40af" />
            <rect x="1005" y="90" width="110" height="310" fill="#1e3a8a" />
            <rect x="1135" y="160" width="65" height="240" fill="#1e40af" />
            
            {/* Windows/Lights */}
            {[20, 100, 180, 270, 380, 475, 595, 700, 815, 905, 1005, 1135].map((x, i) => (
              <g key={i}>
                <rect x={x + 15} y="220" width="8" height="8" fill="#fbbf24" opacity="0.8" />
                <rect x={x + 35} y="200" width="8" height="8" fill="#fbbf24" opacity="0.8" />
                <rect x={x + 25} y="250" width="8" height="8" fill="#60a5fa" opacity="0.8" />
              </g>
            ))}
            
            {/* Water Reflection */}
            <rect x="0" y="400" width="1200" height="100" fill="#1e40af" opacity="0.3" />
          </svg>
        </div>

        {/* Diagonal Lines in Sky */}
        <div className="absolute top-0 left-0 right-0 h-1/4 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 300">
            <line x1="0" y1="0" x2="1200" y2="150" stroke="#60a5fa" strokeWidth="2" />
            <line x1="0" y1="50" x2="1200" y2="200" stroke="#60a5fa" strokeWidth="2" />
            <line x1="0" y1="100" x2="1200" y2="250" stroke="#60a5fa" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
          G-SUITE 邮件解决方案
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white">
          为您的事业
        </p>
      </div>
    </section>
  );
}

