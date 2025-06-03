// app/components/projects/HeroProjects.tsx

"use client";

import Image from "next/image";
import styles from "./ProjectHero.module.css";
import ImgProj from "../../../../public/assets/img-projetos.png";

export default function HeroProjects() {
  return (
    <div className={styles.containerHeroProjects}>
      <div className={styles.projects}>
        <h1>Meus Projetos</h1>
        <h2>Explorando novas tecnologias e inovações.</h2>
      </div>
      <div className={styles.experienceImg}>
        <Image src={ImgProj} alt="Projetos" width={400} height={300} />
      </div>
    </div>
  );
}
