import { useRef, useEffect } from 'react';

export default function StatLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stats = [
      { name: 'Performance', color: '#00ff88', x: 0.1 },
      { name: 'Innovation', color: '#ff00ff', x: 0.3 },
      { name: 'Quality', color: '#00ccff', x: 0.5 },
      { name: 'Efficiency', color: '#ffff00', x: 0.7 },
      { name: 'Reliability', color: '#ff6ec7', x: 0.9 }
    ];

    const animate = () => {
      time += 0.01;
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const baseY = canvas.height * 0.5;
      const lineLength = canvas.width * 0.15;

      stats.forEach((stat, idx) => {
        const xPos = canvas.width * stat.x;

        // Wave motion
        const wave1 = Math.sin(time + idx) * 20;
        const wave2 = Math.sin(time * 0.7 + idx * 0.5) * 15;
        const wave3 = Math.cos(time * 1.3 + idx) * 10;
        const offsetY = wave1 + wave2 + wave3;

        // Main line
        ctx.strokeStyle = stat.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.moveTo(xPos - lineLength / 2, baseY + offsetY);
        ctx.lineTo(xPos + lineLength / 2, baseY + offsetY);
        ctx.stroke();

        // Glowing effect
        ctx.shadowColor = stat.color;
        ctx.shadowBlur = 20;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.moveTo(xPos - lineLength / 2, baseY + offsetY);
        ctx.lineTo(xPos + lineLength / 2, baseY + offsetY);
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Data points
        const dataPoints = 5;
        for (let i = 0; i < dataPoints; i++) {
          const pointX = xPos - lineLength / 2 + (lineLength / (dataPoints - 1)) * i;
          const pointY = baseY + offsetY + Math.sin(time * 1.5 + i + idx) * 8;
          const size = 3 + Math.sin(time * 2 + i) * 2;

          // Pulsing glow ring
          ctx.strokeStyle = stat.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.6 - Math.sin(time * 3 + i) * 0.3;
          ctx.beginPath();
          ctx.arc(pointX, pointY, size * 3, 0, Math.PI * 2);
          ctx.stroke();

          // Core point
          ctx.fillStyle = stat.color;
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(pointX, pointY, size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Percentage value
        const value = Math.round(75 + Math.sin(time * 0.5 + idx) * 20);
        ctx.fillStyle = stat.color;
        ctx.globalAlpha = 0.9;
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${value}%`, xPos, baseY + offsetY - 35);

        // Label
        ctx.fillStyle = 'rgba(210, 215, 230, 0.7)';
        ctx.font = '12px Arial';
        ctx.fillText(stat.name, xPos, baseY + offsetY + 45);
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
        pointerEvents: 'none',
        opacity: 0.6
      }}
    />
  );
}
