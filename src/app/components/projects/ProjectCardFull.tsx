// app/components/projects/ProjectCardFull.tsx

"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCardFull.module.css";
import { IconType } from "react-icons";

type ProjectCardFullProps = {
  project: {
    id: number;
    title: string;
    desc: string;
    img: string | StaticImageData;
    icons: IconType[];
    demo: string;
    github: string;
  };
};

export default function ProjectCard({ project }: ProjectCardFullProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.img}
          alt={project.title}
          width={240}
          height={120}
          className={styles.image}
        />
      </div>

      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.desc}>{project.desc}</p>

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
