// src/components/Navbar.jsx
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">AutoLuxe</div>
        <ul className="flex gap-6 font-medium text-sm text-gray-300">
          <li>
            <a href="#hero" className="hover:text-white">
              Home
            </a>
          </li>
          ...
        </ul>
      </div>
    </nav>
  );
}
