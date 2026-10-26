export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0f4467", dark: "#0a2f48", light: "#e8f0f6" },
        brand: { DEFAULT: "#5aa845", dark: "#468a35", light: "#eef7ea" },
      },
      fontFamily: {
        display: ['"Cinzel"', "serif"],
        body: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
