import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);

    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        darkMode ? styles.dark : styles.light
      }`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" onClick={handleLogoClick}>
            Jonathan Åberg
          </a>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.buttons}>
          <button
            className={styles.themeToggle}
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
