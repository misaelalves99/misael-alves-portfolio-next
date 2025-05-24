// app/data/projects-all.ts

import {
  FaShoppingCart,
  FaCreditCard,
  FaFilter,
  FaUserLock,
  FaHeart,
  FaArrowCircleRight,
  FaImages,
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

import { ProjectDataAll } from "../../types/project-data-all";
import { IconType } from "react-icons";

export const cardProjectsAll: (ProjectDataAll & { iconComponent: IconType })[] = [
  {
    id: 1,
    title: "CARRINHO",
    desc: "Componente de carrinho de compras com interação e persistência.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://cart-react-jade.vercel.app/",
    github: "https://github.com/misaelalves99/cart-react",
    iconComponent: FaShoppingCart,
    category: "react"
  },
  {
    id: 2,
    title: "CHECKOUT",
    desc: "Tela de checkout completa com etapas e pagamento.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://checkout-details-react.vercel.app/",
    github: "https://github.com/misaelalves99/checkout-details-react",
    iconComponent: FaCreditCard,
    category: "react"
  },
  {
    id: 3,
    title: "FILTROS",
    desc: "Filtros avançados por categorias e características do produto.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://filter-search-react.vercel.app/",
    github: "https://github.com/misaelalves99/filter-search-react",
    iconComponent: FaFilter,
    category: "react"
  },
  {
    id: 4,
    title: "LOGIN",
    desc: "Sistema de autenticação com formulário de login.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://login-register-react-silk.vercel.app/",
    github: "https://github.com/misaelalves99/login-register-react",
    iconComponent: FaUserLock,
    category: "react"
  },
  {
    id: 5,
    title: "FAVORITOS",
    desc: "Funcionalidade de adicionar e remover favoritos.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://favorites-react.vercel.app/",
    github: "https://github.com/misaelalves99/favorites-react",
    iconComponent: FaHeart,
    category: "react"
  },
  {
    id: 6,
    title: "PAGINAÇÃO",
    desc: "Sistema de paginação responsiva para listas longas.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://pagination-products-react.vercel.app/",
    github: "https://github.com/misaelalves99/pagination-products-react",
    iconComponent: FaArrowCircleRight,
    category: "react"
  },
  {
    id: 7,
    title: "CARROSSEL",
    desc: "Componente de carrossel responsivo com imagens e controles.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://carousel-react-mocha.vercel.app/",
    github: "https://github.com/misaelalves99/carousel-react",
    iconComponent: FaImages,
    category: "react"
  },
  {
    id: 8,
    title: "CARRINHO",
    desc: "Componente de carrinho de compras com interação e persistência.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://cart-next-nine.vercel.app/",
    github: "https://github.com/misaelalves99/cart-next",
    iconComponent: FaShoppingCart,
    category: "next"
  },
  {
    id: 9,
    title: "CHECKOUT",
    desc: "Tela de checkout completa com etapas e pagamento.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://checkout-details-next.vercel.app/",
    github: "https://github.com/misaelalves99/checkout-details-next",
    iconComponent: FaCreditCard,
    category: "next"
  },
  {
    id: 10,
    title: "FILTROS",
    desc: "Filtros avançados por categorias e características do produto.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://filter-search-next.vercel.app/",
    github: "https://github.com/misaelalves99/filter-search-next",
    iconComponent: FaFilter,
    category: "next"
  },
  {
    id: 11,
    title: "LOGIN",
    desc: "Sistema de autenticação com formulário de login.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://login-register-next.vercel.app/",
    github: "https://github.com/misaelalves99/login-register-next",
    iconComponent: FaUserLock,
    category: "next"
  },
  {
    id: 12,
    title: "FAVORITOS",
    desc: "Funcionalidade de adicionar e remover favoritos.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://favorites-next.vercel.app/",
    github: "https://github.com/misaelalves99/favorites-next",
    iconComponent: FaHeart,
    category: "next"
  },
  {
    id: 13,
    title: "PAGINAÇÃO",
    desc: "Sistema de paginação responsiva para listas longas.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://pagination-products-next.vercel.app/",
    github: "https://github.com/misaelalves99/pagination-products-next",
    iconComponent: FaArrowCircleRight,
    category: "next"
  },
  {
    id: 14,
    title: "CARROSSEL",
    desc: "Componente de carrossel responsivo com imagens e controles.",
    icons: [SiNextdotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://carousel-next-cyan.vercel.app/",
    github: "https://github.com/misaelalves99/carousel-next",
    iconComponent: FaImages,
    category: "next"
  },
  {
    id: 15,
    title: "CARRINHO",
    desc: "Componente de carrinho de compras com interação e persistência.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://cart-vue.vercel.app/",
    github: "https://github.com/misaelalves99/cart-vue",
    iconComponent: FaShoppingCart,
    category: "vue"
  },
  {
    id: 16,
    title: "CHECKOUT",
    desc: "Tela de checkout completa com etapas e pagamento.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://checkout-details-vue.vercel.app/",
    github: "https://github.com/misaelalves99/checkout-details-vue",
    iconComponent: FaCreditCard,
    category: "vue"
  },
  {
    id: 17,
    title: "FILTROS",
    desc: "Filtros avançados por categorias e características do produto.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://filter-search-vue.vercel.app/",
    github: "https://github.com/misaelalves99/filter-search-vue",
    iconComponent: FaFilter,
    category: "vue"
  },
  {
    id: 18,
    title: "LOGIN",
    desc: "Sistema de autenticação com formulário de login.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://login-register-vue-ten.vercel.app/",
    github: "https://github.com/misaelalves99/login-register-vue",
    iconComponent: FaUserLock,
    category: "vue"
  },
  {
    id: 19,
    title: "FAVORITOS",
    desc: "Funcionalidade de adicionar e remover favoritos.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://favorites-vue.vercel.app/",
    github: "https://github.com/misaelalves99/favorites-vue",
    iconComponent: FaHeart,
    category: "vue"
  },
  {
    id: 20,
    title: "PAGINAÇÃO",
    desc: "Sistema de paginação responsiva para listas longas.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://pagination-products-vue.vercel.app/",
    github: "https://github.com/misaelalves99/pagination-products-vue",
    iconComponent: FaArrowCircleRight,
    category: "vue"
  },
  {
    id: 21,
    title: "CARROSSEL",
    desc: "Componente de carrossel responsivo com imagens e controles.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://carousel-vue.vercel.app/",
    github: "https://github.com/misaelalves99/carousel-vue",
    iconComponent: FaImages,
    category: "vue"
  },
];
