// src/components/FormationCard.tsx

import Image from "next/image";
import styles from "./FormationCard.module.css";

export interface Formation {
  id: number;
  img: string;
  title: string;
  curso?: string;
  instituicao: string;
  periodo: string;
}

export default function FormationCard({ formation }: { formation: Formation }) {
  return (
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
  );
}
