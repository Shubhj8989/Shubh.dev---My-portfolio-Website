/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Syne', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#18181b', // Black text
        'brand-light': '#f4f4f5', // Light background
        'brand-accent': '#f97316', // Orange CTA
        'brand-card': '#ffffff', // White cards
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(#d4d4d8 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
