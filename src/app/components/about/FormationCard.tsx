// app/components/about/FormationCard.tsx

import Image from "next/image";
import Link from "next/link";
import styles from "./FormationCard.module.css";
import type { Formation } from "@/app/types/formation";

export default function FormationCard({ formation }: { formation: Formation }) {
  return (
    <Link
      href={formation.dipl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkWrapper}
    >
      <div className={styles.itemFormation}>
        <div className={styles.containerItemFor}>
          <div className={styles.imgItemFor}>
            <Image src={formation.img} alt="Imagem Card" width={100} height={100} />
          </div>
          <div className={styles.infoItemFor}>
            <h3>{formation.title}</h3>
            {formation.curso && <p>{formation.curso}</p>}
            <p>{formation.instituicao}</p>
            <p>{formation.periodo}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
