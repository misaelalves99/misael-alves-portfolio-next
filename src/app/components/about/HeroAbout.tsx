// src/components/HeroAbout.tsx

"use client";

import styles from "./HeroAbout.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const perfilSrc = "/assets/img-perfil.png";

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
          Olá, meu nome é Misael Alves, moro em Teófilo Otoni-MG. Sou
          desenvolvedor front-end em React.js e Next.js e sou formado no curso de
          Análise e Desenvolvimento de Sistemas.
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
            <Image src={perfilSrc} alt="Foto de perfil" width={200} height={200} />
          </div>
          <div className={styles.socialMedia}>
            <Link href="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target='_blank'><FaLinkedinIn className={styles.iconSm} /></Link>
            <Link href="https://github.com/misaelalves99" target='_blank'><FaGithub className={styles.iconSm} /></Link>
            <Link href="https://www.instagram.com/misael_alves_99/" target='_blank'><FaInstagram className={styles.iconSm} /></Link>
            <Link href="https://www.facebook.com/misael.alves.92317/" target='_blank'><FaFacebookF className={styles.iconSm} /></Link>
            <Link href="https://x.com/MisaelAlves110" target='_blank'><FaTwitter className={styles.iconSm} /></Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
