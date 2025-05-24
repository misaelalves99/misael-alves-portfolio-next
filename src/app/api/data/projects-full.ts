// app/data/cardProjects.ts

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs
} from "react-icons/si";

import ImgProjCard1 from "../../../../public/assets/img-projeto-card-01.png";
import ImgProjCard2 from "../../../../public/assets/img-projeto-card-02.png";
import ImgProjCard3 from "../../../../public/assets/img-projeto-card-03.png";
import ImgProjCard4 from "../../../../public/assets/img-projeto-card-04.png";
import ImgProjCard5 from "../../../../public/assets/img-projeto-card-05.png";
import ImgProjCard6 from "../../../../public/assets/img-projeto-card-06.png";

import { ProjectDataFull } from "../../types/project-data-full";

export const cardProjectsFull: ProjectDataFull[] = [
  {
    id: 1,
    img: ImgProjCard1,
    title: "PORTFÓLIO",
    desc: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://misael-alves-portfolio-react.vercel.app/",
    github: "https://github.com/misaelalves99/misael-alves-portfolio-react",
    category: "react"
  },
  {
    id: 2,
    img: ImgProjCard2,
    title: "FASHION SHOP",
    desc: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://fashion-shop-react-six.vercel.app/",
    github: "https://github.com/misaelalves99/fashion-shop-react",
    category: "react"
  },
  {
    id: 3,
    img: ImgProjCard3,
    title: "E-COMMERCE SHOP",
    desc: "Loja virtual com categorias de produtos para filtrar e efetuar a compra.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://e-commerce-shop-react-indol.vercel.app/",
    github: "https://github.com/misaelalves99/e-commerce-shop-react",
    category: "react"
  },
  {
    id: 4,
    img: ImgProjCard4,
    title: "MS PET",
    desc: "Proporciona o agendamento de uma visita para adoção de animais.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-pet-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-pet-react",
    category: "react"
  },
  {
    id: 5,
    img: ImgProjCard5,
    title: "MS FOOD",
    desc: "Sistema de anotação de pedidos do cliente em restaurante.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-food-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-food-react",
    category: "react"
  },
  {
    id: 6,
    img: ImgProjCard6,
    title: "MS NUTRI",
    desc: "Projeto de informações de alimentos nutritivos para saúde geral.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-nutri-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-nutri-react",
    category: "react"
  },
  {
    id: 7,
    img: ImgProjCard1,
    title: "PORTFÓLIO",
    desc: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://misael-alves-portfolio-next.vercel.app/",
    github: "https://github.com/misaelalves99/misael-alves-portfolio-next",
    category: "next"
  },
  {
    id: 8,
    img: ImgProjCard2,
    title: "FASHION SHOP",
    desc: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "next"
  },
  {
    id: 9,
    img: ImgProjCard3,
    title: "E-COMMERCE SHOP",
    desc: "Loja virtual com categorias de produtos para filtrar e efetuar a compra.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://e-commerce-shop-next-xi.vercel.app/",
    github: "https://github.com/misaelalves99/e-commerce-shop-next",
    category: "next"
  },
  {
    id: 10,
    img: ImgProjCard4,
    title: "MS PET",
    desc: "Proporciona o agendamento de uma visita para adoção de animais.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-pet-next.vercel.app/",
    github: "https://github.com/misaelalves99/ms-pet-next",
    category: "next"
  },
  {
    id: 11,
    img: ImgProjCard5,
    title: "MS FOOD",
    desc: "Sistema de anotação de pedidos do cliente em restaurante.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "next"
  },
  {
    id: 12,
    img: ImgProjCard6,
    title: "MS NUTRI",
    desc: "Projeto de informações de alimentos nutritivos para saúde geral.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "next"
  },
    {
    id: 13,
    img: ImgProjCard1,
    title: "PORTFÓLIO",
    desc: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 14,
    img: ImgProjCard2,
    title: "FASHION SHOP",
    desc: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 15,
    img: ImgProjCard3,
    title: "E-COMMERCE SHOP",
    desc: "Loja virtual com categorias de produtos para filtrar e efetuar a compra.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 16,
    img: ImgProjCard4,
    title: "MS PET",
    desc: "Proporciona o agendamento de uma visita para adoção de animais.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 17,
    img: ImgProjCard5,
    title: "MS FOOD",
    desc: "Sistema de anotação de pedidos do cliente em restaurante.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 18,
    img: ImgProjCard6,
    title: "MS NUTRI",
    desc: "Projeto de informações de alimentos nutritivos para saúde geral.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
];
