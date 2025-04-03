import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { cardProjects } from "../api/data";

export default function ProjectsPage() {
  return (
    <section className={styles.sectionProjects}>
      <div className={styles.containerHeroProjects}>
        <div className={styles.projects}>
          <h1>Meus Projetos</h1>
          <h2>Explorando novas tecnologias e inovações.</h2>
        </div>
      </div>

      <div className={styles.sectionItemProjects}>
        <div className={styles.containerProjects}>
          <div className={styles.projectsGrid}>
            {cardProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <Image src={project.img} alt={project.title} width={400} height={200} />
                </div>
                <div className={styles.projectInfo}>
                  <h2>{project.title}</h2>
                  <p>{project.desc}</p>
                  <div className={styles.projectTools}>
                    {[
                      project.icon1,
                      project.icon2,
                      project.icon3,
                      project.icon4,
                      project.icon5,
                    ]
                      .filter(Boolean) // Remove valores `undefined`
                      .map((icon, index) => (
                        <span key={index} className={styles.toolIcon}>{icon}</span>
                      ))}
                  </div>
                </div>
                <div className={styles.projectButtons}>
                  <Link href={project.demo} className={`${styles.btn} ${styles.btnDemo}`} target="_blank" rel="noopener noreferrer">
                    Demo <FaExternalLinkAlt />
                  </Link>
                  <Link href={project.github} className={`${styles.btn} ${styles.btnGithub}`} target="_blank" rel="noopener noreferrer">
                    GitHub <FaGithub />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
