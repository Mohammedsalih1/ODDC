"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);


  return (
    <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.3, duration: 0.5}} className="relative w-full h-64 md:h-216 overflow-hidden mt-6">

      {/* Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute px-4 inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${i}`}
            // height={180}
            // width={1080}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      ))}
    </motion.div>
  );
}
