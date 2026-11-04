/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030308',
        container: '#0e0e14',
        primary: {
          DEFAULT: '#8c66ff',
          hover: '#743dff',
          light: '#b399ff',
          dark: '#581ed6',
        },
        bodyText: '#afafba',
        titleText: '#f1f1f5',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 8px 32px rgba(140, 102, 255, 0.45)',
        'btn-glow': '0 8px 32px rgba(140, 102, 255, 0.5), inset 8px -8px 30px #581ed6',
        'purple-card': '0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(140, 102, 255, 0.15)',
      }
    },
  },
  plugins: [],
}
