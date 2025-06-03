// src/app/api/data/skills-langs.ts
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

export const skillsLangs = [
  { 
    icon: SiJavascript, 
    label: "JavaScript" 
  },
  { 
    icon: SiTypescript, 
    label: "TypeScript" 
  },
  { 
    icon: FaHtml5, 
    label: "HTML5" 
  },
  { 
    icon: FaCss3Alt, 
    label: "CSS3" 
  },
];

// Simula um fetch de API
export async function getSkillsLangs() {
  return new Promise<typeof skillsLangs>((resolve) => {
    setTimeout(() => resolve(skillsLangs), 300); // simula delay
  });
}
