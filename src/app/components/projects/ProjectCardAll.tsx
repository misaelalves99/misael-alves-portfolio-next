// app/components/projects/ProjectCardAll.tsx

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCardAll.module.css";
import { ProjectAll } from "@/app/types/project";

export default function ProjectCardAll({ project }: { project: ProjectAll }) {
  const IconMain = project.iconComponent;

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <IconMain size={64} color="#ff006f" />
      </div>

      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.desc}>{project.desc}</p>

      {/* Ícones de tecnologias */}
      <div className={styles.techIcons}>
        {project.icons.map((TechIcon, index) => (
          <TechIcon key={index} size={22} className={styles.techIcon} />
        ))}
      </div>

      <div className={styles.links}>
        <Link href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Demo <FaExternalLinkAlt />
        </Link>
        <Link href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub <FaGithub />
        </Link>
      </div>
    </div>
  );
}
