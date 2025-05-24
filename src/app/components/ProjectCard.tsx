// app/components/ProjectCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCard.module.css";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const icons = [project.icon1, project.icon2, project.icon3, project.icon4, project.icon5].filter(Boolean);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={project.img} alt={project.title} width={240} height={120} className={styles.image} />
      </div>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <span key={index} className={styles.icon}>{icon}</span>
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
