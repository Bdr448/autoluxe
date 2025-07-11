// src/components/CTASection.jsx
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-6"
        >
          Ready to Feel the Power?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl max-w-2xl text-gray-300 mb-8"
        >
          Schedule your test drive today and be the first to experience
          Autoluxe's high-performance engineering.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="px-10 py-4 bg-white text-black font-semibold rounded-full shadow-lg"
        >
          Book a Drive
        </motion.button>
      </div>

      {/* Animated glowing shape background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.2, scale: 1.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-30 -top-40 left-1/2 -translate-x-1/2 z-0"
      />
    </section>
  );
}
