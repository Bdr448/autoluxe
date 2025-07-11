import { motion } from "framer-motion";

export default function ScrollRevealSection({ title, content }) {
  return (
    <motion.div
      className="w-full px-6 md:px-16 py-24 text-center bg-gradient-to-b from-black to-gray-900"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold text-white mb-6">{title}</h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">{content}</p>
    </motion.div>
  );
}
