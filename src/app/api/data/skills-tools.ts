// src/app/api/data/skills-tools.ts
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

export const skillsTools = [
  { 
    icon: VscVscode, 
    label: "VS Code" 
  },
  { 
    icon: DiIllustrator, 
    label: "Illustrator" 
  },
  { 
    icon: FaFigma, 
    label: "Figma" 
  },
];

// Função Fake de API
export async function getSkillsTools() {
  return new Promise<typeof skillsTools>((resolve) => {
    setTimeout(() => resolve(skillsTools), 300); // simula delay
  });
}
