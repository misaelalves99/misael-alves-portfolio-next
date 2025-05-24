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
    category: "react"
  },
  {
    id: 2,
    title: "CHECKOUT",
    desc: "Tela de checkout completa com etapas e pagamento.",
    icons: ["FaReact", "RiTailwindCssLine", "SiNextdotjs"],
    demo: "#",
    github: "#",
    iconComponent: FaCreditCard,
    category: "react"
  },
  {
    id: 3,
    title: "FILTROS",
    desc: "Filtros avançados por categorias e características do produto.",
    icons: ["FaReact", "SiReactrouter"],
    demo: "#",
    github: "#",
    iconComponent: FaFilter,
    category: "react"
  },
  {
    id: 4,
    title: "LOGIN",
    desc: "Sistema de autenticação com formulário de login.",
    icons: ["FaReact", "FaHtml5"],
    demo: "#",
    github: "#",
    iconComponent: FaUserLock,
    category: "react"
  },
  {
    id: 5,
    title: "FAVORITOS",
    desc: "Funcionalidade de adicionar e remover favoritos.",
    icons: ["FaReact", "FaCss3Alt"],
    demo: "#",
    github: "#",
    iconComponent: FaHeart,
    category: "react"
  },
  {
    id: 6,
    title: "PAGINAÇÃO",
    desc: "Sistema de paginação responsiva para listas longas.",
    icons: ["FaReact", "SiNextdotjs"],
    demo: "#",
    github: "#",
    iconComponent: FaArrowCircleRight,
    category: "react"
  },
  {
    id: 7,
    title: "CARROSSEL",
    desc: "Componente de carrossel responsivo com imagens e controles.",
    icons: ["FaReact", "SiReactrouter"],
    demo: "#",
    github: "#",
    iconComponent: FaImages,
    category: "react"
  },
  {
    id: 8,
    title: "CARRINHO",
    desc: "Componente de carrinho de compras com interação e persistência.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt"],
    demo: "#",
    github: "#",
    iconComponent: FaShoppingCart,
    category: "next"
  },
  {
    id: 9,
    title: "CHECKOUT",
    desc: "Tela de checkout completa com etapas e pagamento.",
    icons: ["FaReact", "RiTailwindCssLine", "SiNextdotjs"],
    demo: "#",
    github: "#",
    iconComponent: FaCreditCard,
    category: "next"
  },
  {
    id: 10,
    title: "FILTROS",
    desc: "Filtros avançados por categorias e características do produto.",
    icons: ["FaReact", "SiReactrouter"],
    demo: "#",
    github: "#",
    iconComponent: FaFilter,
    category: "next"
  },
  {
    id: 11,
    title: "LOGIN",
    desc: "Sistema de autenticação com formulário de login.",
    icons: ["FaReact", "FaHtml5"],
    demo: "#",
    github: "#",
    iconComponent: FaUserLock,
    category: "next"
  },
  {
    id: 12,
    title: "FAVORITOS",
    desc: "Funcionalidade de adicionar e remover favoritos.",
    icons: ["FaReact", "FaCss3Alt"],
    demo: "#",
    github: "#",
    iconComponent: FaHeart,
    category: "next"
  },
  {
    id: 13,
    title: "PAGINAÇÃO",
    desc: "Sistema de paginação responsiva para listas longas.",
    icons: ["FaReact", "SiNextdotjs"],
    demo: "#",
    github: "#",
    iconComponent: FaArrowCircleRight,
    category: "next"
  },
  {
    id: 14,
    title: "CARROSSEL",
    desc: "Componente de carrossel responsivo com imagens e controles.",
    icons: ["FaReact", "SiReactrouter"],
    demo: "#",
    github: "#",
    iconComponent: FaImages,
    category: "next"
  },
  {
    id: 15,
    title: "CARRINHO",
    desc: "Componente de carrinho de compras com interação e persistência.",
    icons: ["FaReact", "FaHtml5", "FaCss3Alt"],
    demo: "#",
    github: "#",
    iconComponent: FaShoppingCart,
    category: "vue"
  },
  {
    id: 16,
    title: "CHECKOUT",
    desc: "Tela de checkout completa com etapas e pagamento.",
    icons: ["FaReact", "RiTailwindCssLine", "SiNextdotjs"],
    demo: "#",
    github: "#",
    iconComponent: FaCreditCard,
    category: "vue"
  },
  {
    id: 17,
    title: "FILTROS",
    desc: "Filtros avançados por categorias e características do produto.",
    icons: ["FaReact", "SiReactrouter"],
    demo: "#",
    github: "#",
    iconComponent: FaFilter,
    category: "vue"
  },
  {
    id: 18,
    title: "LOGIN",
    desc: "Sistema de autenticação com formulário de login.",
    icons: ["FaReact", "FaHtml5"],
    demo: "#",
    github: "#",
    iconComponent: FaUserLock,
    category: "vue"
  },
  {
    id: 19,
    title: "FAVORITOS",
    desc: "Funcionalidade de adicionar e remover favoritos.",
    icons: ["FaReact", "FaCss3Alt"],
    demo: "#",
    github: "#",
    iconComponent: FaHeart,
    category: "vue"
  },
  {
    id: 20,
    title: "PAGINAÇÃO",
    desc: "Sistema de paginação responsiva para listas longas.",
    icons: ["FaReact", "SiNextdotjs"],
    demo: "#",
    github: "#",
    iconComponent: FaArrowCircleRight,
    category: "vue"
  },
  {
    id: 21,
    title: "CARROSSEL",
    desc: "Componente de carrossel responsivo com imagens e controles.",
    icons: ["FaReact", "SiReactrouter"],
    demo: "#",
    github: "#",
    iconComponent: FaImages,
    category: "vue"
  },
];
