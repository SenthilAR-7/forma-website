'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#about',    label: 'Studio'   },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#reels',    label: 'Journal'  },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

        {/* Logo image */}
        <a href="#home" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="T2B Architects — Architecture & Interior Design Firm"
            width={240}
            height={80}
            className={styles.logoImg}
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>Enquire</a>

        {/* Hamburger (mobile) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        {/* Logo in drawer */}
        <div className={styles.drawerLogoWrap}>
          <Image
            src="/logo.png"
            alt="T2B Architects"
            width={200}
            height={72}
            className={styles.drawerLogoImg}
          />
        </div>

        <ul className={styles.drawerLinks}>
          {navLinks.map(({ href, label }, i) => (
            <li key={href} style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.06}s` : '0s' }}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={styles.drawerCta} onClick={closeMenu}>
          Enquire Now
        </a>
      </div>
    </>
  )
}
