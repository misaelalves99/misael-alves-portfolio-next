// app/projects/page.tsx

"use client";

import { useState } from "react";
import styles from "./ProjectsPage.module.css";
import HeroProjects from "../components/projects/ProjectHero";
import ProjectsFilterFull from "../components/projects/ProjectFilterFull";
import ProjectsFilterAll from "../components/projects/ProjectFilterAll";
import ProjectListFull from "../components/projects/ProjectListFull";
import ProjectListAll from "../components/projects/ProjectListAll";

export default function ProjectsPage() {
  const [selectedCategoryComplete, setSelectedCategoryComplete] = useState("react");
  const [selectedCategorySpecific, setSelectedCategorySpecific] = useState("react");

  return (
    <section className={styles.sectionProjects}>
      <HeroProjects />

      {/* Projetos Completos */}
      <div className={styles.sectionItemProjects}>
        <h3 className={styles.sectionTitle}>Projetos Completos</h3>
        <ProjectsFilterFull
          selected={selectedCategoryComplete}
          setSelected={setSelectedCategoryComplete}
        />
        <ProjectListFull selectedCategory={selectedCategoryComplete} />
      </div>

      {/* Projetos Específicos */}
      <div className={styles.sectionItemProjects}>
        <h3 className={styles.sectionTitle}>Projetos Específicos</h3>
        <ProjectsFilterAll
          selected={selectedCategorySpecific}
          setSelected={setSelectedCategorySpecific}
        />
        <ProjectListAll selectedCategory={selectedCategorySpecific} />
      </div>
    </section>
  );
}
