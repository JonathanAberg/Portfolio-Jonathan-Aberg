import React from "react";
import { useSection } from "../context/SectionContext";
import "../styles/footer.css";

const Footer = () => {
  const { currentSection } = useSection();
  return (
    <footer
      className={`footer ${currentSection === 0 ? "footer--hidden" : ""}`}
    >
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Jonathan Åberg
        </p>
        <div className="footer-social">
          <a
            href="https://github.com/JonathanAberg"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/jonathan-åberg-a81513211"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
