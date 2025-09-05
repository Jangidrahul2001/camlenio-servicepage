"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyCamlenioSection() {
  return (
    <div
      id="next-section"
      className="min-h-screen scroll-mt-20 text-gray-800 px-6 md:px-16 py-20"
    >
      <div className="max-w-[100rem] mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-bold text-center"
        >
          The Story Behind <span className="text-orange-500">Camlenio CRM</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Every great business is built on strong customer relationships. But
          too often, traditional CRMs make things complicated instead of
          simplifying them. That’s where our story begins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-indigo-50 via-orange-200 to-indigo-100 p-10 rounded-3xl "
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 ">
              Why Choose Our CRM?
            </h2>
            <ul className="space-y-6 text-lg md:text-xl leading-relaxed">
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-gray-800/40 p-4 rounded-xl shadow-sm"
              >
                🧩 <span className="font-semibold">All-in-One Dashboard</span> –
                Manage leads, customers, and tasks from a single place.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-gray-800/40 p-4 rounded-xl shadow-sm"
              >
                ⚡ <span className="font-semibold">Automated Workflows</span> –
                Save time with AI-driven task automation.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-gray-800/40 p-4 rounded-xl shadow-sm"
              >
                📊 <span className="font-semibold">Smart Analytics</span> –
                Track customer interactions, sales pipeline, and performance.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white/70  p-4 rounded-xl shadow-sm"
              >
                🔒 <span className="font-semibold">Secure & Scalable</span> –
                Enterprise-grade data security with growth-ready scalability.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white/70  p-4 rounded-xl shadow-sm"
              >
                🌐 <span className="font-semibold">Multi-Channel Support</span>{" "}
                – Email, chat, and calls, all integrated.
              </motion.li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/crmsoftware/crm-vision.png"
              alt="CRM Dashboard"
              width={500}
              height={400}
              className="rounded-2xl "
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            💡 To empower businesses to build stronger connections, close deals
            with confidence, and create customer relationships that last a
            lifetime.
          </p>
          <p className="mt-4 italic text-orange-500  text-xl font-medium">
            Because at the heart of every deal, every interaction, and every
            business—there’s a relationship. And relationships deserve smarter
            solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
