/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1430px"
      },
      backgroundImage: {
        'main-fon': "url('/img/Section-1/main_bg.jpg')",
        'main-fon-mob': "url('/img/Section-1/main_bg_mob.png')",
        'main-gradient': "linear-gradient(165deg, rgba(52, 61, 78, 0.2) 0%, rgba(14, 21, 30, 0.2) 58%, rgba(25, 25, 39, 0.2) 100%)"
      },
    },
  },
  plugins: [],
};
