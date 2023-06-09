/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        "black-gradient":
          "linear-gradient(90deg, rgba(0,0,0,0.9) 5%, rgba(0,138,255,0) 100%)",
        "black-gradient-down":
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      },
      gridTemplateColumns: {
        "responsive-grid": "repeat(auto-fill, minmax(250px, 1fr));",
        "seasons-grid": "repeat(auto-fill, minmax(150px, 1fr));",
        details: "repeat(1,minmax(120px, 350px) auto)",
      },
    },
  },
  plugins: [],
};
