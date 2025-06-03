// app/components/footer/Footer.tsx

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <p>© {new Date().getFullYear()} Misael Alves. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
