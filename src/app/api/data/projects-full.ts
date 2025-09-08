// app/api/data/projects-full.ts

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaAngular } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiVuedotjs, SiTestinglibrary, SiJest, SiJasmine, SiDotnet } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineExperiment } from "react-icons/ai";

import ImgProjCard1 from "../../../../public/assets/img-projeto-card-01.png";
import ImgProjCard2 from "../../../../public/assets/img-projeto-card-02.png";
import ImgProjCard3 from "../../../../public/assets/img-projeto-card-03.png";
import ImgProjCard4 from "../../../../public/assets/img-projeto-card-04.png";
import ImgProjCard5 from "../../../../public/assets/img-projeto-card-05.png";
import ImgProjCard6 from "../../../../public/assets/img-projeto-card-06.png";
import ImgProjCard7 from "../../../../public/assets/img-projeto-card-07.png";
import ImgProjCard8 from "../../../../public/assets/img-projeto-card-08.png";
import ImgProjCard9 from "../../../../public/assets/img-projeto-card-09.png";
import ImgProjCard10 from "../../../../public/assets/img-projeto-card-10.png";
import ImgProjCard11 from "../../../../public/assets/img-projeto-card-11.png";

import { ProjectDataFull } from "../../types/project-data-full";

export const cardProjectsFull: ProjectDataFull[] = [
    {
    id: 1,
    img: ImgProjCard8,
    title: "EMPLOYEE REGISTRATION",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de funcionários.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJest],
    demo: "https://employee-registration-react-seven.vercel.app/",
    github: "https://github.com/misaelalves99/employee-registration-react",
    category: "react"
  },
  {
    id: 2,
    img: ImgProjCard9,
    title: "ECOMMERCE STORE",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de loja virtual",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJest],
    demo: "https://ecommerce-store-react-seven.vercel.app/",
    github: "https://github.com/misaelalves99/ecommerce-store-react",
    category: "react"
  },
  {
    id: 3,
    img: ImgProjCard10,
    title: "SCHOOL MANAGEMENT",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de gestão escolar",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJest],
    demo: "https://school-management-react-one.vercel.app/",
    github: "https://github.com/misaelalves99/school-management-react",
    category: "react"
  },
  {
    id: 4,
    img: ImgProjCard11,
    title: "MEDICAL APPOINTMENT MANAGEMENT",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de gestão de consulta médica",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJest],
    demo: "https://medical-appointment-system-react.vercel.app/",
    github: "https://github.com/misaelalves99/medical-appointment-system-react",
    category: "react"
  },
  {
    id: 5,
    img: ImgProjCard1,
    title: "PORTFÓLIO",
    desc: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://misael-alves-portfolio-react-one.vercel.app/",
    github: "https://github.com/misaelalves99/misael-alves-portfolio-react",
    category: "react"
  },
  {
    id: 6,
    img: ImgProjCard2,
    title: "MS E-COMMERCE",
    desc: "Loja virtual com categorias de produtos, filtros, detalhes e checkout.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-ecommerce-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-ecommerce-react",
    category: "react"
  },
  {
    id: 7,
    img: ImgProjCard3,
    title: "FASHION SHOP",
    desc: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://fashion-shop-react-six.vercel.app/",
    github: "https://github.com/misaelalves99/fashion-shop-react",
    category: "react"
  },
  {
    id: 8,
    img: ImgProjCard4,
    title: "E-COMMERCE SHOP",
    desc: "Loja virtual com categorias de produtos para filtrar e efetuar a compra.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://e-commerce-shop-react-indol.vercel.app/",
    github: "https://github.com/misaelalves99/e-commerce-shop-react",
    category: "react"
  },
  {
    id: 9,
    img: ImgProjCard5,
    title: "MS PET",
    desc: "Proporciona o agendamento de uma visita para adoção de animais.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-pet-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-pet-react",
    category: "react"
  },
  {
    id: 10,
    img: ImgProjCard6,
    title: "MS FOOD",
    desc: "Sistema de anotação de pedidos do cliente em restaurante.",
    icons: [FaReact, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-food-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-food-react",
    category: "react"
  },
  {
    id: 11,
    img: ImgProjCard7,
    title: "MS NUTRI",
    desc: "Projeto de informações de alimentos nutritivos para saúde geral.",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-nutri-react.vercel.app/",
    github: "https://github.com/misaelalves99/ms-nutri-react",
    category: "react"
  },
  {
    id: 12,
    img: ImgProjCard8,
    title: "EMPLOYEE REGISTRATION",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de funcionários",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJest],
    demo: "https://employee-registration-next-tan.vercel.app/",
    github: "https://github.com/misaelalves99/employee-registration-next",
    category: "next"
  },
  {
    id: 13,
    img: ImgProjCard9,
    title: "ECOMMERCE STORE",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de loja virtual",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJest],
    demo: "https://ecommerce-store-next-eta.vercel.app/",
    github: "https://github.com/misaelalves99/ecommerce-store-next",
    category: "next"
  },
  {
    id: 14,
    img: ImgProjCard10,
    title: "SCHOOL MANAGEMENT",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de gestão escolar",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJest],
    demo: "https://school-management-next-seven.vercel.app/",
    github: "https://github.com/misaelalves99/school-management-next",
    category: "next"
  },
  {
    id: 15,
    img: ImgProjCard11,
    title: "MEDICAL APPOINTMENT MANAGEMENT",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de gestão de consulta médica",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJest],
    demo: "https://medical-appointment-system-next.vercel.app/",
    github: "https://github.com/misaelalves99/medical-appointment-system-next",
    category: "next"
  },
  {
    id: 16,
    img: ImgProjCard1,
    title: "PORTFÓLIO",
    desc: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://misael-alves-portfolio-next.vercel.app/",
    github: "https://github.com/misaelalves99/misael-alves-portfolio-next",
    category: "next"
  },
  {
    id: 17,
    img: ImgProjCard2,
    title: "MS E-COMMERCE",
    desc: "Loja virtual com categorias de produtos, filtros, detalhes e checkout.",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-ecommerce-next.vercel.app/",
    github: "https://github.com/misaelalves99/ms-ecommerce-next",
    category: "next"
  },
  {
    id: 18,
    img: ImgProjCard3,
    title: "FASHION SHOP",
    desc: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://fashion-shop-next-beta.vercel.app/",
    github: "https://github.com/misaelalves99/fashion-shop-next",
    category: "next"
  },
  {
    id: 19,
    img: ImgProjCard4,
    title: "E-COMMERCE SHOP",
    desc: "Loja virtual com categorias de produtos para filtrar e efetuar a compra.",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://e-commerce-shop-next-xi.vercel.app/",
    github: "https://github.com/misaelalves99/e-commerce-shop-next",
    category: "next"
  },
  {
    id: 20,
    img: ImgProjCard5,
    title: "MS PET",
    desc: "Proporciona o agendamento de uma visita para adoção de animais.",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-pet-next.vercel.app/",
    github: "https://github.com/misaelalves99/ms-pet-next",
    category: "next"
  },
  {
    id: 21,
    img: ImgProjCard6,
    title: "MS FOOD",
    desc: "Sistema de anotação de pedidos do cliente em restaurante.",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-food-next.onrender.com/",
    github: "https://github.com/misaelalves99/ms-food-next",
    category: "next"
  },
  {
    id: 22,
    img: ImgProjCard7,
    title: "MS NUTRI",
    desc: "Projeto de informações de alimentos nutritivos para saúde geral.",
    icons: [RiNextjsLine, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "https://ms-nutri-next.vercel.app/",
    github: "https://github.com/misaelalves99/ms-nutri-next",
    category: "next"
  },
  {
    id: 23,
    img: ImgProjCard1,
    title: "PORTFÓLIO",
    desc: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 24,
    img: ImgProjCard2,
    title: "MS E-COMMERCE",
    desc: "Loja virtual com categorias de produtos, filtros, detalhes e checkout.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 25,
    img: ImgProjCard3,
    title: "FASHION SHOP",
    desc: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 26,
    img: ImgProjCard4,
    title: "E-COMMERCE SHOP",
    desc: "Loja virtual com categorias de produtos para filtrar e efetuar a compra.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 27,
    img: ImgProjCard5,
    title: "MS PET",
    desc: "Proporciona o agendamento de uma visita para adoção de animais.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 28,
    img: ImgProjCard6,
    title: "MS FOOD",
    desc: "Sistema de anotação de pedidos do cliente em restaurante.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 29,
    img: ImgProjCard7,
    title: "MS NUTRI",
    desc: "Projeto de informações de alimentos nutritivos para saúde geral.",
    icons: [SiVuedotjs, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "#",
    category: "vue"
  },
  {
    id: 30,
    img: ImgProjCard8,
    title: "EMPLOYEE REGISTRATION",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de funcionários",
    icons: [FaAngular, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, AiOutlineExperiment, SiJasmine],
    demo: "https://employee-registration-angular.vercel.app/",
    github: "https://github.com/misaelalves99/employee-registration-angular",
    category: "angular"
  },
  {
    id: 31,
    img: ImgProjCard9,
    title: "ECOMMERCE STORE",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de loja virtual",
    icons: [FaAngular, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, AiOutlineExperiment, SiJasmine],
    demo: "https://ecommerce-store-angular-one.vercel.app/",
    github: "https://github.com/misaelalves99/ecommerce-store-angular",
    category: "angular"
  },
  {
    id: 32,
    img: ImgProjCard10,
    title: "SCHOOL MANAGEMENT",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de gestão escolar",
    icons: [FaAngular, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, AiOutlineExperiment, SiJasmine],
    demo: "https://school-management-angular.vercel.app/",
    github: "https://github.com/misaelalves99/school-management-angular",
    category: "angular"
  },
  {
    id: 33,
    img: ImgProjCard11,
    title: "MEDICAL APPOINTMENT MANAGEMENT",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de gestão de consulta médica",
    icons: [FaAngular, SiTypescript, FaJsSquare, FaHtml5, FaCss3Alt, SiTestinglibrary, SiJasmine, AiOutlineExperiment],
    demo: "https://medical-appointment-system-angular.vercel.app/",
    github: "https://github.com/misaelalves99/medical-appointment-system-angular",
    category: "angular"
  },
  {
    id: 34,
    img: ImgProjCard8,
    title: "EMPLOYEE REGISTRATION",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de funcionários",
    icons: [SiDotnet, TbBrandCSharp, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "https://github.com/misaelalves99/employee-registration-asp.net",
    category: "asp.net"
  },
  {
    id: 35,
    img: ImgProjCard9,
    title: "ECOMMERCE STORE",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de loja virtual",
    icons: [SiDotnet, TbBrandCSharp, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "https://github.com/misaelalves99/ecommerce-store-asp.net",
    category: "asp.net"
  },
  {
    id: 36,
    img: ImgProjCard10,
    title: "SCHOOL MANAGEMENT",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de gestão escolar",
    icons: [SiDotnet, TbBrandCSharp, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "https://github.com/misaelalves99/school-management-asp.net",
    category: "asp.net"
  },
  {
    id: 37,
    img: ImgProjCard11,
    title: "MEDICAL APPOINTMENT MANAGEMENT",
    desc: "Aplicação com CRUD completo para registro, edição e gerenciamento completo de gestão de consulta médica",
    icons: [SiDotnet, TbBrandCSharp, FaHtml5, FaCss3Alt],
    demo: "#",
    github: "https://github.com/misaelalves99/medical-appointment-system-asp.net",
    category: "asp.net"
  },
];

// Função Fake de API
export async function getProjectsFull() {
  return Promise.resolve(cardProjectsFull);
}
