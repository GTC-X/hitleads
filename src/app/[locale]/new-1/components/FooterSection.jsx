"use client";

export default function FooterSection() {
  return (
    <footer className="bg-white py-6 md:py-8 px-4 md:px-6 lg:px-6 border-t border-gray-200">
      <div className="container mx-auto">
        {/* Wind Turbine Icons */}
        <div className="flex items-center justify-evenly gap-5 md:gap-5 lg:gap-5">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <img src="/new/3.svg" alt="" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
