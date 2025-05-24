// app/projects/page.tsx

import styles from "./Projects.module.css";
import { cardProjects } from "../api/data";
import ProjectCard from "../components/ProjectCard";

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
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sectionItemProjects}>
        <div className={styles.containerProjects}>
          <div className={styles.projectsGrid}>
            {cardProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
