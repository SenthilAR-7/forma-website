import styles from './Marquee.module.css'

const items = ['Architecture','Landscape','Urban Planning','Spatial Concepts','Residence','Commercial','Interior Design','Renovation','Office Interiors']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <span>{item}</span>
            <span className={styles.dot}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
