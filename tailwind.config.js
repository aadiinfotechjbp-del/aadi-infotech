/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a3fd6', // deep blue
        accent: {
          purple: '#8B5CF6', // purple from gradient
          orange: '#F97316', // orange from gradient
        },
        navy: '#0f172a', // dark navy/black for footer
      },
    },
  },
  plugins: [],
}
