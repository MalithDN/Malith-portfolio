import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScroll'
import './ScrollReveal.css'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const isVisible = useScrollReveal(ref, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'reveal' : ''} ${direction} ${className}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}
