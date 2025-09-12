import { motion } from "framer-motion";

const testimonials = [
  { name: "Jane D.", text: "Super quick and my dresses look great every time. Highly recommend!" },
  { name: "Mark S.", text: "The eco-friendly cleaning is a big plus for me. Service is top-notch." },
  { name: "Lila W.", text: "Easy booking, friendly staff, and spotless shirts. What more could you want?" },
];

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="max-w-4xl mx-auto py-20 px-4"
    >
      <h2 className="text-3xl font-bold text-[#2563EB] text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            whileHover={{ scale: 1.05, backgroundColor: "#10B98111" }}
            className="bg-white shadow rounded-lg p-6 text-center flex flex-col items-center"
          >
            <div className="text-[#2563EB] text-5xl mb-2">“</div>
            <div className="text-[#222831] mb-3">{t.text}</div>
            <div className="text-[#10B981] font-semibold">{t.name}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}