/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lufga: ["var(--font-lufga)", "sans-serif"],
        avant: ['"ITC Avant Garde Pro"', "sans-serif"],
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "gradient-move": "gradientMove 3s ease infinite",
      },
    },
  },
  plugins: [],
};
