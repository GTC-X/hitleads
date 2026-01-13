export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-100 py-6 md:py-8">
      <div className="mx-auto container flex items-center justify-center">
        <p className="text-center text-sm md:text-base text-gray-600">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
