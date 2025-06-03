// app/components/about/CertificationCard.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./CertificationCard.module.css";
import type { Certification } from "@/app/types/certification"; // importar tipo aqui

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <Link
      href={cert.cert}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.itemCertifications}>
        <div className={styles.containerItemCert}>
          <div className={styles.imgCertifications}>
            <Image src={cert.imgcert} alt="Certificado" width={100} height={100} />
          </div>
          <div className={styles.descriptionCertifications}>
            <p>{cert.desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
