// app/components/contact/ContactHero.tsx

"use client";

import Image from "next/image";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <div className={styles.containerHeroContact}>
      <div className={styles.contact}>
        <h1>Entre em Contato</h1>
        <h2>Fale comigo!</h2>
      </div>

      <div className={styles.contactImg}>
        <Image src="/assets/img-contato.png" alt="Contato" width={400} height={300} />
      </div>
    </div>
  );
}
