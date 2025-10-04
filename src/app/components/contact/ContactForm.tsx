// app/components/contact/ContactForm.tsx

"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import { FormData } from "@/app/types/form-data";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Substitua por sua chave real do Web3Forms
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Chave de acesso Web3Forms ausente. Adicione NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY no .env.local");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Erro ao enviar mensagem.");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Erro inesperado. Tente novamente.");
    }
  };

  return (
    <section className={styles.sectionContactForm}>
      <div className={styles.containerContactForm}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formContact}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Mensagem:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Digite sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.formSubmit}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>

          {status === "success" && (
            <p className={styles.successMsg}>✅ Mensagem enviada com sucesso!</p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>❌ {errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
