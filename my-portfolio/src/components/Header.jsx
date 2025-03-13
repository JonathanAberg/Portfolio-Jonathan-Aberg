import React from "react";
import { useSection } from "../context/SectionContext";
import { motion } from "framer-motion";
import "../styles/header.css";

const Header = () => {
  const { currentSection, setCurrentSection } = useSection();

  const handleNavClick = (targetSection, e) => {
    e.preventDefault();
    const direction = targetSection > currentSection ? 1 : -1;

    window.dispatchEvent(
      new CustomEvent("continuousScroll", {
        detail: { targetSection, direction },
      })
    );
  };

  return (
    <motion.header
      className={`header ${
        currentSection === 0 ? "header--bottom" : "header--top"
      }`}
      initial={false}
      animate={{
        y: 0,
        top: currentSection === 0 ? "auto" : 0,
        bottom: currentSection === 0 ? 0 : "auto",
      }}
      transition={{ duration: 0.5 }}
    >
      <nav className="header-tabs">
        <div className="header-tabs-container">
          {[
            { id: 0, title: "Hem" },
            { id: 1, title: "Om" },
            { id: 2, title: "Projekt" },
            { id: 3, title: "Kontakt" },
          ].map(({ id, title }) => (
            <a
              key={id}
              href={`#${title.toLowerCase()}`}
              onClick={(e) => handleNavClick(id, e)}
              className={`header-tab ${currentSection === id ? "active" : ""}`}
            >
              {title}
            </a>
          ))}
          <motion.span
            className="header-tab-slider"
            animate={{
              left: `${currentSection * 25}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
