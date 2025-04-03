import ImgCard from '../../../public/assets/img-card.png';

import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssLine, RiComputerLine } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

import ImgProjCard1 from '../../../public/assets/img-projeto-card-01.png';
import ImgProjCard2 from '../../../public/assets/img-projeto-card-02.png';
import ImgProjCard3 from '../../../public/assets/img-projeto-card-03.png';
import ImgProjCard4 from '../../../public/assets/img-projeto-card-04.png';
import ImgProjCard5 from '../../../public/assets/img-projeto-card-05.png';
import ImgProjCard6 from '../../../public/assets/img-projeto-card-06.png';

export const cardFormation = [         
    {
        id: 1,
        img: ImgCard,
        title: "GRADUAÇÃO SUPERIOR COMPLETO",
        curso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "Universidade Estácio de Sá",
        periodo: "Período: 25/02/2022 - 01/07/2024"
    },

    {
        id: 2,
        img: ImgCard,
        title: "ENSINO MÉDIO COMPLETO",
        instituicao: "E.E. José Expedito Souza Campos",
        periodo: "Período: 2005 - 2016"
    },
]

export const cardCertification = [
    {
        id: 1,
        imgcert: "/assets/img-certificado1.png", // Caminho relativo da pasta public
        desc: "Programação de Algoritmos Escaláveis",
        cert: "/certificates/certificado1.pdf", // Caminho do PDF na pasta public
    },
    {
        id: 2,
        imgcert: "/assets/img-certificado2.png",
        desc: "Programação de Sistemas de Informação",
        cert: "/certificates/certificado2.pdf",
    },
    {
        id: 3,
        imgcert: "/assets/img-certificado3.png",
        desc: "Programação Para Internet",
        cert: "/certificates/certificado3.pdf",
    },
    {
        id: 4,
        imgcert: "/assets/img-certificado4.png",
        desc: "Programação Para Dispositivos Móveis",
        cert: "/certificates/certificado4.pdf",
    },
];

export const cardProjects = [
    {
        id: 1,
        imageUrl: ImgProjCard1,
        title: "PORTFÓLIO",
        description: "Este é meu portfólio pessoal. Aqui, mostro minhas principais habilidades como desenvolvedor front-end.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon4: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demoUrl: "https://misael-alves-portfolio.vercel.app/",
        githubUrl: "https://github.com/misaelalves99/misael-alves-portfolio",
        tools: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    },

    {
        id: 2,
        imageUrl: ImgProjCard2,
        title: "FASHION SHOP",
        description: "Um projeto pessoal com produtos de moda feminina, permitindo filtrar a sua categoria desejada.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon4: <RiTailwindCssLine className='icon-tool' />,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demoUrl: "https://fashion-shop-six.vercel.app/",
        githubUrl: "https://github.com/misaelalves99/fashion-shop",
        tools: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    },

    {
        id: 3,
        imageUrl: ImgProjCard3,
        title: "E-COMMERCE SHOP",
        description: "Nesse projeto pessoal de loja virtual possui variadas categorias de produtos para filtrar e efetuar a compra.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demoUrl: "https://e-commerce-shop-indol.vercel.app/",
        githubUrl: "https://github.com/misaelalves99/e-commerce-shop",
        tools: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    },
    {
        id: 4,
        imageUrl: ImgProjCard4,
        title: "MS PET",
        description: "Projeto pessoal que proporciona o agendamento de uma visita para a adoção de animais de estimação.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demoUrl: "https://ms-pet.vercel.app/",
        githubUrl: "https://github.com/misaelalves99/ms_pet",
        tools: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    },
    {
        id: 5,
        imageUrl: ImgProjCard5,
        title: "MS FOOD",
        description: "Fazer pedido de comida no sistema de anotação de pedidos do cliente em restaurante.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demoUrl: "https://ms-food.vercel.app/",
        githubUrl: "https://github.com/misaelalves99/ms_food",
        tools: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    },
    {
        id: 6,
        imageUrl: ImgProjCard6,
        title: "MS NUTRI",
        description: "Um projeto de informações de alimentos nutritivos para a saúde geral.",
        icon1: <FaReact className='icon-tool' />,
        icon2: <FaHtml5 className='icon-tool' />,
        icon3: <FaCss3Alt className='icon-tool' />,
        icon5: <SiReactrouter className='icon-tool'/>,
        iconbtn1: <RiComputerLine/>,
        iconbtn2: <FiGithub/>,
        demoUrl: "https://ms-nutri.vercel.app/",
        githubUrl: "https://github.com/misaelalves99/ms-nutri"
    }
]
