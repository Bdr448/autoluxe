import { motion } from "framer-motion";
import carImage from "../assets/car.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-between px-6 md:px-16">
      {/* Spotlight Triangle with Glow Effect */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-[18%] transform -translate-x-1/2 origin-top z-10 h-full w-full glow-beam"
        style={{
          clipPath: "polygon(50% 0%, 75% 100%, 20% 150%)",
          background: "linear-gradient(to bottom, white, transparent 85%)",
        }}
      />

      {/* Spotlight Over Car with Glow Effect */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 origin-top z-30 h-full w-[100%] pointer-events-none glow-beam"
        style={{
          clipPath: "polygon(50% 0%, 70% 100%, 30% 100%)",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0) 85%)",
        }}
      />

      {/* Car Image */}
      <motion.img
        src={carImage}
        alt="Car"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-[-7.9%] right-[-7%] translate-x-1/2 w-[1200px] h-[450px] z-20 object-contain"
      />

      {/* ✅ Left Side Text */}
      <motion.div
        className="absolute left-[8%] bottom-1/3 z-30 text-white w-[320px]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
        >
          NEXT-GEN PERFORMANCE
        </motion.h2>

        <motion.div
          className="space-y-3 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <p>3PC Turbocharged Engine</p>
          <p>Carbon Fiber Body</p>
          <p>Aerodynamic Design</p>
        </motion.div>

        <motion.button
          className="mt-6 px-8 py-3 bg-white text-black font-medium rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          Explore More
        </motion.button>
      </motion.div>
    </section>
  );
}
