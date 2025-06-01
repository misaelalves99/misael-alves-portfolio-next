export const cardFormation = [
  {
    id: 1,
    img: "/assets/img-card.png",
    title: "GRADUAÇÃO SUPERIOR COMPLETO",
    curso: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Universidade Estácio de Sá",
    periodo: "Período: 25/02/2022 - 01/07/2024",
  },
  {
    id: 2,
    img: "/assets/img-card.png",
    title: "ENSINO MÉDIO COMPLETO",
    instituicao: "E.E. José Expedito Souza Campos",
    periodo: "Período: 2005 - 2016",
  },
];

// Função que simula um GET (fetch)
export async function getFormations() {
  return Promise.resolve(cardFormation);
}
