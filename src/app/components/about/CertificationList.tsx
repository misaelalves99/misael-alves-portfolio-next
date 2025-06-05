// app/components/about/CertificationList.tsx

"use client";

import { useEffect, useState } from "react";
import styles from "./CertificationList.module.css";
import { getCertifications } from "../../api/data/certifications";
import CertificationCard from "./CertificationCard";
import CertificationFilter from "./CertificationFilter";
import type { Certification } from "@/app/types/certification";

const categories = [
  "Todas",
  "React",
  "Next",
  "TypeScript",
  "JavaScript",
  "Node",
  "MySQL",
  "Git GitHub",
  "Outros",
];

export default function CertificationList() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const data = await getCertifications();
        setCertifications(data);
      } catch (error) {
        console.error("Erro ao buscar certificações:", error);
      }
    };

    fetchCertifications();
  }, []);

  const filteredCertifications =
    selectedCategory === "Todas"
      ? certifications
      : certifications.filter((cert) => cert.category === selectedCategory);

  return (
    <div className={styles.certifications}>
      <div className={styles.certificationsTitle}>
        <h2>Certificações</h2>
      </div>

      <div className={styles.filterContainer}>
        <CertificationFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChangeCategory={setSelectedCategory}
        />
      </div>

      <div className={styles.certificationsItems}>
        {filteredCertifications.length === 0 ? (
          <p>Nenhuma certificação encontrada.</p>
        ) : (
          filteredCertifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))
        )}
      </div>
    </div>
  );
}
