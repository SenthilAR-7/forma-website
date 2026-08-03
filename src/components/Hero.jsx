import { useState,useEffect } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

const heroImages = [
  '/hero/hero1.png',
  '/hero/hero2.png',
  '/hero/hero3.jpeg',
  '/hero/hero4.png',
]

const basePath =
  process.env.NODE_ENV === 'production'
    ? '/forma-website'
    : '';

export default function Hero() {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero} id="home">
      {/* Dot grid background */}
      <div className={styles.grid} />
      {/* Gold glow */}
      <div className={styles.glow} />

      {/* Hero text content */}
      <div className={styles.left}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <b>Architecture &amp; Interior Design Firm</b>
          </p>
          <h1 className={styles.title}>
            We design
            <br />
            <em>spaces that</em>
            <br />
            endure.
          </h1>
          <p className={styles.subtitle}>
            T2BArchitects crafts architecture that balances form and humanity —
            where every structure tells a story rooted in place, culture, and
            light.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.slider}>
          {heroImages.map((image, index) => (
            <Image
              key={index}
              src={`${basePath}${image}`}
              alt={`Hero ${index + 1}`}
              fill
              priority={index === 0}
              className={`${styles.heroImage} ${
                current === index ? styles.active : ""
              }`}
            />
          ))}
        </div>

        <div className={styles.dots}>
          {heroImages.map((_, index) => (
            <span
              key={index}
              className={current === index ? styles.activeDot : ""}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
