// app/api/data/formations.ts

export const cardFormation = [
    {
    id: 1,
    img: "/assets/img-card.png",
    title: "GRADUANDO",
    curso: "Sistemas de Informação",
    instituicao: "Universidade Presidente Antônio Carlos - UNIPAC",
    periodo: "Início: 28/07/2025 - Atual: 1º período",
    dipl: "/",
  },
  {
    id: 2,
    img: "/assets/img-card.png",
    title: "GRADUAÇÃO SUPERIOR COMPLETO",
    curso: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Universidade Estácio de Sá",
    periodo: "Período: 25/02/2022 - 01/07/2024",
    dipl: "/assets/diploma-ads-misael.pdf",
  },
  {
    id: 3,
    img: "/assets/img-card.png",
    title: "ENSINO MÉDIO COMPLETO",
    instituicao: "E.E. José Expedito Souza Campos",
    periodo: "Período: 2005 - 2016",
    dipl: "/assets/historico-escolar-misael.pdf",
  },
];

// Função Fake de API
export async function getFormations() {
  return Promise.resolve(cardFormation);
}
