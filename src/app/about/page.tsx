// src/about/page.tsx

"use client";

import styles from "./About.module.css";
import { motion } from "framer-motion";
import HeroAbout from "../components/about/AboutHero";
import FormationList from "../components/about/FormationList";
import CertificationList from "../components/about/CertificationList";

export default function About() {
  return (
    <section className={styles.sectionAboutMe}>
      <HeroAbout />
      <div className={styles.education}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={styles.containerEducation}
        >
          <div className={styles.educationTitle}>
            <h1>Educação</h1>
            <h2>Formação Acadêmica</h2>
          </div>

          <FormationList />
          <CertificationList />
        </motion.div>
      </div>
    </section>
  );
}
