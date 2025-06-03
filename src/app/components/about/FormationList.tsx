// app/components/about/FormationList.tsx

"use client";

import { useEffect, useState } from "react";
import styles from "./FormationList.module.css";
import { getFormations } from "../../api/data/formations";
import FormationCard from "./FormationCard";
import type { Formation } from "@/app/types/formation";

export default function FormationList() {
  const [formations, setFormations] = useState<Formation[]>([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const data = await getFormations();
        setFormations(data);
      } catch (error) {
        console.error("Erro ao buscar formações:", error);
      }
    };

    fetchFormations();
  }, []);

  return (
    <div className={styles.formationItems}>
      {formations.map((formation) => (
        <FormationCard key={formation.id} formation={formation} />
      ))}
    </div>
  );
}
