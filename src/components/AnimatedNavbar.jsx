import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setExpanded(true), 300);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ width: 120, height: 60, borderRadius: 999 }}
      animate={{
        width: scrolled ? 120 : expanded ? "100%" : 120,
        borderRadius: scrolled ? 999 : expanded ? "20px" : 999,
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
        h-[60px] 
        backdrop-blur-md bg-white/30 shadow-lg
        flex items-center justify-center px-4 sm:px-8 overflow-hidden transition-all duration-300`}
    >
      {expanded && !scrolled && (
        <motion.ul
          initial={{ opacity: 0, gap: "8px" }}
          animate={{ opacity: 1, gap: "130px" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="flex flex-wrap sm:flex-nowrap justify-center text-sm sm:text-base md:text-lg font-semibold drop-shadow-md"
        >
          {["Home", "Cars", "Gallery", "Contact"].map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="text-white no-underline hover:underline hover:text-gray-200 transition px-2 sm:px-4"
              >
                {label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}

      {scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm sm:text-base font-semibold text-black"
        >
          AutoLuxe
        </motion.div>
      )}
    </motion.div>
  );
}
