import { motion } from "framer-motion";

export default function MobileAppSection() {
  return (
    <div className=" text-gray-900  py-16 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-full mx-10 text-center"
      >
        <h2 className="text-2xl md:text-4xl lg:text-7xl font-semibold leading-snug text-left">
          We Craft Interfaces That People Love to Use.
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-gray-900 text-2xl md:text-5xl font-bold mb-2">
              Top Quality
            </h3>
            <p className="text-xl font-medium mb-2">Modern App Solutions</p>
            <p className="text-gray-700">
              From idea to launch, we craft apps with precision, creativity, and
              cutting-edge technology.
            </p>
          </div>

          <div className="border-l border-white/20 pl-6">
            <h3 className="text-gray-900 text-2xl md:text-5xl font-bold mb-2">
              92%
            </h3>
            <p className="text-xl font-medium mb-2">Proven Success Rate</p>
            <p className="text-gray-700">
              Our mobile solutions have consistently delivered measurable
              results and higher engagement.
            </p>
          </div>

          <div className="border-l border-white/20 pl-6">
            <h3 className="text-gray-900 text-2xl md:text-5xl font-bold mb-2">
              Trusted
            </h3>
            <p className="text-xl font-medium mb-2">By Businesses Worldwide</p>
            <p className="text-gray-700">
              We partner with startups and entenrprises alike, creating apps
              that users love.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
