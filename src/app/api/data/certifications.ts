// app/api/data/certifications.ts

export const cardCertification = [
  {
    id: 1,
    imgcert: "/assets/img-certificado1.png",
    desc: "Programação de Algoritmos Escaláveis",
    cert: "/assets/certificado1.pdf",
  },
  {
    id: 2,
    imgcert: "/assets/img-certificado2.png",
    desc: "Programação de Sistemas de Informação",
    cert: "/assets/certificado2.pdf",
  },
  {
    id: 3,
    imgcert: "/assets/img-certificado3.png",
    desc: "Programação Para Internet",
    cert: "/assets/certificado3.pdf",
  },
  {
    id: 4,
    imgcert: "/assets/img-certificado4.png",
    desc: "Programação Para Dispositivos Móveis",
    cert: "/assets/certificado4.pdf",
  },
];

export async function getCertifications() {
  return Promise.resolve(cardCertification);
}
