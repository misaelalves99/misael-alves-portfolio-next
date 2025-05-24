// src/about/page.tsx

"use client";

import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardCertification } from "../api/data/certifications";
import { cardFormation } from "../api/data/formations";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Perfil from "../../../public/assets/img-perfil.png";

export default function About() {
  return (
    <section className={styles.sectionAboutMe}>
        <div className={styles.containerHeroAbout}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className={styles.aboutMe}
            >
                <h1>Sobre mim</h1>
                <h2>
                Olá, meu nome é Misael Alves, moro em Teófilo Otoni-MG. Sou
                desenvolvedor front-end em React.js e sou formado no curso de
                Análise e Desenvolvimento de Sistemas.
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className={styles.aboutMeProfile}
            >
                <div className={styles.contactSocial}>
                    <div className={styles.homeProfile}>
                        <Image src={Perfil} alt="Foto de perfil" width={200} height={200} />
                    </div>
                    <div className={styles.socialMedia}>
                        <Link href="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target='_blank'>
                            <FaLinkedinIn className={styles.iconSm}/>
                        </Link>
                        <Link href="https://github.com/misaelalves99" target='_blank'>
                            <FaGithub className={styles.iconSm}/>
                        </Link>
                        <Link href="https://www.instagram.com/misael_alves_99/" target='_blank'>
                            <FaInstagram className={styles.iconSm}/>
                        </Link>
                        <Link href="https://www.facebook.com/misael.alves.92317/" target='_blank'>
                            <FaFacebookF className={styles.iconSm}/>
                        </Link>
                        <Link href="https://x.com/MisaelAlves110" target='_blank'>
                            <FaTwitter className={styles.iconSm}/>
                        </Link>
                    </div>
                </div> 
            </motion.div>
        </div>

        <div className={styles.education}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className={styles.containerEducation}
            >
                <div className={styles.educationTitle}>
                <h1>Educação</h1>
                <h2>Formação Acadêmica</h2>
                </div>

                <div className={styles.formationItems}>
                {cardFormation.map((data) => (
                    <div className={styles.itemFormation} key={data.id}>
                    <div className={styles.containerItemFor}>
                        <div className={styles.imgItemFor}>
                        <Image src={data.img} alt="Imagem Card" width={100} height={100} />
                        </div>
                        <div className={styles.infoItemFor}>
                        <h3>{data.title}</h3>
                        <p>{data.curso}</p>
                        <p>{data.instituicao}</p>
                        <p>{data.periodo}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                <div className={styles.certifications}>
                <div className={styles.certificationsTitle}>
                    <h2>Certificações</h2>
                </div>

                <div className={styles.certificationsItems}>
                    {cardCertification.map((data) => (
                    <Link href={data.cert} target="_blank" key={data.id}>
                        <div className={styles.itemCertifications}>
                        <div className={styles.containerItemCert}>
                            <div className={styles.imgCertifications}>
                            <Image src={data.imgcert} alt="Certificado" width={100} height={100} />
                            </div>
                            <div className={styles.descriptionCertifications}>
                            <p>{data.desc}</p>
                            </div>
                        </div>
                        </div>
                    </Link>
                    ))}
                </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}