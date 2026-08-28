// app/projects/page.tsx

import styles from "./ProjectsPage.module.css";
import HeroProjects from "../components/projects/ProjectHero";
import ProjectListFull from "../components/projects/ProjectListFull";

export default function ProjectsPage() {
  return (
    <section className={styles.sectionProjects}>
      <HeroProjects />

      <div className={styles.sectionItemProjects}>
        <h3 className={styles.sectionTitle}>Projetos em destaque</h3>
        <ProjectListFull selectedCategory="next" />
      </div>
    </section>
  );
}
