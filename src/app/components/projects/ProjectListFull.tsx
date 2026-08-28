// app/components/projects/ProjectListFull.tsx

"use client";

import { useEffect, useState } from "react";
import { ProjectDataFull } from "../../types/project-data-full";
import { getProjectsFull } from "../../api/data/projects-full";
import ProjectCardFull from "./ProjectCardFull";
import styles from "./ProjectListFull.module.css";

interface ProjectListFullProps {
  selectedCategory: string;
}

const featuredProjectIds = new Set([15, 16, 20, 22]);

export default function ProjectListFull({ selectedCategory }: ProjectListFullProps) {
  const [projectsData, setProjectsData] = useState<ProjectDataFull[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjectsFull();
      setProjectsData(data);
    }

    fetchProjects();
  }, []);

  const filteredProjects = projectsData.filter(
    (project) => project.category === selectedCategory && featuredProjectIds.has(project.id)
  );

  return (
    <div className={styles.containerProjects}>
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <ProjectCardFull
            key={project.id}
            project={{
              ...project,
              icons: project.icons ?? [],
            }}
          />
        ))}
      </div>
    </div>
  );
}
