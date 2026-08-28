// app/components/about/HeroAbout.tsx

"use client";

import styles from "./AboutHero.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Perfil from "../../../../public/assets/img-perfil.png";

export default function HeroAbout() {
  return (
    <div className={styles.containerHeroAbout}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className={styles.aboutMe}
      >
        <h1>Sobre mim</h1>
        <h2>
          Olá, meu nome é Misael Alves. Sou desenvolvedor front-end com foco em React.js,
          Next.js e TypeScript e formado em Análise e Desenvolvimento de Sistemas. Desenvolvo
          interfaces web responsivas e soluções de complexidade controlada, priorizando clareza,
          organização e uma experiência consistente para o usuário.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className={styles.aboutMeProfile}
      >
        <div className={styles.contactSocial}>
          <div className={styles.homeProfile}>
            <Image src={Perfil} alt="Foto de perfil de Misael Alves" width={200} height={200} />
          </div>
          <div className={styles.socialMedia}>
            <Link href="https://www.linkedin.com/in/misaelalves/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Misael Alves"><FaLinkedinIn className={styles.iconSm} /></Link>
            <Link href="https://github.com/misaelalves99" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Misael Alves"><FaGithub className={styles.iconSm} /></Link>
            <Link href="https://www.instagram.com/misael_alves_99/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Misael Alves"><FaInstagram className={styles.iconSm} /></Link>
            <Link href="https://www.facebook.com/misael.alves.92317/" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Misael Alves"><FaFacebookF className={styles.iconSm} /></Link>
            <Link href="https://x.com/MisaelAlves110" target="_blank" rel="noopener noreferrer" aria-label="X de Misael Alves"><FaTwitter className={styles.iconSm} /></Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
