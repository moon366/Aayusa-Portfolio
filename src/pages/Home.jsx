// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "../components/Footer";

function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const isScrollingProgrammatically = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update active section during programmatic scroll
        if (isScrollingProgrammatically.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Only update URL hash if not at hero section or during normal scroll
            if (entry.target.id !== "hero") {
              window.location.hash = entry.target.id;
            } else {
              // Remove hash when at hero section
              window.history.replaceState(null, "", window.location.pathname + window.location.search);
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    
    sections.forEach((section) => observer.observe(section));
    
    // Add event listener to detect programmatic scroll end
    const handleScrollEnd = () => {
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 100);
    };
    
    window.addEventListener("scrollend", handleScrollEnd);
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  // Expose a method to set programmatic scrolling flag
  useEffect(() => {
    window.setProgrammaticScroll = (value) => {
      isScrollingProgrammatically.current = value;
    };
    
    return () => {
      delete window.setProgrammaticScroll;
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;