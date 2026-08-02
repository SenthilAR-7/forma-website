import styles from "./Footer.module.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const basePath =
  process.env.NODE_ENV === 'production'
    ? '/forma-website'
    : '';
    
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img
            src={`${basePath}/nav_logo.png`}
            alt="T2B Architects Logo"/>
        </div>

        <div className={styles.copyright}>
          © 2026 T2B Architects. All rights reserved.
        </div>

        <div className={styles.social}>
          <a
            href="https://www.instagram.com/t2b_architects"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/9750433204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
