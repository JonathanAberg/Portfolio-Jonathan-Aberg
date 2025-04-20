import styles from "./Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A modern dashboard for e-commerce stores with analytics, inventory management, and order processing capabilities.",
    tags: ["React", "Redux", "Node.js", "Chart.js"],
    image: "project1.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A clean and intuitive weather application that shows current weather and forecasts for locations worldwide.",
    tags: ["JavaScript", "API", "CSS", "Responsive Design"],
    image: "project2.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Task Management Tool",
    description:
      "A collaborative task management application with real-time updates, notifications, and team assignment features.",
    tags: ["React", "Firebase", "Material UI", "Authentication"],
    image: "project3.jpg",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                {/* Replace with actual images */}
                <div className={styles.placeholder}>
                  <span>{project.title}</span>
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.github}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
