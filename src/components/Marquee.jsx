import styles from './Marquee.module.css'

const items = ['Architecture','Interior Design','Landscape','Urban Planning','Spatial Concepts','Renovation']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={i % 2 === 1 ? styles.dot : ''}>
            {i % 2 === 1 ? '·' : item}
          </span>
        ))}
      </div>
    </div>
  )
}
