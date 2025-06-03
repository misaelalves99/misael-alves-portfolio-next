// app/components/main-container/MainContainer.tsx

import { ReactNode } from "react";
import styles from "./MainContainer.module.css";

interface MainContainerProps {
  children: ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  return <main className={styles.mainContainer}>{children}</main>;
}
