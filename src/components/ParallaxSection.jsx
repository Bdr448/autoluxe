// src/components/ParallaxSection.jsx
import { useEffect, useState } from "react";
import car6 from "../assets/car6.jpg"; // Make sure the path is correct

export default function ParallaxSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden bg-black">
      {/* Parallax Image */}
      <img
        src={car6}
        alt="Luxury Car"
        className="absolute top-0 left-0 w-full h-auto object-cover"
        style={{
          transform: `translateY(${offsetY * 0.4}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Experience the Drive
        </h2>
        <p className="text-xl max-w-xl drop-shadow-md">
          Cutting-edge performance, timeless design, and a rush like no other.
        </p>
      </div>
    </section>
  );
}
