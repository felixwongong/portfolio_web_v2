/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#EFE2BA",
        secondary: "#D79922",
        tertiary: "",
        success: "#4056A1",
        warning: "#F13C20",
        error: "",
        neutral: "#C5CBE3"
      },
      fontFamily: {
        comic: ["Comic Neue"]
      }
    },
  },
  plugins: [],
}