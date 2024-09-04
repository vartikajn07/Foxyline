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
        xs: "475px",
        sm: "640px",
        md: "880px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        blue: "#3B42C4",
        black: "#191919",
        blackish: "#2C282F",
        white: "#FFFFFF",
        whiteish: "#F8F9FB",
        gray: "#868686",
        lightgray: "#D3D3D3",
        grayish: "#F1F3F7",
        purple: "#C2C4ED",
        backdrop: "rgba(255,255,255,.50)",
      },
    },
  },
  plugins: [],
};
