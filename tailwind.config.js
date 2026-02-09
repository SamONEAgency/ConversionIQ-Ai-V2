/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        heading: ['var(--font-sora)', ...fontFamily.sans],
      },
      colors: {
        brand: {
          pink: '#ef2d60', // Primary CTA
          blue: '#00a1d9', // Secondary
          blurple: '#383299', // Headings/Dark
          lavender: '#ebebf8', // Secondary BG
          yellow: '#e5b21d',
          green: '#1bb469',
          purple: '#9d32ee',
        },
      },
      backgroundImage: {
        'stripe-gradient': 'linear-gradient(135deg, #ef2d60 0%, #383299 100%)',
        'subtle-glow': 'radial-gradient(circle at 50% 50%, #ebebf8 0%, transparent 100%)',
      },
      maxWidth: {
        'container': '1280px',
        '7xl': '80rem',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
