// types/project.ts

import { StaticImageData } from "next/image";

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
};
