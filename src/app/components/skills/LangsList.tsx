// app/components/skills/LangsList.tsx

"use client";

import { useEffect, useState } from "react";
import { getSkillsLangs } from "@/app/api/data/skills-langs";
import SkillIcon from "./SkillIcon";
import styles from "./LangsList.module.css";
import type { SkillItem } from "@/app/types/skills";

export default function LangsList() {
  const [langs, setLangs] = useState<SkillItem[]>([]);

  useEffect(() => {
    const fetchLangs = async () => {
      const data = await getSkillsLangs();
      setLangs(data);
    };
    fetchLangs();
  }, []);

  return (
    <div className={styles.containerLanguages}>
      <div className={styles.langTitle}>
        <h2>Linguagens</h2>
      </div>
      <div className={styles.languagesItems}>
        {langs.map(({ icon, label }, idx) => (
          <SkillIcon
            key={idx}
            icon={icon}
            label={label}
            className={styles.itemLanguages}
            iconClassName={styles.iconLanguages}
          />
        ))}
      </div>
    </div>
  );
}
