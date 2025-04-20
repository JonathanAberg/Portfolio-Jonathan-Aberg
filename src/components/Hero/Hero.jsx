import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hello, I'm <span className={styles.highlight}>Jonathan Åberg</span>
          </h1>
          <h2 className={styles.subtitle}>Frontend Developer</h2>
          <p className={styles.description}>
            I build modern, responsive websites and applications with a focus on
            clean code and user experience.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
      </div>
    </section>
  );
};

export default Hero;
