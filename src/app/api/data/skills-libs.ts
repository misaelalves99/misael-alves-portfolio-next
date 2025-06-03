// src/app/api/data/skills-libs.ts

import { FaReact, FaNpm, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";

export const skillsLibs = [
  { 
    icon: FaReact, 
    label: "React" 
  },
  { icon: SiNextdotjs, 
    label: "Next.js" 
  },
  { 
    icon: FaVuejs, 
    label: "Vue.js" 
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

// Simula um fetch de API
export async function getSkillsLibs() {
  return new Promise<typeof skillsLibs>((resolve) => {
    setTimeout(() => resolve(skillsLibs), 300); // simula delay
  });
}
