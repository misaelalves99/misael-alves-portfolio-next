// app/components/experience/ExperienceHero.tsx

"use client";

import Image from "next/image";
import styles from "./ExperienceHero.module.css";
import ImgExp from "../../../../public/assets/img-experiencia.png";

export default function ExperienceHero() {
  return (
    <div className={styles.containerHeroExperience}>
      <div className={styles.experience}>
        <h1>Experiência</h1>
        <h2>
          Minha experiência prática está representada pelos projetos deste portfólio, com
          desenvolvimento de interfaces e aplicações front-end usando principalmente React,
          Next.js e TypeScript. Estou disponível para conversar sobre projetos e oportunidades
          em que essas competências possam gerar valor.
        </h2>
      </div>
      <div className={styles.experienceImg}>
        <Image src={ImgExp} alt="Experiência em desenvolvimento front-end" width={400} height={300} />
      </div>
    </div>
  );
}
