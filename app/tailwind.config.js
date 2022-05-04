module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#02044a",
        "emoji-blue": "#191a5a",
        "icon-background": "#8687a8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
