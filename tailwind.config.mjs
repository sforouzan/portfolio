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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-black': '#2D2A26'
      },
      fontSize: {
        hero: "clamp(54px, 10vw, 150px)",
        heading: "clamp(46px, 12vw, 105px)",
      },
      screens: {
        'xxl': '1700px',
      }
    },
  },
  plugins: [],
});
