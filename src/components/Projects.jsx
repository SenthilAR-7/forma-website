import styles from './Projects.module.css'

const projects = [
  { type: 'Residential', name: 'Villa Serrinha',        year: '2024 — Lisbon, Portugal',  img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80' },
  { type: 'Commercial',  name: 'Meridian Tower',         year: '2023 — Mumbai, India',     img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=900&q=80'  },
  { type: 'Residential', name: 'Casa Bruma',             year: '2023 — Amalfi, Italy',     img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80'  },
  { type: 'Cultural',    name: 'Khin Cultural Centre',   year: '2022 — Bangalore, India',  img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1100&q=80' },
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <div>
          <span className="section-label reveal">Selected Work</span>
          <h2 className="section-title reveal">Our <em>Projects</em></h2>
        </div>
        <a href="#" className="btn-ghost reveal">All Projects</a>
      </div>

      <div className={`${styles.grid} reveal`}>
        {projects.map(({ type, name, year, img }) => (
          <div className={styles.card} key={name}>
            <img src={img} alt={name} loading="lazy" />
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
