import styles from './About.module.css'

const stats = [
  { num: '18+', label: 'Years of Practice'   },
  { num: '340', label: 'Projects Completed'  },
  { num: '24',  label: 'Design Awards'       },
  { num: '12',  label: 'Countries Built'     },
]

export default function About() {
  return (
    <section id="about">
      <div className={styles.grid}>
        <div className={`${styles.imageWrap} reveal`}>
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
            alt="FORMA Architecture Studio"
            loading="lazy"
          />
          <div className={styles.accent} />
        </div>

        <div className={styles.text}>
          <span className={`section-label reveal`}>Our Studio</span>
          <h2 className={`section-title reveal`}>
            Architecture<br />rooted in <em>purpose</em>
          </h2>
          <p className="reveal reveal-delay-1">
            Founded on the belief that great architecture transcends aesthetics,
            FORMA creates spaces that respond to their context — the climate,
            the culture, the people who inhabit them.
          </p>
          <p className="reveal reveal-delay-1">
            From bespoke residences to civic institutions, every project begins
            with listening. We distil ambition into form.
          </p>
          <div className={`${styles.stats} reveal reveal-delay-2`}>
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
