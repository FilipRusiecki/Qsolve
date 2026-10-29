/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand — from QSolve brand book (see BRAND_COLORS.md)
        'qs-black': '#000000',
        'qs-ink': '#111111',
        'qs-green': '#0B8005',
        'qs-green-deep': '#086604',
        'qs-gold': '#DBC06F',
        'qs-gold-soft': '#E8D49A',
        'qs-paper': '#FFFFFF',
        'qs-mist': '#F4F6F4',
        'qs-muted': '#6B7280',
        'qs-line': 'rgba(17, 17, 17, 0.1)',
      },
      fontFamily: {
        display: ['"Montserrat Variable"', 'Montserrat', 'system-ui', 'sans-serif'],
        sans: ['"Work Sans Variable"', 'Work Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'qs-hero':
          'radial-gradient(ellipse 90% 70% at 80% 10%, rgba(11, 128, 5, 0.22) 0%, transparent 55%), linear-gradient(165deg, #0a120a 0%, #000000 45%, #0d1a0c 100%)',
        'qs-sheen':
          'linear-gradient(120deg, transparent 0%, rgba(219, 192, 111, 0.08) 45%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
