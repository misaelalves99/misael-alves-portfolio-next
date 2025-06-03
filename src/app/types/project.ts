// app/types/project.ts

import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string | StaticImageData;
  demo: string;
  github: string;
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  icon3?: React.ReactNode;
  icon4?: React.ReactNode;
  icon5?: React.ReactNode;
  iconbtn1?: React.ReactNode;
  iconbtn2?: React.ReactNode;
  icons?: IconType[];
  iconComponent?: IconType;
};

export interface ProjectAll {
  id: number;
  title: string;
  desc: string;
  icons: IconType[];
  demo: string;
  github: string;
  iconComponent: IconType;
}
export interface ProjectFull {
  id: number;
  title: string;
  desc: string;
  img: string | StaticImageData;
  icons: IconType[];
  demo: string;
  github: string;
}

export interface ProjectWithIcons extends ProjectAll {
  category: string;
}
