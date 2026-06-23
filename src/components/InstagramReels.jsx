import styles from './InstagramReels.module.css'
import { useRef } from "react";

const reels = [
  {
    url: "https://www.instagram.com/reel/DYv5EurvpU4/",
    title: "Luxury Villa Construction",
    sub: "Time-lapse"
  },
  {
    url: "https://www.instagram.com/reel/DYjDwCjgsex/",
    title: "Interior Walkthrough",
    sub: "Modern Residence"
  },
  {
    url: "https://www.instagram.com/reel/DVyNEkRplCx/",
    title: "Design Process",
    sub: "Behind The Scenes"
  }
  ,
  {
    url: "https://www.instagram.com/reel/DVm7CLeDx2C/",
    title: "Designn Process",
    sub: "Behindd The Scenes"
  }
]

export default function InstagramReels() {
  const scrollRef = useRef(null);
  return (
    <section className={styles.section} id="reels">
      <div className={styles.header}>
        <div>
          <h2 className="section-title">
            Follow our <em>journey</em>
            <br />
            on Instagram
          </h2>
        </div>
        {/* <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instaLink}
        >
          <div className={styles.instaIcon}>✦</div>
          @T2BArchitects.Firm
        </a> */}
      </div>

      <div ref={scrollRef} className={styles.grid}>
        {reels.map(({ title, sub, url }, i) => (
          <div
            key={title}
            className={`${styles.card} reveal`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            
            <iframe
              src={`${url}embed`}
              title={title}
              loading="lazy"
              className={styles.reelFrame}
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}
