import { motion } from "framer-motion";

const services = [
  { icon: "🧥", title: "Dry Cleaning" },
  { icon: "👔", title: "Shirt Ironing" },
  { icon: "🛒", title: "Express Service" },
  { icon: "🌱", title: "Eco-Friendly" },
];

export default function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="max-w-4xl mx-auto py-20 px-4"
    >
      <h2 className="text-3xl font-bold text-[#2563EB] text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.06, boxShadow: "0 6px 24px #2563EB15" }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow transition"
          >
            <span className="text-5xl mb-3">{service.icon}</span>
            <div className="text-xl font-semibold text-[#222831]">{service.title}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}