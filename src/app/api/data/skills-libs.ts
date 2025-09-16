// src/app/api/data/skills-libs.ts

import { FaReact, FaNpm, FaVuejs, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiAngular, SiTestinglibrary, SiJest, SiJasmine, SiDotnet } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { AiOutlineExperiment } from "react-icons/ai";

export const skillsLibs = [
  { 
    icon: FaReact, 
    label: "React.js" 
  },
  { icon: SiNextdotjs, 
    label: "Next.js" 
  },
  { 
    icon: FaVuejs, 
    label: "Vue.js" 
  },
  { 
    icon: SiAngular, 
    label: "Angular" 
  },
  { 
    icon: SiDotnet, 
    label: "ASP.NET" 
  },
  { 
    icon: FaLaravel, 
    label: "Laravel" 
  },
  { 
    icon: SiTestinglibrary, 
    label: "Testing Library" 
  },
    { 
    icon: SiJest, 
    label: "Jest" 
  },
  { 
    icon: AiOutlineExperiment, 
    label: "Karma" 
  },
  { 
    icon: SiJasmine, 
    label: "Jasmine" 
  },
  { 
    icon: RiTailwindCssLine, 
    label: "Tailwind CSS" 
  },
  { 
    icon: FaNpm, 
    label: "NPM" 
  },
];

// Função Fake de API
export async function getSkillsLibs() {
  return new Promise<typeof skillsLibs>((resolve) => {
    setTimeout(() => resolve(skillsLibs), 300); // simula delay
  });
}
