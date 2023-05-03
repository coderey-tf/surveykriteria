/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "8px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#393646",
        secondary: "#4F4557",
      },
      textColor: {
        primary: "#F4EEE0",
      },
      borderColor: {
        primary: "#393646",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        17: "repeat(17, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
