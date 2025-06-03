// app/components/skills/LibsList.tsx

// app/components/skills/LibsList.tsx

"use client";

import { useEffect, useState } from "react";
import { getSkillsLibs } from "@/app/api/data/skills-libs";
import SkillIcon from "./SkillIcon";
import styles from "./LibsList.module.css";

type SkillItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

export default function LibsList() {
  const [libs, setLibs] = useState<SkillItem[]>([]);

  useEffect(() => {
    const fetchLibs = async () => {
      const data = await getSkillsLibs();
      setLibs(data);
    };
    fetchLibs();
  }, []);

  return (
    <div className={styles.containerLibraries}>
      <div className={styles.librTitle}>
        <h2>Bibliotecas e Frameworks</h2>
      </div>
      <div className={styles.librariesItems}>
        {libs.map(({ icon, label }, idx) => (
          <SkillIcon
            key={idx}
            icon={icon}
            label={label}
            className={styles.itemLibraries}
            iconClassName={styles.iconLibraries}
          />
        ))}
      </div>
    </div>
  );
}
