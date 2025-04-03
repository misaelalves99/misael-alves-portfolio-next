// src/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer"; // Adicionando MainContainer globalmente

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu E-commerce",
  description: "E-commerce desenvolvido com Next.js e TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <MainContainer>
            {children}
        </MainContainer>
        <Footer />
      </body>
    </html>
  );
}
