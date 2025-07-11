import { useState } from "react";
import { motion } from "framer-motion";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import car6 from "../assets/car6.jpg";

const images = [car1, car2, car3, car4, car5, car6];

export default function ImageGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-black py-24">
      <h2 className="text-4xl text-center text-white font-bold mb-12">
        Gallery
      </h2>
      <div className="flex justify-center items-center gap-4 px-6 flex-wrap">
        {images.map((img, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              scale:
                hoveredIndex === null
                  ? 1
                  : hoveredIndex === index
                  ? 1.15
                  : 0.85,
              filter:
                hoveredIndex === null
                  ? "brightness(1)"
                  : hoveredIndex === index
                  ? "brightness(1.2)"
                  : "brightness(0.6)",
              zIndex: hoveredIndex === index ? 10 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-[250px] h-[300px] rounded-xl overflow-hidden shadow-xl cursor-pointer"
          >
            <img
              src={img}
              alt={`Car ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
