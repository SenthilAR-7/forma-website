'use client'
import { useState } from 'react'
import styles from './Services.module.css'

const services = [
  { num: '01', title: 'Architectural Design',  desc: 'From initial concept to construction documents — we guide every stage of the architectural process with clarity and intent, tailoring each design to your unique brief.' },
  { num: '02', title: 'Interior Architecture', desc: 'Spaces that feel composed and lived-in from the first moment. Our interiors balance materiality, proportion, and narrative — crafted to outlast trends.' },
  { num: '03', title: 'Landscape Design',      desc: 'We design the ground beneath your building as carefully as the walls above it — integrating water, vegetation, and topography into a seamless whole.' },
  { num: '04', title: 'Heritage Restoration',  desc: 'Sensitive and rigorous restoration of historic structures — preserving memory while meeting contemporary needs with minimal visual intrusion.' },
  { num: '05', title: 'Urban Consulting',      desc: 'Master planning, density studies, and community-driven urban design strategies for municipalities and developers shaping tomorrow\'s cities.' },
]

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section id="services">
      <div className={styles.inner}>
        <div>
          <span className="section-label reveal">What We Offer</span>
          <h2 className="section-title reveal">
            A complete<br /><em>design</em><br />experience
          </h2>
          <div className={`${styles.visual} reveal reveal-delay-1`}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
              alt="Design Studio"
              loading="lazy"
            />
            <span className={styles.tag}>Est. 2006</span>
          </div>
        </div>

        <div className={`${styles.list} reveal reveal-delay-2`}>
          {services.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className={`${styles.item} ${open === i ? styles.open : ''}`}
              onClick={() => setOpen(i)}
            >
              <span className={styles.num}>{num}</span>
              <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>
              </div>
              <span className={styles.arrow}>+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
