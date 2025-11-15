import { useEffect, useRef } from 'react'
import './GitHubEffect.css'

export default function GitHubEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 80

    // Modern particle colors
    const PARTICLE_COLORS = [
      'rgba(97, 218, 251, 0.5)',     // Cyan
      'rgba(155, 92, 255, 0.4)',     // Purple
      'rgba(255, 110, 199, 0.4)',    // Pink
      'rgba(0, 245, 212, 0.5)',      // Mint
      'rgba(255, 190, 11, 0.3)',     // Gold
    ]

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = Math.random() * 0.5 + 0.2
        this.life = 1
        this.decay = Math.random() * 0.012 + 0.006
        this.size = Math.random() * 3 + 2
        this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
        this.angle = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.1
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life -= this.decay
        this.angle += this.rotationSpeed

        if (this.y > canvas.height) {
          this.y = -10
          this.x = Math.random() * canvas.width
          this.life = 1
        }
      }

      draw() {
        const opacity = Math.max(0, this.life)
        ctx.save()
        ctx.globalAlpha = opacity * 0.6
        ctx.fillStyle = this.color
        
        // Draw rotating square/diamond
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        ctx.restore()

        // Add glow
        ctx.globalAlpha = opacity * 0.3
        ctx.shadowColor = this.color.replace('0.', '0.')
        ctx.shadowBlur = 12
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      // Add subtle background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGrad.addColorStop(0, 'rgba(10, 10, 20, 0.1)')
      bgGrad.addColorStop(1, 'rgba(21, 16, 31, 0.1)')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="github-effect" />
}
