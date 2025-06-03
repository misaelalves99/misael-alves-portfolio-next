// app/components/projects/ProjectListAll.tsx

"use client";

import { useEffect, useState } from "react";
import ProjectCardAll from "./ProjectCardAll";
import styles from "./ProjectListAll.module.css";
import { getProjectsAll } from "@/app/api/data/projects-all";
import type { ProjectWithIcons } from "@/app/types/project";

interface ProjectListAllProps {
  selectedCategory: string;
}

export default function ProjectListAll({ selectedCategory }: ProjectListAllProps) {
  const [projectsData, setProjectsData] = useState<ProjectWithIcons[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjectsAll();
      setProjectsData(data);
    };

    fetchProjects();
  }, []);

  const filteredProjects = projectsData.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <div className={styles.containerProjects}>
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <ProjectCardAll key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
