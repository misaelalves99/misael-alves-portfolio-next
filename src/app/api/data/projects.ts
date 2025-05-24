// app/data/cardProjects.ts
import ImgProjCard1 from "../../../../public/assets/img-projeto-card-01.png";
import ImgProjCard2 from "../../../../public/assets/img-projeto-card-02.png";
import ImgProjCard3 from "../../../../public/assets/img-projeto-card-03.png";
import ImgProjCard4 from "../../../../public/assets/img-projeto-card-04.png";
import ImgProjCard5 from "../../../../public/assets/img-projeto-card-05.png";
import ImgProjCard6 from "../../../../public/assets/img-projeto-card-06.png";

import { ProjectData } from "../../types/project-data";

export const cardProjects: ProjectData[] = [
  {
    id: 1,
    img: ImgProjCard1,
    title: "PORTFÓLIO",
    desc: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt", "SiReactrouter"],
    demo: "https://misael-alves-portfolio-react.vercel.app/",
    github: "https://github.com/misaelalves99/misael-alves-portfolio-react",
  },
  {
    id: 2,
    img: ImgProjCard2,
    title: "FASHION SHOP",
    desc: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt", "RiTailwindCssLine", "SiReactrouter"],
    demo: "https://fashion-shop-react-six.vercel.app/",
    github: "https://github.com/misaelalves99/fashion-shop-react",
  },
  {
    id: 3,
    img: ImgProjCard3,
    title: "E-COMMERCE SHOP",
    desc: "Loja virtual com categorias de produtos para filtrar e efetuar a compra.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt", "SiNextdotjs", "SiReactrouter"],
    demo: "https://e-commerce-shop-next-xi.vercel.app/",
    github: "https://github.com/misaelalves99/e-commerce-shop-next",
  },
  {
    id: 4,
    img: ImgProjCard4,
    title: "MS PET",
    desc: "Proporciona o agendamento de uma visita para adoção de animais.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt", "SiNextdotjs", "SiReactrouter"],
    demo: "https://ms-pet-next.vercel.app/",
    github: "https://github.com/misaelalves99/ms-pet-next",
  },
  {
    id: 5,
    img: ImgProjCard5,
    title: "MS FOOD",
    desc: "Sistema de anotação de pedidos do cliente em restaurante.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt", "SiReactrouter"],
    demo: "https://ms-food-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-food-react",
  },
  {
    id: 6,
    img: ImgProjCard6,
    title: "MS NUTRI",
    desc: "Projeto de informações de alimentos nutritivos para saúde geral.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt", "SiReactrouter"],
    demo: "https://ms-nutri-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-nutri-react",
  },
];
