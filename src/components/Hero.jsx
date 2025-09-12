import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-center items-center text-center py-32 bg-white"
    >
      <h1 className="text-5xl font-extrabold text-[#2563EB] mb-4">Serrano Drycleaner</h1>
      <p className="text-xl text-[#222831] mb-8 max-w-lg">
        Experience the convenience of professional cleaning—with a modern touch. Fast, fresh, and always reliable.
      </p>
      <a
        href="#contact"
        onClick={e => {
          e.preventDefault();
          document.querySelector('[name="contact"]').scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-[#10B981] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#2563EB] transition-colors"
      >
        Book Now
      </a>
    </motion.section>
  );
}