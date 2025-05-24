// app/types/project-data-all.ts

import { IconType } from "react-icons";

export interface ProjectDataAll {
  id: number;
  title: string;
  desc: string;
  icons: string[];
  demo: string;
  github: string;
  iconComponent?: IconType;
}
