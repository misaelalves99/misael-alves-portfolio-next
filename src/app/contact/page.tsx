// src/app/contact/page.tsx

"use client";

import styles from "./ContactPage.module.css";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <section className={styles.sectionContact}>
      <ContactHero />
      <ContactForm />
    </section>
  );
}
