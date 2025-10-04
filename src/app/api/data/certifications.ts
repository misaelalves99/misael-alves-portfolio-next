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
  {
    id: 13,
    imgcert: "/assets/img-certificado13.png",
    desc: "Gestão Ágil de Projetos com Scrum, Kanban & Ágil Escalado",
    cert: "/assets/certificado13.pdf",
    category: "Metodologias Ágeis",
  },
  {
    id: 14,
    imgcert: "/assets/img-certificado14.png",
    desc: "Gestão Ágil com Scrum COMPLETO + 3 Cursos EXTRAS",
    cert: "/assets/certificado14.pdf",
    category: "Metodologias Ágeis",
  },
  {
    id: 15,
    imgcert: "/assets/img-certificado15.png",
    desc: "PACOTE OFFICE AVANÇADO (WORD, EXCEL E POWER POINT)",
    cert: "/assets/certificado15.pdf",
    category: "Microsoft Office",
  },
  {
    id: 16,
    imgcert: "/assets/img-certificado16.png",
    desc: "React Testing with Jest / Vitest - TypeScript - 2025",
    cert: "/assets/certificado16.pdf",
    category: "Testes Unitários",
  },
  {
    id: 17,
    imgcert: "/assets/img-certificado17.png",
    desc: "Orientação a Objetos comJavaScript (Projetos e TypeScript)",
    cert: "/assets/certificado17.pdf",
    category: "JavaScript",
  },
  {
    id: 18,
    imgcert: "/assets/img-certificado18.png",
    desc: "Desafios de React JS Entrevistas e testes técnicos",
    cert: "/assets/certificado18.pdf",
    category: "React",
  },
  {
    id: 19,
    imgcert: "/assets/img-certificado19.png",
    desc: "20+ Projetos em React JS aprenda Redux, Bootstrap, APIs",
    cert: "/assets/certificado19.pdf",
    category: "React",
  },
  {
    id: 20,
    imgcert: "/assets/img-certificado20.png",
    desc: "C# COMPLETO Programação Orientada a Objetos + Projetos",
    cert: "/assets/certificado20.pdf",
    category: "C#",
  },
];

// Função Fake de API
export async function getCertifications() {
  return Promise.resolve(cardCertification);
}
