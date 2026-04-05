import styles from './Process.module.css'

const steps = [
  { num: '01', title: 'Discovery',    desc: 'Deep listening sessions to understand your vision, lifestyle, and the site\'s inherent character.' },
  { num: '02', title: 'Concept',      desc: 'Translating ambition into form — sketches, models, and spatial narratives that guide the design.' },
  { num: '03', title: 'Development',  desc: 'From schematic design through technical drawings — we refine every detail before breaking ground.' },
  { num: '04', title: 'Realisation',  desc: 'On-site supervision and quality control to ensure the built result honours the original vision.' },
]

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <span className="section-label reveal">How We Work</span>
      <h2 className="section-title reveal">Our <em>process</em></h2>
      <div className={styles.steps}>
        {steps.map(({ num, title, desc }, i) => (
          <div key={num} className={`${styles.step} reveal reveal-delay-${i}`}>
            <div className={styles.num}>{num}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
