// components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-cyan-400/20"
        >
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-300 uppercase mb-8">
              LET'S WORK <br /> TOGETHER
            </h2>

            <div className="mt-8 space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-cyan-400" />
                <span className="text-base">Nepal · Rupandehi, Butwal</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-cyan-400" />
                <a
                  href="mailto:aayusaneupane49@gmail.com"
                  className="hover:text-cyan-300 transition"
                >
                  aayusaneupane49@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 md:gap-6 mb-8">
              <a
                href="https://github.com/moon366"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/aayusa-neupane-445a1a351/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:aayusaneupane49@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <button className="group flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg text-sm font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-200">
                <Send size={18} />
                Get in touch
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;