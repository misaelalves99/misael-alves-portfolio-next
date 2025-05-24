// types/project-data-Full.ts
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ProjectDataFull {
  id: number;
  img: StaticImageData;
  title: string;
  desc: string;
  icons: IconType[];
  demo: string;
  github: string;
  category: string
}
