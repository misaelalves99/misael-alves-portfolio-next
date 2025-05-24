// app/projects/page.tsx
"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import { cardProjects } from "../api/data/projects";
import { cardProjectsAll } from "../api/data/projects-all";
import ProjectCard from "../components/ProjectCard";
import ProjectCardAll from "../components/ProjectCardAll";
import { FaTasks } from "react-icons/fa";

// Categorias disponíveis
const categories = ["todos", "react", "next", "vue"];

export default function ProjectsPage() {
  // Filtro separado para cada seção
  const [selectedCategoryComplete, setSelectedCategoryComplete] = useState("todos");
  const [selectedCategorySpecific, setSelectedCategorySpecific] = useState("todos");

  const filteredCompleteProjects =
    selectedCategoryComplete === "todos"
      ? cardProjects
      : cardProjects.filter((project) => project.category === selectedCategoryComplete);

  const filteredSpecificProjects =
    selectedCategorySpecific === "todos"
      ? cardProjectsAll
      : cardProjectsAll.filter((project) => project.category === selectedCategorySpecific);

  return (
    <section className={styles.sectionProjects}>
      {/* Hero */}
      <div className={styles.containerHeroProjects}>
        <div className={styles.projects}>
          <h1>Meus Projetos</h1>
          <h2>Explorando novas tecnologias e inovações.</h2>
        </div>
        <div className={styles.projectsImg}>
          <FaTasks className={styles.heroIcon} />
        </div>
      </div>

      {/* Projetos Completos */}
      <div className={styles.sectionItemProjects}>
        <h3 className={styles.sectionTitle}>Projetos Completos</h3>

        {/* Botões de Categoria para Projetos Completos */}
        <div className={styles.filterButtons}>
          {categories.map((cat) => (
            <button
              key={`complete-${cat}`}
              onClick={() => setSelectedCategoryComplete(cat)}
              className={`${styles.filterBtn} ${
                selectedCategoryComplete === cat ? styles.active : ""
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className={styles.containerProjects}>
          <div className={styles.projectsGrid}>
            {filteredCompleteProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Projetos Específicos */}
      <div className={styles.sectionItemProjects}>
        <h3 className={styles.sectionTitle}>Projetos Específicos</h3>

        {/* Botões de Categoria para Projetos Específicos */}
        <div className={styles.filterButtons}>
          {categories.map((cat) => (
            <button
              key={`specific-${cat}`}
              onClick={() => setSelectedCategorySpecific(cat)}
              className={`${styles.filterBtn} ${
                selectedCategorySpecific === cat ? styles.active : ""
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className={styles.containerProjects}>
          <div className={styles.projectsGrid}>
            {filteredSpecificProjects.map((project) => (
              <ProjectCardAll key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
