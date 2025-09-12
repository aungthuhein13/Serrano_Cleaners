import { motion } from "framer-motion";

const items = [
  { name: "Shirt", price: "$3" },
  { name: "Pants", price: "$4" },
  { name: "Jacket", price: "$7" },
  { name: "Dress", price: "$8" },
];

export default function Pricing() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="max-w-3xl mx-auto py-20 px-4"
    >
      <h2 className="text-3xl font-bold text-[#2563EB] text-center mb-8">Pricing</h2>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex justify-between bg-white shadow p-4 rounded-lg font-medium text-lg"
          >
            <span>{item.name}</span>
            <span className="text-[#10B981]">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="text-xs text-[#222831] opacity-60 text-center mt-3">
        *Prices may vary for special fabrics & express service.
      </div>
    </motion.section>
  );
}