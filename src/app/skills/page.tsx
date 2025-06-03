// src/skills/page.tsx

"use client";

import styles from "./SkillsPage.module.css";
import SkillsHero from "../components/skills/SkillsHero";
import LangsList from "../components/skills/LangsList";
import LibsList from "../components/skills/LibsList";
import ToolsList from "../components/skills/ToolsList";

export default function Skills() {
  return (
    <section className={styles.sectionSkills}>
      <SkillsHero />
      <section className={styles.sectionLanguages}>
        <LangsList />
        <LibsList />
        <ToolsList />
      </section>
    </section>
  );
}
