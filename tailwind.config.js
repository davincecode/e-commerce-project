// const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        miller: "miller, cursive",
        millerLight: "miller-light, cursive",
        millerItalic: "miller-italic, cursive",
        millerItalicLight: "miller-italic-light, cursive",
        Grotesk: "Grotesk-Regular, san-serif",
        GroteskLight: "Grotesk-light, san-serif",
      },
    },
  },
  // darkMode: "class",
  plugins: [require("tailwind-scrollbar-hide")],
}
