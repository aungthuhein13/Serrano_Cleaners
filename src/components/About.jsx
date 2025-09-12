import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="max-w-3xl mx-auto py-20 px-4 text-center"
    >
      <h2 className="text-3xl font-bold text-[#2563EB] mb-4">About Us</h2>
      <p className="text-lg text-[#222831] opacity-80">
        Serrano Drycleaner is dedicated to making your life easier. With eco-friendly methods, exceptional care, and a passion for detail, we’ve modernized the local dry cleaning experience.
      </p>
    </motion.section>
  );
}