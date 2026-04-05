import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.logoLink}>
        <Image
          src="/logo.png"
          alt="T2B Architects"
          width={160}
          height={54}
          className={styles.logoImg}
        />
      </a>
      <p className={styles.copy}>© 2025 T2B Architects. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Pinterest</a>
      </div>
    </footer>
  )
}
