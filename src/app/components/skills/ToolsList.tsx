// app/components/skills/ToolsList.tsx

"use client";

import { useEffect, useState } from "react";
import { getSkillsTools } from "@/app/api/data/skills-tools";
import SkillIcon from "./SkillIcon";
import styles from "./ToolsList.module.css";
import type { SkillItem } from "@/app/types/skills";

export default function ToolsList() {
  const [tools, setTools] = useState<SkillItem[]>([]);

  useEffect(() => {
    const fetchTools = async () => {
      const data = await getSkillsTools();
      setTools(data);
    };
    fetchTools();
  }, []);

  return (
    <div className={styles.containerTools}>
      <div className={styles.toolsTitle}>
        <h2>Ferramentas e Plataformas</h2>
      </div>
      <div className={styles.toolsItems}>
        {tools.map(({ icon, label }, idx) => (
          <SkillIcon
            key={idx}
            icon={icon}
            label={label}
            className={styles.itemTools}
            iconClassName={styles.iconTools}
          />
        ))}
      </div>
    </div>
  );
}
