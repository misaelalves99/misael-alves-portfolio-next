// app/components/ProjectCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "../projects/Projects.module.css";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const icons = [project.icon1, project.icon2, project.icon3, project.icon4, project.icon5].filter(Boolean);

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image src={project.img} alt={project.title} width={400} height={200} />
      </div>
      <div className={styles.projectInfo}>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <div className={styles.projectTools}>
          {icons.map((icon, index) => (
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
  );
}
