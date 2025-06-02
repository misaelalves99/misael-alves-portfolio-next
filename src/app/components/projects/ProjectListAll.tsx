// src/components/projects/ProjectListAll.tsx

import { IconType } from "react-icons";
import ProjectCardAll from "./ProjectCardAll";
import styles from "./ProjectListAll.module.css";

type ProjectWithIcons = {
  id: number;
  title: string;
  desc: string;
  icons: IconType[];
  demo: string;
  github: string;
  iconComponent: IconType;
  category: string;
};

interface ProjectListAllProps {
  projects: ProjectWithIcons[];
}

export default function ProjectListAll({ projects }: ProjectListAllProps) {
  return (
    <div className={styles.containerProjects}>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCardAll key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
