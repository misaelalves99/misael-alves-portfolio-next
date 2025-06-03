// app/components/skills/SkillsHero.tsx

import Image from "next/image";
import ImgHab from "../../../../public/assets/img-habilidades.png";
import styles from "./SkillsHero.module.css";

export default function SkillsHero() {
  return (
    <div className={styles.containerHeroSkills}>
      <div className={styles.skills}>
        <h1>Habilidades</h1>
        <h2>Essas são as minhas habilidades como desenvolvedor front-end.</h2>
      </div>
      <div className={styles.skillsImg}>
        <Image src={ImgHab} alt="Habilidades" width={400} height={300} />
      </div>
    </div>
  );
}
