import { useEffect, useState, useRef, useCallback } from 'react'

export function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState('down')
  const previousScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY > previousScrollY.current) {
      setDirection('down')
    } else {
      setDirection('up')
    }

    setScrollY(currentScrollY)
    previousScrollY.current = currentScrollY
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { scrollY, direction }
}

export function useScrollReveal(ref, options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold, rootMargin })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, threshold, rootMargin])

  return isVisible
}
