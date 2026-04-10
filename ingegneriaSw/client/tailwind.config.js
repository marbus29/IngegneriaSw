/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Questa riga è fondamentale!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}