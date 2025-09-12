import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 mt-12"
    >
      <h2 className="text-2xl font-bold text-[#2563EB] mb-6">
        Contact Us
      </h2>
      <AnimatePresence>
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-[#10B981] font-semibold text-center py-10"
          >
            Thank you for reaching out!<br />
            We&apos;ll get back to you soon.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div>
              <label className="block text-[#222831] font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full border border-[#E5E7EB] rounded-md p-2 transition focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] bg-[#FAFAFA] hover:border-[#2563EB]/60"
                type="text"
                name="name"
                autoComplete="off"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-[#222831] font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-[#E5E7EB] rounded-md p-2 transition focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] bg-[#FAFAFA] hover:border-[#2563EB]/60"
                type="email"
                name="email"
                autoComplete="off"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-[#222831] font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border border-[#E5E7EB] rounded-md p-2 h-28 resize-none transition focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] bg-[#FAFAFA] hover:border-[#2563EB]/60"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#1e40af" }}
              whileTap={{ scale: 0.97, backgroundColor: "#1e40af" }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-full bg-[#2563EB] text-white py-2 rounded-md font-semibold shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 text-lg"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}