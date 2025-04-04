// src/skills/page.tsx

"use client";

import Image from "next/image";
import styles from "./Skills.module.css";
import ImgHab from "../../../public/assets/img-habilidades.png";
import { FaHtml5, FaCss3Alt, FaReact, FaNpm, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    <section className={styles.sectionSkills}>
      <div className={styles.containerHeroSkills}>
        <div className={styles.skills}>
          <h1>Habilidades</h1>
          <h2>Essas são as minhas habilidades como desenvolvedor front-end.</h2>
        </div>
        <div className={styles.skillsImg}>
          <Image src={ImgHab} alt="Habilidades" width={400} height={300} />
        </div>
      </div>

      {/* Linguagens */}
      <section className={styles.sectionLanguages}>
        <div className={styles.containerLanguages}>
          <div className={styles.langTitle}>
            <h2>Linguagens</h2>
          </div>
          <div className={styles.languagesItems}>
            <div className={styles.itemLanguages}>
              <FaHtml5 className={styles.iconLanguages} />
            </div>
            <div className={styles.itemLanguages}>
              <FaCss3Alt className={styles.iconLanguages} />
            </div>
            <div className={styles.itemLanguages}>
              <IoLogoJavascript className={styles.iconLanguages} />
            </div>
            <div className={styles.itemLanguages}>
              <BiLogoTypescript className={styles.iconLanguages} />
            </div>
          </div>
        </div>

        {/* Bibliotecas e Frameworks */}
        <div className={styles.containerLibraries}>
          <div className={styles.librTitle}>
            <h2>Bibliotecas e Frameworks</h2>
          </div>
          <div className={styles.librariesItems}>
            <div className={styles.itemLibraries}>
              <FaReact className={styles.iconLibraries} />
            </div>
            <div className={styles.itemLibraries}>
              <SiNextdotjs className={styles.iconLibraries} />
            </div>
            <div className={styles.itemLibraries}>
              <RiTailwindCssLine className={styles.iconLibraries} />
            </div>
            <div className={styles.itemLibraries}>
              <FaNpm className={styles.iconLibraries} />
            </div>
            <div className={styles.itemLibraries}>
              <SiReactrouter className={styles.iconLibraries} />
            </div>
          </div>
        </div>

        {/* Ferramentas e Plataformas */}
        <div className={styles.containerTools}>
          <div className={styles.toolsTitle}>
            <h2>Ferramentas e Plataformas</h2>
          </div>
          <div className={styles.toolsItems}>
            <div className={styles.itemTools}>
              <VscVscode className={styles.iconTools} />
            </div>
            <div className={styles.itemTools}>
              <DiIllustrator className={styles.iconTools} />
            </div>
            <div className={styles.itemTools}>
              <FaFigma className={styles.iconTools} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}