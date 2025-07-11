import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/10"
      >
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let’s Get In Touch
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Have questions or want to schedule a test drive? Drop us a message.
        </motion.p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black/30 text-white px-5 py-3 rounded-lg outline-none border border-white/10 focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black/30 text-white px-5 py-3 rounded-lg outline-none border border-white/10 focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full bg-black/30 text-white px-5 py-3 rounded-lg outline-none border border-white/10 focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-black py-3 rounded-full font-semibold text-lg transition-all hover:bg-white-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
