/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a", // Negro de fondo
        card: "#1a1a1a", // Negro de tarjetas
      },
    },
  },
  plugins: [],
}