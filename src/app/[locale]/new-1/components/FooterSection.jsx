export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-[#293B93] to-[#0D122D] py-4">
      <div className="mx-auto container flex items-center justify-center">
        <p className="text-center text-sm md:text-base text-white">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
