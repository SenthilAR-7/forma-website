'use client'
import { useEffect } from 'react'

/**
 * useReveal — attaches an IntersectionObserver that adds
 * the .visible class to every element with class .reveal
 * once it enters the viewport.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
