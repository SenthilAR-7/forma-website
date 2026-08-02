'use client'
import { useState, useRef } from 'react'
import styles from './Services.module.css'

const services = [
  { num: '01', title: 'Architectural Design',  desc: 'From initial concept to construction documents — we guide every stage of the architectural process with clarity and intent, tailoring each design to your unique brief.' },
  { num: '02', title: 'Interior Architecture', desc: 'Spaces that feel composed and lived-in from the first moment. Our interiors balance materiality, proportion, and narrative — crafted to outlast trends.' },
  { num: '03', title: 'Landscape Design',      desc: 'We design the ground beneath your building as carefully as the walls above it — integrating water, vegetation, and topography into a seamless whole.' },
  { num: '04', title: 'Heritage Restoration',  desc: 'Sensitive and rigorous restoration of historic structures — preserving memory while meeting contemporary needs with minimal visual intrusion.' },
  { num: '05', title: 'Urban Consulting',      desc: 'Master planning, density studies, and community-driven urban design strategies T2B municipalities and developers shaping tomorrow\'s cities.' },
]

const basePath =
  process.env.NODE_ENV === 'production'
    ? '/forma-website'
    : '';

export default function Services() {
  const [open, setOpen] = useState(0)

  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="services">
      <div className={styles.inner}>
        <div>
          <span className="section-label reveal">What We Offer</span>
          <h2 className="section-title reveal">
            From Concept
            <br />
            <em>to Completion</em>
          </h2>
          <div className={`${styles.visual} reveal reveal-delay-1`}>
            <video
              ref={videoRef}
              className={styles.serviceVideo}
              loop
              playsInline
              preload="metadata"
              onClick={toggleVideo}
            >
             <source src={`${basePath}/videos/about-video.mp4`} type="video/mp4" />
            </video>

            {!playing && (
              <button
                className={styles.playPauseBtn}
                onClick={toggleVideo}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
                aria-label="Play Video"
              >
                ▶
              </button>
            )}
          </div>
        </div>

        <div className={`${styles.list} reveal reveal-delay-2`}>
          {services.map(({ num, title, desc }, i) => (
            <div
              key={num}
              className={`${styles.item} ${open === i ? styles.open : ""}`}
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
  );
}
