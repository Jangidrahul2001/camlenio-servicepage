"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMicrosoft } from "react-icons/fa";
import { MdAttachment } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function ContactUs() {
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaValid, setCaptchaValid] = useState(true);

  const validateCaptcha = () => {
    if (captchaAnswer.trim() === "15") {
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
    }
  };

  return (
    <>
      <div className="relative max-w-[85rem] mx-auto px-6 py-16  ">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-4">
            Interested In Working With Us?
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Let’s Talk and Get Started
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12 overflow-visible">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 1.01 }}
            whileHover={{
              scale: 1.01,
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="flex-1 bg-gray-800 text-white rounded-2xl p-8 space-y-6 hover:shadow-xl z-20"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Let’s Build Something Amazing Together
            </h3>
            <p className="text-orange-400 text-sm uppercase tracking-widest">
              Get in Touch With Camlenio — We’re Just a Message Away
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-gray-700 to-transparent p-4 rounded-lg flex items-center gap-4">
                <FaEnvelope className="text-orange-500 text-xl" />
                <div>
                  <p className="text-gray-100 text-xs">MAIL TO OUR SALES</p>
                  <p>business@camelnio.com</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-700 to-transparent p-4 rounded-lg flex items-center gap-4">
                <FaMicrosoft className="text-orange-500 text-xl" />
                <div>
                  <p className="text-gray-100 text-xs">OUR TEAMS ID</p>
                  <p>info@camlenio.com</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-700 to-transparent p-4 rounded-lg flex items-center gap-4">
                <FaPhoneAlt className="text-orange-500 text-xl" />
                <div>
                  <p className="text-gray-100 text-xs">CALL SALES</p>
                  <p>+91 97733 23811</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex gap-4 mt-6 flex-col">
                <div className="bg-gradient-to-r from-gray-700 to-transparent px-4 py-2 rounded-xl text-center">
                  <p className="text-sm font-bold">5 Mins</p>
                  <p className="text-xs text-gray-300">Response Time</p>
                </div>
                <div className="bg-gradient-to-r from-gray-700 to-transparent px-4 py-2 rounded-xl text-center">
                  <p className="text-sm font-bold">99%</p>
                  <p className="text-xs text-gray-300">Client Satisfaction</p>
                </div>
              </div>
              <ul className="text-xs md:text-sm mt-6 space-y-2 flex flex-col justify-center">
                <li>✔️ On-call inquiry assistance</li>
                <li>✔️ Project consulting by experts</li>
                <li>✔️ Detailed project estimation</li>
              </ul>
            </div>
          </motion.div>
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              validateCaptcha();
            }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{
              scale: 1.01,
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 bg-transparent border-1 border-orange-100 rounded-2xl p-8 space-y-4 hover:shadow-xl z-20 "
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-950">
              For Project Inquiries
            </h3>
            <p className="text-sm text-gray-800">
              From conceptualization to deployment — we stand with you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="input-style border rounded border-orange-300 placeholder-gray-500"
                required
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="input-style border rounded border-gray-300 placeholder-gray-500"
                required
              />
              <div className="flex items-center gap-2">
                <span className="border rounded border-gray-300 px-2 py-2 placeholder-gray-500">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="input-style flex-1 border rounded border-gray-300 placeholder-gray-500"
                />
              </div>
              <select className="input-style border rounded border-gray-300 text-gray-500 ">
                <option className="bg-gray-100">Interested In</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>UI/UX Design</option>
              </select>
            </div>

            <textarea
              rows={4}
              placeholder="Message*"
              className="input-style w-full border rounded border-gray-300 placeholder-gray-500"
              required
            />

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <label className="flex items-center gap-2 cursor-pointer border border-dashed rounded-lg px-4 py-2 w-full md:w-auto text-gray-600">
                <MdAttachment /> Attachment
                <input type="file" className="hidden" />
              </label>

              <div className="flex items-center gap-2 w-full md:w-auto text-gray-500">
                <span>10 + 5 =</span>
                <input
                  type="text"
                  placeholder="Value"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  className="input-style w-24"
                />
              </div>
            </div>
            {!captchaValid && (
              <p className="text-red-500 text-sm">
                Captcha answer is incorrect.
              </p>
            )}

            <div className="text-sm space-y-2 mt-4 flex flex-col text-gray-500">
              <label>
                <input type="radio" name="schedule" /> Ready for a GMeet Call
                Discussion Today / Tomorrow
              </label>
              <label>
                <input type="radio" name="schedule" /> Available on a Phone Call
                Discussion Today / Tomorrow
              </label>
              <label>
                <input type="radio" name="schedule" /> Send me a Calendar to
                Book The Meeting
              </label>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="mt-6 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                SEND <IoIosArrowForward />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
}
