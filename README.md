# Modern Technical Portfolio

A stunning, modern portfolio website built with React and Vite featuring advanced scroll effects, parallax animations, and interactive components.

## Features

### 🎨 Modern Design
- Glassmorphism effects with backdrop blur
- Animated gradient text and backgrounds
- Neon trails and star field effects
- Professional color scheme with cyan, purple, and pink accents

### 🎬 Scroll Effects
- **ScrollReveal Component** - Automatic animation when sections enter viewport
- **ParallaxHeader** - Header that responds to scroll position
- **useScroll Hook** - Track scroll position and direction
- **Staggered Animations** - Cascading reveal effects for child elements
- **Smooth Cubic-Bezier Timing** - Modern animation curves

### ✨ Interactive Components
- **Typewriter Effect** - Animated text typing effect
- **Tech Stats** - Animated statistics counter
- **GitHub Effect** - Falling code character animation
- **Robot Animation** - Interactive robot character
- **Neon Trails** - Trail effect on cursor movement

### 📱 Responsive Design
- Mobile-friendly layout
- Touch-optimized interactions
- Breakpoints for all screen sizes
- No layout shifts on animations

### ⚡ Performance Optimized
- GPU-accelerated CSS animations
- Intersection Observer for viewport detection
- Passive scroll listeners
- Production build: ~65KB JS (gzipped)

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev

# Open in browser
http://localhost:5173 (or next available port)
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Serve the dist/ folder
```

## Project Structure

```
src/
├── components/
│   ├── ParallaxHeader.jsx      # Header with scroll parallax
│   ├── ParallaxHeader.css
│   ├── ScrollReveal.jsx         # Section reveal animations
│   └── ScrollReveal.css         # Animation definitions
├── hooks/
│   └── useScroll.js             # Scroll tracking & Intersection Observer
├── App.jsx                       # Main app component
├── App.css                       # Main styles
├── main.jsx                      # React entry point
├── Starfield.jsx                # Background starfield
├── NeonTrails.jsx               # Cursor trail effects
├── Typewriter.jsx               # Typing animation
├── Robot.jsx                    # Robot character
├── TechStats.jsx                # Statistics component
└── GitHubEffect.jsx             # Falling code animation

dist/                            # Production build output
public/                          # Static assets
```

## Key Components

### ScrollReveal
Wraps sections to trigger animations on scroll:
```jsx
<ScrollReveal>
  <section>
    <h2>Your Section</h2>
    <p>Content animates in when scrolling...</p>
  </section>
</ScrollReveal>
```

### useScroll Hook
Track scroll position and direction:
```jsx
const { scrollY, direction } = useScroll()
```

### ParallaxHeader
Header with parallax and scroll effects (automatically used):
```jsx
<ParallaxHeader />
```

## Customization

### Adjust Animation Timing
Edit `src/components/ScrollReveal.css`:
```css
.scroll-reveal {
  transition: all 0.8s cubic-bezier(...); /* Change 0.8s */
}
```

### Change Colors
Edit `src/App.css` - look for:
```css
background-image: linear-gradient(90deg, #ff6ec7, #9b5cff, #61dafb, ...);
```

### Modify Parallax Speed
Edit `src/components/ParallaxHeader.jsx`:
```jsx
style={{ transform: `translateY(${scrollY * 0.5}px)` }} /* Adjust 0.5 */
```

### Add More Sections
Wrap new sections with ScrollReveal component for automatic animations.

## Dependencies

- **React 19.1.1** - UI library
- **Vite 7.1** - Build tool
- **TailwindCSS 4.1** - Utility CSS (optional)
- **PostCSS & Autoprefixer** - CSS processing

## Browser Support

- Chrome/Edge 51+
- Firefox 55+
- Safari 12.1+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Page Load**: ~2-3 seconds
- **Animation FPS**: 60 FPS on modern devices
- **Bundle Size**: 211 KB (65 KB gzipped)
- **CSS Bundle**: 15 KB (3.94 KB gzipped)

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Documentation

- **SCROLL_EFFECTS.md** - Technical details of scroll features
- **SCROLL_EFFECTS_VISUAL.md** - Visual guides and examples
- **SCROLL_QUICK_START.md** - Quick reference for developers
- **SCROLL_IMPLEMENTATION_COMPLETE.md** - Implementation summary

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## Browser DevTools Tips

**Slow down animations for testing:**
1. Open DevTools → ⋮ → More tools → Rendering
2. Set frame rate to "1" (6x slower)

**Inspect scroll reveal elements:**
```javascript
document.querySelectorAll('.scroll-reveal')
document.querySelector('.scroll-reveal.reveal')
```

## Troubleshooting

### Animations not triggering?
- Check browser console for errors
- Ensure element has `.scroll-reveal` class
- Verify element enters viewport
- Check CSS file is imported

### Performance issues?
- Reduce number of animated elements
- Increase animation duration
- Close browser tabs
- Check DevTools Performance tab

### Header parallax not working?
- Ensure using ParallaxHeader component
- Check useScroll hook is imported
- Verify CSS transitions are enabled

## License

MIT License - Feel free to use for personal and commercial projects

## Contributing

Contributions welcome! Submit issues or pull requests to improve the portfolio.

## Contact

For questions or feedback about this portfolio template, please open an issue or contact the author.

---

**Ready to deploy? Your modern portfolio is production-ready!** 🚀

Visit the [documentation](./SCROLL_QUICK_START.md) for more examples and customization options.
