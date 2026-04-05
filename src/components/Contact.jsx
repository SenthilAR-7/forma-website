'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

const details = [
  { label: 'Studio Address', val: '14 Corniche Boulevard\nChennai, Tamil Nadu 600001' },
  { label: 'Email',          val: 'hello@forma.studio'  },
  { label: 'Phone',          val: '+91 99400 00000'      },
  { label: 'Follow',         val: '@forma.studio'        },
]

const projectTypes = [
  'Residential — New Build',
  'Residential — Renovation',
  'Commercial',
  'Cultural / Civic',
  'Interior Design',
  'Heritage Restoration',
  'Other',
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact">
      <div className={styles.grid}>
        {/* Info */}
        <div className={styles.info}>
          <span className="section-label reveal">Get In Touch</span>
          <h2 className="section-title reveal">
            Let&apos;s build<br /><em>something</em><br />extraordinary
          </h2>
          {details.map(({ label, val }) => (
            <div key={label} className={`${styles.detail} reveal reveal-delay-1`}>
              <p className={styles.detailLabel}>{label}</p>
              <p className={styles.detailVal} style={{ whiteSpace: 'pre-line' }}>{val}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className={`${styles.form} reveal reveal-delay-1`} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.group}>
              <label htmlFor="fname">First Name</label>
              <input id="fname" type="text" placeholder="Your name" required />
            </div>
            <div className={styles.group}>
              <label htmlFor="lname">Last Name</label>
              <input id="lname" type="text" placeholder="Family name" />
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="project">Project Type</label>
            <select id="project">
              <option value="">Select a project type</option>
              {projectTypes.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className={styles.group}>
            <label htmlFor="message">Your Vision</label>
            <textarea id="message" rows={4} placeholder="Tell us about your project, site, and timeline…" />
          </div>
          <button type="submit" className={`${styles.submit} ${sent ? styles.sent : ''}`}>
            {sent ? 'Message Sent ✓' : 'Send Enquiry →'}
          </button>
        </form>
      </div>
    </section>
  )
}
