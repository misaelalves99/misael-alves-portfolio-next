// src/experience/page.tsx

"use client";

import Image from "next/image";
import styles from "./Experience.module.css";
import ImgExp from "../../../public/assets/img-experiencia.png";

export default function Experience() {
  return (
    <div className={styles.containerHeroExperience}>
      <div className={styles.experience}>
        <h1>Experiência</h1>
        <h2>
          Procuro por oportunidades para demonstrar o meu valor e desempenho.
          Estou à disposição para vagas de estágio em Desenvolvimento Front-End
          em React.js.
        </h2>
      </div>
      <div className={styles.experienceImg}>
        <Image src={ImgExp} alt="Experiência" width={400} height={300} />
      </div>
    </div>
  );
}
