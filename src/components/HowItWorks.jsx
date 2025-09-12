import { motion } from "framer-motion";

const steps = [
  { step: "1", title: "Schedule", desc: "Book your service online or by phone." },
  { step: "2", title: "Drop Off", desc: "Bring your clothes or use our pickup service." },
  { step: "3", title: "Collect", desc: "Pick up fresh, clean clothes in 24-48 hours." },
];

export default function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="max-w-3xl mx-auto py-20 px-4"
    >
      <h2 className="text-3xl font-bold text-[#2563EB] text-center mb-8">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
            className="flex-1 bg-white rounded-lg shadow p-6 text-center transition"
          >
            <div className="text-4xl text-[#10B981] font-bold mb-2">{s.step}</div>
            <div className="font-semibold text-lg text-[#222831] mb-1">{s.title}</div>
            <div className="text-[#222831] opacity-70">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}