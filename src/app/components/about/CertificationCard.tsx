// app/components/about/CertificationCard.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./CertificationCard.module.css";

export interface Certification {
  id: number;
  imgcert: string;
  desc: string;
  cert: string;
}

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <Link
      href={cert.cert}
      target="_blank"
      rel="noopener noreferrer"
      key={cert.id}
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
