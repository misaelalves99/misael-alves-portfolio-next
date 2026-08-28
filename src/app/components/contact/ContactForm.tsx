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
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Canal de contato temporariamente indisponível. Tente novamente mais tarde.");
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

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Não foi possível enviar sua mensagem.");
      }
    } catch (error: unknown) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erro inesperado. Tente novamente.");
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
              autoComplete="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Mensagem:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Conte brevemente sobre seu projeto ou necessidade"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.formSubmit}
            disabled={status === "loading"}
            aria-busy={status === "loading"}
          >
            {status === "loading" ? "Enviando..." : "Enviar mensagem"}
          </button>

          <div aria-live="polite" role="status">
            {status === "success" && (
              <p className={styles.successMsg}>Mensagem enviada com sucesso.</p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
