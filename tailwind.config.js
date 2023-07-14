/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-40px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-in-out forwards",
        "fade-in-left": "fade-in-left 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
