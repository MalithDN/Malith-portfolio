import { useEffect, useMemo, useRef, useState } from 'react'

export default function Typewriter({
  words = [],
  typingSpeedMs = 70,
  deletingSpeedMs = 40,
  pauseAtWordMs = 1200,
  loop = true,
}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timerRef = useRef()

  const currentWord = useMemo(() => (words.length ? words[wordIndex % words.length] : ''), [words, wordIndex])

  useEffect(() => {
    function tick() {
      const full = currentWord
      if (!isDeleting) {
        const next = full.slice(0, displayed.length + 1)
        setDisplayed(next)
        if (next === full) {
          setIsDeleting(true)
          timerRef.current = setTimeout(tick, pauseAtWordMs)
          return
        }
        timerRef.current = setTimeout(tick, typingSpeedMs)
      } else {
        const next = full.slice(0, Math.max(0, displayed.length - 1))
        setDisplayed(next)
        if (next.length === 0) {
          setIsDeleting(false)
          setWordIndex((i) => {
            const nextIndex = i + 1
            if (!loop && nextIndex >= words.length) return i // stop at last
            return nextIndex % words.length
          })
          timerRef.current = setTimeout(tick, typingSpeedMs)
          return
        }
        timerRef.current = setTimeout(tick, deletingSpeedMs)
      }
    }

    timerRef.current = setTimeout(tick, typingSpeedMs)
    return () => clearTimeout(timerRef.current)
  }, [currentWord, deletingSpeedMs, displayed.length, isDeleting, loop, pauseAtWordMs, typingSpeedMs, words.length])

  return (
    <span className="typewriter" aria-live="polite" aria-label={currentWord}>
      {displayed}
      <span className="caret" aria-hidden>|</span>
    </span>
  )
}


