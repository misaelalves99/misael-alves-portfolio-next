// src/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Misael Alves | Desenvolvedor React e Next.js",
    template: "%s | Misael Alves",
  },
  description:
    "Portfólio de Misael Alves, desenvolvedor front-end focado em React, Next.js e TypeScript para interfaces web profissionais e responsivas.",
  keywords: ["Misael Alves", "React", "Next.js", "TypeScript", "Desenvolvedor Front-end", "Portfólio"],
  authors: [{ name: "Misael Alves" }],
  creator: "Misael Alves",
  openGraph: {
    title: "Misael Alves | Desenvolvedor React e Next.js",
    description:
      "Desenvolvimento de interfaces web profissionais e responsivas com React, Next.js e TypeScript.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Misael Alves | Desenvolvedor React e Next.js",
    description:
      "Desenvolvimento de interfaces web profissionais e responsivas com React, Next.js e TypeScript.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
