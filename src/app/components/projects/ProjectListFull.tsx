// src/components/projects/ProjectListFull.tsx

import { Project } from "../../types/project";
import ProjectCardFull from "./ProjectCardFull";
import styles from "./ProjectListFull.module.css";

interface ProjectListFullProps {
  projects: Project[];
}

export default function ProjectListFull({ projects }: ProjectListFullProps) {
  return (
    <div className={styles.containerProjects}>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCardFull
            key={project.id}
            project={{
              ...project,
              icons: project.icons ?? [],
            }}
          />
        ))}
      </div>
    </div>
  );
}
