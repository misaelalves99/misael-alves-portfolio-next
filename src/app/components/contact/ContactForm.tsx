// src/app/contact/components/ContactForm.tsx

"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensagem enviada por: ${formData.name} (${formData.email})\n\n${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
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

          <button type="submit" className={styles.formSubmit}>Enviar</button>
        </form>
      </div>
    </section>
  );
}
