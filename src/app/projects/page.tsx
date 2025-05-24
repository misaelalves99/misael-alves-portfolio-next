import styles from "./Projects.module.css";
import { cardProjects } from "../api/data/projects";
import { cardProjectsAll } from "../api/data/projects-all";
import ProjectCard from "../components/ProjectCard";
import ProjectCardAll from "../components/ProjectCardAll";
import { FaTasks } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <section className={styles.sectionProjects}>
      <div className={styles.containerHeroProjects}>
        <div className={styles.projects}>
          <h1>Meus Projetos</h1>
          <h2>Explorando novas tecnologias e inovações.</h2>
        </div>
        <div className={styles.projectsImg}>
          <FaTasks className={styles.heroIcon} />
        </div>
      </div>

      {/* Projetos Completos */}
      <div className={styles.sectionItemProjects}>
        <h3 className={styles.sectionTitle}>Projetos Completos</h3>
        <div className={styles.containerProjects}>
          <div className={styles.projectsGrid}>
            {cardProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Projetos Específicos */}
      <div className={styles.sectionItemProjects}>
        <h3 className={styles.sectionTitle}>Projetos Específicos</h3>
        <div className={styles.containerProjects}>
          <div className={styles.projectsGrid}>
            {cardProjectsAll.map((project) => (
              <ProjectCardAll key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
