// app/components/projects/ProjectsFilterFull.tsx

"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "./ProjectFilterFull.module.css";

interface ProjectsFilterFullProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const categories = ["react", "next", "angular", "asp.net", "laravel"];

export default function ProjectsFilterFull({ selected, setSelected }: ProjectsFilterFullProps) {
  return (
    <div className={styles.filterButtons}>
      {categories.map((cat) => (
        <button
          key={`complete-${cat}`}
          onClick={() => setSelected(cat)}
          className={`${styles.filterBtn} ${selected === cat ? styles.active : ""}`}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
