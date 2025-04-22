import { useEffect, useRef } from "react";
import styles from "./About.module.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import profilePicture from "/Profilbild.png"; // Updated to use absolute path from public folder

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = contentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.content} ref={contentRef}>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <img src={profilePicture} alt="Profile" />
            </div>
          </div>

          <div className={styles.text}>
            <p>
              Hi there! I'm a passionate frontend developer with a keen eye for
              design and a love for creating intuitive user interfaces. I
              specialize in building modern, responsive websites and
              applications.
            </p>
            <p>
              With a background in design and development, but also as a network
              technician, I bring a unique perspective to every project. I'm
              constantly learning and exploring new technologies to stay at the
              forefront of web development.
            </p>

            <div className={styles.skills}>
              <h3>My Skills</h3>
              <div className={styles.skillsList}>
                <div className={styles.skill}>
                  <FaReact /> React
                </div>
                <div className={styles.skill}>
                  <FaJs /> JavaScript
                </div>
                <div className={styles.skill}>
                  <FaHtml5 /> HTML5
                </div>
                <div className={styles.skill}>
                  <FaCss3Alt /> CSS3
                </div>
                <div className={styles.skill}>
                  <FaGitAlt /> Git
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
