// app/components/header/Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "../../../../public/assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={100} height={50} />
          </Link>
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.desktopMenu}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Sobre</Link></li>
            <li><Link href="/skills">Habilidades</Link></li>
            <li><Link href="/experience">Experiência</Link></li>
            <li><Link href="/projects">Projetos</Link></li>
            <li><Link href="/contact">Contato</Link></li>
          </ul>

          <button className={`${styles.menuButton} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>

          <div className={`${styles.fullscreenMenu} ${isOpen ? styles.open : ""}`}>
            <ul className={styles.menuList}>
              <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/about" onClick={toggleMenu}>Sobre</Link></li>
              <li><Link href="/skills" onClick={toggleMenu}>Habilidades</Link></li>
              <li><Link href="/experience" onClick={toggleMenu}>Experiência</Link></li>
              <li><Link href="/projects" onClick={toggleMenu}>Projetos</Link></li>
              <li><Link href="/contact" onClick={toggleMenu}>Contato</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
