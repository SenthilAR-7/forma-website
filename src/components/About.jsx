import styles from './About.module.css'

const stats = [
  { num: '6+', label: 'Years of Practice'   },
  { num: '104+', label: 'Projects Completed'  },
  // { num: '24',  label: 'Design Awards'       },
  // { num: '12',  label: 'Countries Built'     },
]
const basePath =
  process.env.NODE_ENV === 'production'
    ? '/forma-website'
    : '';

export default function About() {
  return (
    <section id="about">
      <div className={styles.grid}>
        <div className={`${styles.imageWrap} reveal`}>
          <img
            src={`${basePath}/firm.png`}
            alt="T2BArchitects Architecture Firm"
            loading="lazy"
          />
          <div className={styles.accent} />
        </div>

        <div className={styles.text}>
          <span className={`section-label reveal`}>Our Firm</span>

          <h2 className={`section-title reveal`}>
            Architecture<br />rooted in <em>purpose</em>
          </h2>

          <p className="reveal reveal-delay-1">
            Founded on the belief that great architecture transcends aesthetics,
            T2BArchitects creates spaces that respond to their context — the climate,
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