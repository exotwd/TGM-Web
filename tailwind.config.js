/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens:
    {
      xxs: "420px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        darkslategray: "#313131",
      },
      spacing: {},
      fontFamily: {
        "pt-serif": "'PT Serif'",
        "purple-purse": "'Purple Purse'",
        "road-rage": "'Road Rage'",
        montserrat: "Montserrat",
        lora: "Lora",
        "kankin-free-font": "'Kankin FREE FONT'",
        "new-rocker": "New Rocker",
        "kankin": "Kankin",

      },
    },
    fontSize: {
      "9xl": "28px",
      xl: "20px",
      "29xl": "48px",
      "3xl": "22px",
      "5xl": "24px",
      "37xl": "56px",
      "53xl": "72px",
      base: "16px",
      xs: "12px",
      "171xl": "190px",
      inherit: "inherit",
      "45xl": "64px",
    },
  },
  corePlugins: {
    preflight: false,
  },
}