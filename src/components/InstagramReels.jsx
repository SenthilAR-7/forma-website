'use client'
import { useRef, useState, useEffect } from 'react'
import styles from './InstagramReels.module.css'

const reels = [
  { title: 'Villa Serrinha',       sub: 'Construction Time-lapse' },
  { title: 'Meridian Tower',       sub: 'Site Walk · 4K'          },
  { title: 'Design Process',       sub: 'Behind the Firm'         },
  { title: 'Casa Bruma',           sub: 'Project Reveal'          },
  { title: 'Khin Cultural Centre', sub: 'Architecture Tour'       },
]

export default function InstagramReels() {
  const trackRef    = useRef(null)
  const [dragging,  setDragging]  = useState(false)
  const [startX,    setStartX]    = useState(0)
  const [scrollLeft,setScrollL]   = useState(0)
  const [progress,  setProgress]  = useState(0)

  /* Update progress bar on scroll */
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const max  = el.scrollWidth - el.clientWidth
      setProgress(max > 0 ? el.scrollLeft / max : 0)
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  /* Mouse drag */
  const onMouseDown = (e) => {
    setDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollL(trackRef.current.scrollLeft)
    trackRef.current.style.cursor = 'grabbing'
  }
  const stopDrag = () => {
    setDragging(false)
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }
  const onMouseMove = (e) => {
    if (!dragging) return
    e.preventDefault()
    const x    = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.6
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  /* Arrow buttons */
  const scrollBy = (dir) => {
    const card = trackRef.current.querySelector('[class*="card"]')
    const gap  = 24
    const step = card ? card.offsetWidth + gap : 380
    trackRef.current.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id="reels">
      {/* Header */}
      <div className={styles.header}>
        <div>
          <span className="section-label">As Seen On</span>
          <h2 className="section-title">
            Follow our <em>journey</em><br />on Instagram
          </h2>
        </div>
        <div className={styles.headerRight}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaLink}
          >
            <div className={styles.instaIcon}>✦</div>
            @t2b.architects
          </a>
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={() => scrollBy(-1)} aria-label="Previous">←</button>
            <button className={styles.arrow} onClick={() => scrollBy(1)}  aria-label="Next">→</button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        className={styles.track}
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={onMouseMove}
      >
        {reels.map(({ title, sub }) => (
          <div key={title} className={styles.card}>
            {/*
              REPLACE this .placeholder with your Instagram <blockquote> embed code.
              Steps: Instagram Reel → ⋯ → Embed → copy <blockquote> → paste here.
            */}
            <div className={styles.placeholder}>
              <div className={styles.playIcon} />
              <div className={styles.placeholderText}>
                <p>{title}</p>
                <span>{sub}</span>
              </div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openBtn}
              >
                Watch on Instagram ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progressWrap}>
        <div
          className={styles.progressFill}
          style={{ left: `${progress * (100 - (100 / reels.length))}%` }}
        />
      </div>

      <div className={styles.note}>
        <p>📌 Developer Note — Replace placeholders with real Instagram embeds:</p>
        <p>
          On Instagram → open your Reel → tap ⋯ → <strong>Embed</strong> → copy the{' '}
          <code>&lt;blockquote&gt;</code> code → paste inside any{' '}
          <code>.card</code> div, replacing the <code>.placeholder</code> block.
        </p>
      </div>
    </section>
  )
}
