"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import { cardProjectsFull } from "../api/data/projects-full";
import { cardProjectsAll } from "../api/data/projects-all";
import ProjectCard from "../components/ProjectCardFull";
import ProjectCardAll from "../components/ProjectCardAll";
import { FaTasks } from "react-icons/fa";

// Categorias disponíveis (sem "todos")
const categories = ["react", "next", "vue"];

export default function ProjectsPage() {
  // Categoria padrão: "react"
  const [selectedCategoryComplete, setSelectedCategoryComplete] = useState("react");
  const [selectedCategorySpecific, setSelectedCategorySpecific] = useState("react");

  // Filtragem sem "todos"
  const filteredCompleteProjects = cardProjectsFull.filter(
    (project) => project.category === selectedCategoryComplete
  );

  const filteredSpecificProjects = cardProjectsAll.filter(
    (project) => project.category === selectedCategorySpecific
  );

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
