"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    text: "T2BArchitects didn't just design our home — they gave us a way of living we hadn't imagined was possible.",
    author: "Mr. Praveen",
    role: "Residence, Madurai — 2026",
  },
  {
    text: "The team handled architecture, interiors and execution seamlessly. The experience was stress-free.",
    author: "Mr. G.Anand",
    role: "Apartment Project, Trichy — 2025",
  },
  {
    text: "Their attention to detail and construction quality exceeded our expectations.",
    author: "Mr. Karthick",
    role: "SoleSpace Footwears — 2025",
  },
];

const basePath =
  process.env.NODE_ENV === 'production'
    ? '/forma-website'
    : '';

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };
  
  return (
    <section id="testimonials">
      <h3 className="section-title reveal">
        Stories Behind
        <br />
        Our <em>Spaces</em>
      </h3>
      <div className={`${styles.container} reveal`}>
        {/* Video Testimonial */}

        <div className={styles.videoCard}>
          <video
            ref={videoRef}
            className={styles.video}
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
          >
             <source src={`${basePath}/videos/testimonials.mp4`} type="video/mp4" />
          </video>

          <button
            className={styles.muteButton}
            onClick={toggleMute}
            aria-label={muted ? "Unmute Video" : "Mute Video"}
          >
            {muted ? "🔇" : "🔊"}
          </button>
        </div>

        <div className={styles.testimonialCard}>
          <p className={styles.text}>"{testimonials[current].text}"</p>

          <p className={styles.author}>{testimonials[current].author}</p>

          <p className={styles.role}>{testimonials[current].role}</p>

          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={index === current ? styles.activeDot : styles.dot}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}