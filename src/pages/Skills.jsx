import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", symbol: "H" },
  { name: "CSS", symbol: "C" },
  { name: "JavaScript", symbol: "JS" },
  { name: "ReactJS", symbol: "⚛" },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({
    width: 0, height: 0, left: 0, top: 0, opacity: 0,
  });

  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  const updateHighlightPosition = useCallback((index) => {
    if (index === null || !cardRefs.current[index] || !containerRef.current) {
      setHighlightStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const card = cardRefs.current[index];
    const container = containerRef.current;
    const cardRect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // The "Big" Offset: adjust this to make highlight larger/smaller
    const OFFSET = 16; 

    setHighlightStyle({
      width: cardRect.width + OFFSET * 2,
      height: cardRect.height + OFFSET * 2,
      left: (cardRect.left - containerRect.left) - OFFSET,
      top: (cardRect.top - containerRect.top) - OFFSET,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    updateHighlightPosition(activeIndex);
  }, [activeIndex, updateHighlightPosition]);

  // FIXED: Corrected the resize listener method name
  useEffect(() => {
    const handleResize = () => updateHighlightPosition(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, updateHighlightPosition]);

  return (
    <section id="skills" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter text-gray-900 uppercase">
            [ Skills ]
          </h2>
       
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Large Floating Cyan Highlight */}
          <motion.div
            className="absolute pointer-events-none z-10"
            animate={{
              width: highlightStyle.width,
              height: highlightStyle.height,
              x: highlightStyle.left,
              y: highlightStyle.top,
              opacity: highlightStyle.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
              mass: 0.8,
            }}
            style={{
             backgroundColor: "rgba(0, 218, 245, 0.9)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.15)",
              backdropFilter: "blur(4px)",
              borderRadius: "1.5rem", 
            }}
          />

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-20 bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
              >
                <span className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {skill.symbol}
                </span>
                <p className="font-bold text-gray-800 tracking-tight">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;