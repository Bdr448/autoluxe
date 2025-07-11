import { motion } from "framer-motion";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import car6 from "../assets/car6.jpg";

const cars = [
  { image: car1, name: "Lamborghini Huracán", status: "Available" },
  { image: car2, name: "Ferrari 812 Superfast", status: "Limited Stock" },
  { image: car3, name: "Porsche 911 Turbo", status: "Available" },
  { image: car4, name: "McLaren 720S", status: "Sold Out" },
  { image: car5, name: "Rolls-Royce Ghost", status: "Available" },
  { image: car6, name: "Audi R8 V10 Plus", status: "Available" },
];

export default function AvailabilityGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 pb-24"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
    >
      {cars.map((car, index) => (
        <motion.div
          key={index}
          className="bg-white/5 border border-gray-700 rounded-xl overflow-hidden shadow-xl backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-56 object-cover rounded-t-xl"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-2">
              {car.name}
            </h3>
            <p
              className={`text-sm ${
                car.status === "Available"
                  ? "text-green-400"
                  : car.status === "Limited Stock"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {car.status}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
