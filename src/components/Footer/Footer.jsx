import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <h3>Jonathan Åberg</h3>
            <p>Frontend Developer</p>
          </div>

          <div className={styles.links}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.social}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              <FaDribbble />
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} Jonathan Åberg. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
