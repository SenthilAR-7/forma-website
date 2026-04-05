import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <div className={`${styles.testimonial} reveal`}>
      <p className={styles.text}>
        &ldquo;FORMA didn&apos;t just design our home — they gave us a way of living
        we hadn&apos;t imagined was possible. Every room is a quiet revelation.&rdquo;
      </p>
      <p className={styles.author}>Arjun &amp; Meera Nair</p>
      <p className={styles.role}>Residence, Kochi — 2024</p>
    </div>
  )
}
