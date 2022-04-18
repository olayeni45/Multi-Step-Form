module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#02044a",
        "tailwind-blue": "#0f172a",
        "icon-background": "#8687a8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
