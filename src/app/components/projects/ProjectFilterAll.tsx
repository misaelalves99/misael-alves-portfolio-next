// app/components/projects/ProjectsFilterAll.tsx

"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "./ProjectFilterAll.module.css";

interface ProjectsFilterAllProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const categories = ["react", "next", "vue"];

export default function ProjectsFilterAll({ selected, setSelected }: ProjectsFilterAllProps) {
  return (
    <div className={styles.filterButtons}>
      {categories.map((cat) => (
        <button
          key={`specific-${cat}`}
          onClick={() => setSelected(cat)}
          className={`${styles.filterBtn} ${selected === cat ? styles.active : ""}`}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
