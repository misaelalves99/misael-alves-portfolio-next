// src/components/home/HomeHero.tsx

"use client";

import styles from "./HomeHero.module.css";
import Link from "next/link";
import { GrDocumentText } from "react-icons/gr";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Perfil from "../../../../public/assets/img-perfil.png";
import Typical from "react-typical";

const Curriculo = "/assets/curriculo-cv.pdf";

export default function HomeHero() {
  return (
    <div className={styles.containerHero}>
      <div className={styles.presentation}>
        <h1><strong>Olá, sou Misael Alves</strong></h1>
        <br />
        <h2 className={styles.desc}>Desenvolvedor front-end buscando oportunidade de estágio.</h2>
        <h2 className={styles.typical}>
          <Typical
            loop={Infinity}
            steps={['React.js', 3000, 'Next.js', 3000, 'Vue.js', 3000, 'Tailwind CSS', 3000]}
          />
        </h2>
        <br />
        <Link href={Curriculo} target="_blank" rel="noopener noreferrer">
          <button className={styles.styledButton}>
            <GrDocumentText className={styles.iconDoc} />
            Download CV
          </button>
        </Link>
      </div>

      <div className={styles.contactSocial}>
        <div className={styles.homeProfile}>
          <Image src={Perfil} alt="Foto de perfil" width={200} height={200} />
        </div>
        <div className={styles.socialMedia}>
          <Link href="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target="_blank">
            <FaLinkedinIn className={styles.iconSm} />
          </Link>
          <Link href="https://github.com/misaelalves99" target="_blank">
            <FaGithub className={styles.iconSm} />
          </Link>
          <Link href="https://www.instagram.com/misael_alves_99/" target="_blank">
            <FaInstagram className={styles.iconSm} />
          </Link>
          <Link href="https://www.facebook.com/misael.alves.92317/" target="_blank">
            <FaFacebookF className={styles.iconSm} />
          </Link>
          <Link href="https://x.com/MisaelAlves110" target="_blank">
            <FaTwitter className={styles.iconSm} />
          </Link>
        </div>
      </div>
    </div>
  );
}
