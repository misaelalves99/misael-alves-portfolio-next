// app/components/home/HomeHero.tsx

"use client";

import styles from "./HomeHero.module.css";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Perfil from "../../../../public/assets/img-perfil.png";
import Typical from "react-typical";

export default function HomeHero() {
  return (
    <div className={styles.containerHero}>
      <div className={styles.presentation}>
        <h1><strong>Olá, sou Misael Alves</strong></h1>
        <br />
        <h2 className={styles.desc}>
          Desenvolvedor React/Next.js + TypeScript focado em interfaces web profissionais, responsivas e soluções de complexidade controlada.
        </h2>
        <h2 className={styles.typical}>
          <Typical
            loop={Infinity}
            steps={["React.js", 3000, "Next.js", 3000, "TypeScript", 3000]}
          />
        </h2>
        <br />
        <Link href="/contact">
          <button className={styles.styledButton}>
            Fale comigo
          </button>
        </Link>
      </div>

      <div className={styles.contactSocial}>
        <div className={styles.homeProfile}>
          <Image src={Perfil} alt="Foto de perfil de Misael Alves" width={200} height={200} />
        </div>
        <div className={styles.socialMedia}>
          <Link href="https://www.linkedin.com/in/misaelalves/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Misael Alves">
            <FaLinkedinIn className={styles.iconSm} />
          </Link>
          <Link href="https://github.com/misaelalves99" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Misael Alves">
            <FaGithub className={styles.iconSm} />
          </Link>
          <Link href="https://www.instagram.com/misael_alves_99/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Misael Alves">
            <FaInstagram className={styles.iconSm} />
          </Link>
          <Link href="https://www.facebook.com/misael.alves.92317/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Misael Alves">
            <FaFacebookF className={styles.iconSm} />
          </Link>
          <Link href="https://x.com/MisaelAlves110" target="_blank" rel="noopener noreferrer" aria-label="X de Misael Alves">
            <FaTwitter className={styles.iconSm} />
          </Link>
        </div>
      </div>
    </div>
  );
}
