"use client";

import { useEffect, useState } from "react";
import styles from "./CertificationList.module.css";
import { getCertifications } from "../../api/data/certifications";
import CertificationCard, { Certification } from "./CertificationCard";

export default function CertificationList() {
  const [certifications, setCertifications] = useState<Certification[]>([]);

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

  return (
    <div className={styles.certifications}>
      <div className={styles.certificationsTitle}>
        <h2>Certificações</h2>
      </div>
      <div className={styles.certificationsItems}>
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
}
