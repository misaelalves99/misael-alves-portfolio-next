// types/project-data.ts
import { StaticImageData } from "next/image";

export interface ProjectData {
  id: number;
  img: StaticImageData;
  title: string;
  desc: string;
  icons: string[];
  demo: string;
  github: string;
}
