import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSection } from "../context/SectionContext";
import "../styles/home.css";

const sections = [
  {
    id: "home",
    title: "Välkommen",
    description: "Scrolla för att upptäcka mer om mig och mina projekt.",
  },
  {
    id: "about",
    title: "Om mig",
    description: "Lite kort om mig och mina intressen.",
  },
  {
    id: "projects",
    title: "Projekt",
    description: "Detaljer om mina projekt.",
  },
  {
    id: "contact",
    title: "Kontakt",
    description: "Hur du enklast når mig.",
  },
];

export default function Home() {
  const { currentSection, setCurrentSection } = useSection();
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const lastScrollTime = useRef(0);
  const scrollThreshold = 40; // Adjust this value to change scroll sensitivity
  const scrollCooldown = 200; // Milliseconds to wait before allowing next scroll

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      const currentTime = Date.now();
      if (currentTime - lastScrollTime.current < scrollCooldown) {
        return;
      }

      // Only trigger scroll if the delta is significant enough
      if (Math.abs(e.deltaY) < scrollThreshold) {
        return;
      }

      lastScrollTime.current = currentTime;
      const newDirection = e.deltaY > 0 ? 1 : -1;
      setDirection(newDirection);

      if (newDirection > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (newDirection < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }
    };

    const handleNavClick = (e) => {
      const { targetSection } = e.detail;
      if (targetSection === currentSection) return;

      const direction = targetSection > currentSection ? 1 : -1;
      setDirection(direction);
      setCurrentSection(targetSection);
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("continuousScroll", handleNavClick);

    return () => {
      container?.removeEventListener("wheel", handleWheel);
      window.removeEventListener("continuousScroll", handleNavClick);
    };
  }, [currentSection, setCurrentSection]);

  return (
    <div ref={containerRef} className="fullscreen-container">
      <AnimatePresence mode="wait">
        <motion.section
          key={currentSection}
          initial={{ y: "100%", opacity: 0 }} // Always enter from bottom
          animate={{ y: 0, opacity: 1 }} // Center position
          exit={{ y: "100%", opacity: 0 }} // Always exit to bottom
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="fullscreen-section"
        >
          <h2>{sections[currentSection].title}</h2>
          <p>{sections[currentSection].description}</p>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
