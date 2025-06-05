// app/api/data/certifications.ts

export const cardCertification = [
  {
    id: 1,
    imgcert: "/assets/img-certificado1.png",
    desc: "Programação de Algoritmos Escaláveis",
    cert: "/assets/certificado1.pdf",
    category: "Outros",
  },
  {
    id: 2,
    imgcert: "/assets/img-certificado2.png",
    desc: "Programação de Sistemas de Informação",
    cert: "/assets/certificado2.pdf",
    category: "Outros",
  },
  {
    id: 3,
    imgcert: "/assets/img-certificado3.png",
    desc: "Programação Para Internet",
    cert: "/assets/certificado3.pdf",
    category: "Outros",
  },
  {
    id: 4,
    imgcert: "/assets/img-certificado4.png",
    desc: "Programação Para Dispositivos Móveis",
    cert: "/assets/certificado4.pdf",
    category: "Outros",
  },
  {
    id: 5,
    imgcert: "/assets/img-certificado5.png",
    desc: "React do Zero a Maestria",
    cert: "/assets/certificado5.pdf",
    category: "React",
  },
  {
    id: 6,
    imgcert: "/assets/img-certificado6.png",
    desc: "React JS com TypeScript",
    cert: "/assets/certificado6.pdf",
    category: "React",
  },
  {
    id: 7,
    imgcert: "/assets/img-certificado7.png",
    desc: "Next.js do Zero ao Avançado",
    cert: "/assets/certificado7.pdf",
    category: "Next",
  },
  {
    id: 8,
    imgcert: "/assets/img-certificado8.png",
    desc: "TypeScript do básico ao avançado",
    cert: "/assets/certificado8.pdf",
    category: "TypeScript",
  },
  {
    id: 9,
    imgcert: "/assets/img-certificado9.png",
    desc: "JavaScript do básico ao avançado",
    cert: "/assets/certificado9.pdf",
    category: "JavaScript",
  },
  {
    id: 10,
    imgcert: "/assets/img-certificado10.png",
    desc: "Node.js do Zero a Maestria",
    cert: "/assets/certificado10.pdf",
    category: "Node",
  },
  {
    id: 11,
    imgcert: "/assets/img-certificado11.png",
    desc: "SQL do básico ao avançado",
    cert: "/assets/certificado11.pdf",
    category: "MySQL",
  },
  {
    id: 12,
    imgcert: "/assets/img-certificado12.png",
    desc: "Git e GitHub do básico ao avançado",
    cert: "/assets/certificado12.pdf",
    category: "Git GitHub",
  },
];

// Função Fake de API
export async function getCertifications() {
  return Promise.resolve(cardCertification);
}
