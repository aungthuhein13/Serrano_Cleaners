import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const backgroundImages = [
  '../public/assets/drycleaning-1.jpg',
  '../public/assets/drycleaning-2.jpg',
  '../public/assets/drycleaning-3.jpg'
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-center items-center text-center py-32 relative overflow-hidden min-h-screen"
    >
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-2xl">
          Serrano Drycleaner
        </h1>
        <p className="text-xl text-white mb-8 max-w-lg drop-shadow-xl">
          Experience the convenience of professional cleaning—with a modern touch. Fast, fresh, and always reliable.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          onClick={e => {
            e.preventDefault();
            document.querySelector('[name="contact"]').scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[#22C55E] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#2563EB] transition-colors"
        >
          Book Now
        </motion.a>
      </div>
    </motion.section>
  );
}