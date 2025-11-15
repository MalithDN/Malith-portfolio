/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#61dafb',
        secondary: '#9b5cff',
        accent: '#ff6ec7',
        dark: '#050505',
        'dark-bg': '#0a0a14',
        'dark-card': '#0a0a0f',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite alternate',
        'gradient-shift-12': 'gradient-shift-12 12s ease-in-out infinite alternate',
        'gradient-shift-14': 'gradient-shift-14 14s ease-in-out infinite alternate',
        'fade-in-down': 'fade-in-down 0.8s ease-out 0.2s both',
        'fade-in-scale': 'fade-in-scale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both',
        'float-up': 'float-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'pulse-custom': 'pulse-custom 2s ease-in-out infinite',
        'floaty': 'floaty 4s ease-in-out infinite',
        'caret-blink': 'caret-blink 1.1s steps(1) infinite',
        'photo-fade-in': 'photo-fade-in 1s ease-out',
        'avatar-glow': 'avatar-glow infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse infinite',
        'profile-glow': 'profile-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'gradient-shift-12': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'gradient-shift-14': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'fade-in-down': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-scale': {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' }
        },
        'float-up': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-custom': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(97,218,251,0.6), 0 0 0 0 rgba(97,218,251,0.4)' },
          '50%': { boxShadow: '0 0 16px rgba(97,218,251,0.8), 0 0 8px 2px rgba(97,218,251,0.2)' }
        },
        'floaty': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'caret-blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        },
        'photo-fade-in': {
          'from': { opacity: '0.6' },
          'to': { opacity: '1' }
        },
        'avatar-glow': {
          'from': { boxShadow: '0 12px 30px rgba(0,0,0,0.25), 0 0 14px rgba(100,108,255,0.18) inset' },
          'to': { boxShadow: '0 12px 30px rgba(0,0,0,0.25), 0 0 34px rgba(100,108,255,0.35) inset' }
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(100, 108, 255, 0.3), 0 0 40px rgba(97, 218, 251, 0.2), inset 0 0 20px rgba(100, 108, 255, 0.1)'
          },
          '50%': {
            boxShadow: '0 0 30px rgba(100, 108, 255, 0.5), 0 0 60px rgba(97, 218, 251, 0.3), inset 0 0 30px rgba(100, 108, 255, 0.2)'
          }
        },
        'glow-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(97, 218, 251, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(97, 218, 251, 0.6))' }
        },
        'profile-glow': {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(97, 218, 251, 0.6), inset 0 0 30px rgba(97, 218, 251, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 50px rgba(97, 218, 251, 0.8), inset 0 0 30px rgba(97, 218, 251, 0.3)'
          }
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

