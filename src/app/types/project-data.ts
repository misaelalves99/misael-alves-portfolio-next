// types/project-data.ts
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ProjectData {
  id: number;
  img: StaticImageData;
  title: string;
  desc: string;
  icons: IconType[];
  demo: string;
  github: string;
  category: string
}
