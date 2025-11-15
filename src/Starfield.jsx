import { useRef, useEffect } from 'react';

const STAR_COUNT = 200;
const STAR_COLOR = 'rgba(255,255,255,0.9)';
const STAR_SIZE = 1.5;
const STAR_SPEED = 0.28;

// Different colored stars for more dynamic feel
const STAR_COLORS = [
  'rgba(255,255,255,0.9)',      // White
  'rgba(97,218,251,0.7)',       // Cyan
  'rgba(155,92,255,0.6)',       // Purple
  'rgba(255,110,199,0.5)',      // Pink
  'rgba(0,245,212,0.6)',        // Mint
];

function randomStar(canvas) {
  const { width, height } = canvas;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    z: Math.random() * width,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    brightness: Math.random() * 0.5 + 0.5,
  };
}

export default function Starfield() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', resizeCanvas);
    stars.current = Array.from({ length: STAR_COUNT }, () => randomStar(canvas));

    function draw() {
      // Dark gradient background instead of pure black
      const gradient = context.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0a0a14');      // Dark blue-black
      gradient.addColorStop(0.5, '#0f0f1a');    // Slightly lighter
      gradient.addColorStop(1, '#15101f');      // Dark purple-black
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      // Add subtle radial glow in background
      const radialGlow = context.createRadialGradient(width * 0.7, height * 0.2, 0, width * 0.7, height * 0.2, width);
      radialGlow.addColorStop(0, 'rgba(100, 108, 255, 0.05)');
      radialGlow.addColorStop(1, 'rgba(100, 108, 255, 0)');
      context.fillStyle = radialGlow;
      context.fillRect(0, 0, width, height);

      for (const star of stars.current) {
        star.z -= STAR_SPEED;
        if (star.z <= 0) {
          Object.assign(star, randomStar(canvas));
          star.z = width;
        }
        let k = 128.0 / star.z;
        let sx = width / 2 + star.x * k;
        let sy = height / 2 + star.y * k;
        if (sx < 0 || sx >= width || sy < 0 || sy >= height) {
          Object.assign(star, randomStar(canvas));
          star.z = width;
        } else {
          context.beginPath();
          context.arc(sx, sy, STAR_SIZE * star.brightness, 0, Math.PI * 2);
          context.fillStyle = star.color;
          context.shadowColor = star.color;
          context.shadowBlur = 12;
          context.fill();
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, #0a0a14 0%, #0f0f1a 50%, #15101f 100%)',
      }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
