// app/data/projects-all.ts

import { FaShoppingCart, FaCreditCard, FaFilter, FaUserLock, FaHeart, FaArrowCircleRight, FaImages, } from "react-icons/fa";

import { ProjectDataAll } from "../../types/project-data-all";
import { IconType } from "react-icons";

export const cardProjectsAll: (ProjectDataAll & { iconComponent: IconType })[] = [
  {
    id: 1,
    title: "CARRINHO",
    desc: "Componente de carrinho de compras com interação e persistência.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt"],
    demo: "#",
    github: "#",
    iconComponent: FaShoppingCart,
  },
  {
    id: 2,
    title: "CHECKOUT",
    desc: "Tela de checkout completa com etapas e pagamento.",
    icons: ["FaReact", "RiTailwindCssLine", "SiNextdotjs"],
    demo: "#",
    github: "#",
    iconComponent: FaCreditCard,
  },
  {
    id: 3,
    title: "FILTROS",
    desc: "Filtros avançados por categorias e características do produto.",
    icons: ["FaReact", "SiReactrouter"],
    demo: "#",
    github: "#",
    iconComponent: FaFilter,
  },
  {
    id: 4,
    title: "LOGIN",
    desc: "Sistema de autenticação com formulário de login.",
    icons: ["FaReact", "FaHtml5"],
    demo: "#",
    github: "#",
    iconComponent: FaUserLock,
  },
  {
    id: 5,
    title: "FAVORITOS",
    desc: "Funcionalidade de adicionar e remover favoritos.",
    icons: ["FaReact", "FaCss3Alt"],
    demo: "#",
    github: "#",
    iconComponent: FaHeart,
  },
  {
    id: 6,
    title: "PAGINAÇÃO",
    desc: "Sistema de paginação responsiva para listas longas.",
    icons: ["FaReact", "SiNextdotjs"],
    demo: "#",
    github: "#",
    iconComponent: FaArrowCircleRight,
  },
  {
    id: 7,
    title: "CARROSSEL",
    desc: "Componente de carrossel responsivo com imagens e controles.",
    icons: ["FaReact", "SiReactrouter"],
    demo: "#",
    github: "#",
    iconComponent: FaImages,
  },
];
