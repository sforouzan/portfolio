const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CocoGothic: ["CocoGothic", 'sans-serif'],
        VisbyCF: ["VisbyCF", 'sans-serif'],
        VisbyMed: ["VisbyMed", 'sans-serif'],
        VisbyBold: ["VisbyBold", 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-black': '#1E1D1C',
        'milk-white': '#E5E1E6'
      },
      fontSize: {
        hero: "clamp(58px, 15vw, 400px)",
        heroSub: "clamp(10px, 4.75vw, 120px)",
        heading: "clamp(46px, 7.25vw, 145px)",
        cardTitle: "clamp(18px, 2vw, 36px)",
      },
      screens: {
        'xxl': '1700px',
        '1600xl': '1600px',
        '1400xl': '1400px'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
});
