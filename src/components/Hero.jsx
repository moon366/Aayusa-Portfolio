import React from "react";
import { motion } from "framer-motion";
// import heroImage from "../assets/hero.jpg";
import heroImage from "../assets/me/6.jpg";

const Hero = () => {
  const seamlessMorph = [
    "30% 70% 70% 30% / 30% 30% 70% 70%",
    "50% 20% 60% 40% / 50% 20% 60% 40%",
    "40% 30% 30% 70% / 40% 30% 30% 70%",
    "60% 40% 50% 50% / 50% 60% 40% 50%",
    "35% 65% 75% 25% / 25% 35% 65% 75%",
    "45% 55% 55% 45% / 55% 45% 45% 55%",
    "30% 70% 70% 30% / 30% 30% 70% 70%",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 pb-20 flex flex-col items-center justify-center bg-slate-900 text-white overflow-hidden bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black"
    >
      {/* Top - Image Container */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 mb-12">
        {/* Glow background - Matches the morphing shape */}
        <motion.div
          animate={{ borderRadius: seamlessMorph }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-20"
        />

        {/* Main Morphing Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, borderRadius: seamlessMorph }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_50px_-12px_rgba(34,211,238,0.3)] w-full h-full bg-slate-800"
        >
          <motion.img
            src={heroImage}
            alt="Aayusa Nyaupane"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
      </div>

      {/* Bottom - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-center px-6"
      >
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight mb-2 bg-linear-to-r from-white via-cyan-200 to-slate-400 bg-clip-text text-transparent"
          style={{ fontFamily: "'Playfair Display', serif" }} // Updated to match your link tag
        >
          Aayusa Nyaupane
        </h1>

        <h2 className="text-xl md:text-3xl font-light tracking-[0.2em] text-cyan-400 uppercase mb-6">
          Frontend Developer
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic">
            "Transforming ideas into interactive, responsive, and visually
            appealing web applications."
          </p>
          {/* Subtle Decorative Line */}
          <div className="mt-6 w-24 h-1 bg-cyan-500/50 mx-auto rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
