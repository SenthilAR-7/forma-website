import styles from './Projects.module.css'

const projects = [
  { type: 'Residential', name: 'Sri Vari Illam',        year: '2026 — Madurai, India',  img: '/projectOne.png?w=1200&q=80' },
  { type: 'Commercial',  name: 'SoleSpace',         year: '2025 — Chennai, India',     img: '/projectTwo.png?w=900&q=80'  },
  { type: 'Commercial', name: 'Velu Military Mess',             year: '2023 — Dindugal, India',     img: '/projectThree.jpeg?w=700&q=80'  },
  { type: 'Commercial',    name: 'Jaihind Photography',   year: '2022 — Tirunelveli, India',  img: '/projectFour.png?w=1100&q=80' },
]

const basePath =
  process.env.NODE_ENV === 'production'
    ? '/forma-website'
    : '';

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <div>
          <span className="section-label reveal">Selected Work</span>
          <h2 className="section-title reveal">Our <em>Projects</em></h2>
        </div>
        {/* <a href="#" className="btn-ghost reveal">All Projects</a> */}
      </div>

      <div className={`${styles.grid} reveal`}>
        {projects.map(({ type, name, year, img }) => (
          <div className={styles.card} key={name}>
            <img src={`${basePath}${img}`} alt={name} loading="lazy" />
            <div className={styles.info}>
              <p className={styles.type}>{type}</p>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.year}>{year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
