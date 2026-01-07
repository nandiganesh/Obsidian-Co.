/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0b0c0f',
        ivory: '#f5f1e8',
        ash: '#a0a3aa',
        warmgray: '#8b8680',
        porcelain: '#fbf7f1',
        stone: '#e4ded1',
        graphite: '#2f2a26',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 18px 60px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
