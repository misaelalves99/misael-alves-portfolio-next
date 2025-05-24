// app/components/ProjectCardAll.tsx

import styles from "./ProjectCardAll.module.css";
import { IconType } from "react-icons";

type ProjectCardAllProps = {
  project: {
    id: number;
    title: string;
    desc: string;
    icons: string[];
    demo: string;
    github: string;
    iconComponent: IconType;
  };
};

export default function ProjectCardAll({ project }: ProjectCardAllProps) {
  const Icon = project.iconComponent;

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <Icon size={64} color="#ff006f" />
      </div>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.links}>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub
        </a>
      </div>
    </div>
  );
}
