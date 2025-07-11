export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Brand Name */}
        <div className="text-xl font-semibold">AutoLuxe</div>

        {/* Quick Links */}
        <ul className="flex gap-6 text-sm text-gray-400">
          <li>
            <a href="#hero" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#availability" className="hover:text-white transition">
              Availability
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-white transition">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons (use any icon lib or emojis for now) */}
        <div className="flex gap-4 text-gray-400 text-xl">
          <a href="#" className="hover:text-white transition">
            🌐
          </a>
          <a href="#" className="hover:text-white transition">
            📸
          </a>
          <a href="#" className="hover:text-white transition">
            ✉️
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} AutoLuxe. All rights reserved.
      </div>
    </footer>
  );
}
