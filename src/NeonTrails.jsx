import { useEffect, useRef } from 'react'

// Enhanced neon trails with more vibrant effects
export default function NeonTrails() {
  const canvasRef = useRef(null)
  const rafRef = useRef()
  const trailsRef = useRef([])
  const lastSpawnRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    function onResize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', onResize)

    // Enhanced color palettes with more vibrant neon
    function randomColor() {
      const palettes = [
        ['#ff006e', '#ff1493'],      // Hot pink
        ['#00f5ff', '#00bfff'],      // Bright cyan
        ['#9d4edd', '#7209b7'],      // Purple
        ['#3a86ff', '#06ffa5'],      // Blue to mint
        ['#ff006e', '#ffbe0b'],      // Pink to gold
        ['#fb5607', '#ff006e'],      // Orange to pink
        ['#06ffa5', '#118ab2'],      // Mint to blue
        ['#ff006e', '#8338ec'],      // Pink to purple
      ]
      return palettes[Math.floor(Math.random() * palettes.length)]
    }

    function spawnTrail() {
      const speed = 2.5 + Math.random() * 3.5
      const length = 160 + Math.random() * 280
      const thickness = 2.5 + Math.random() * 4
      const angle = Math.random() < 0.5 ? Math.PI * 0.15 : Math.PI * 0.85
      const [c1, c2] = randomColor()
      const startX = Math.random() * width
      const startY = Math.random() * height
      trailsRef.current.push({
        x: startX,
        y: startY,
        angle,
        speed,
        length,
        life: 0,
        maxLife: 2800,
        thickness,
        c1,
        c2,
        _born: performance.now(),
      })
    }

    function drawTrail(t) {
      const dx = Math.cos(t.angle)
      const dy = Math.sin(t.angle)
      const x2 = t.x + dx * t.length
      const y2 = t.y + dy * t.length
      const grad = ctx.createLinearGradient(t.x, t.y, x2, y2)
      grad.addColorStop(0, t.c1)
      grad.addColorStop(0.5, t.c2)
      grad.addColorStop(1, t.c1)
      ctx.strokeStyle = grad
      ctx.lineWidth = t.thickness
      ctx.shadowColor = t.c2
      ctx.shadowBlur = 24
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.beginPath()
      ctx.moveTo(t.x, t.y)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    function step(ts) {
      // Clear with gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height)
      bgGrad.addColorStop(0, 'rgba(10,10,20,0.3)')
      bgGrad.addColorStop(1, 'rgba(21,16,31,0.3)')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // Spawn a new trail every ~700-1200ms
      if (!lastSpawnRef.current) lastSpawnRef.current = ts
      if (ts - lastSpawnRef.current > 700 + Math.random() * 500) {
        spawnTrail()
        lastSpawnRef.current = ts
      }

      const now = performance.now()
      trailsRef.current = trailsRef.current.filter((t) => now - (t._born ?? now) < t.maxLife)
      for (const t of trailsRef.current) {
        if (!t._born) t._born = now
        const age = now - t._born
        t.x += Math.cos(t.angle) * t.speed
        t.y += Math.sin(t.angle) * t.speed
        const alpha = 1 - age / t.maxLife
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha))
        drawTrail(t)
        ctx.globalAlpha = 1
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        background: 'transparent',
      }}
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}


