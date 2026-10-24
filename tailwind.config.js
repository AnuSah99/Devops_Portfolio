/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#06090e',
          surface: '#0b111a',
          card: '#101726',
          border: '#1e293b',
          'border-focus': '#00ff88',
          neon: '#00ff88',
          'neon-dim': 'rgba(0, 255, 136, 0.15)',
          electric: '#00d2ff',
          'electric-dim': 'rgba(0, 210, 255, 0.15)',
          purple: '#a855f7',
          amber: '#f59e0b',
          crimson: '#ef4444',
          muted: '#94a3b8',
          subtle: '#64748b'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'grid-float': 'gridFloat 20s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0,255,136,0.2), 0 0 15px rgba(0,255,136,0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(0,255,136,0.4), 0 0 30px rgba(0,255,136,0.2)' },
        },
        gridFloat: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        }
      },
      backgroundImage: {
        'cyber-grid': 'radial-gradient(circle, rgba(0, 255, 136, 0.08) 1px, transparent 1px)',
        'cyber-dots': 'radial-gradient(rgba(0, 210, 255, 0.12) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}
