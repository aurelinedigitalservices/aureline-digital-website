import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#2b2926", soft: "#4a463f" },          // charcoal
        ivory: { DEFAULT: "#fcf8ef", deep: "#f5eddd", line: "#e6dcc6" }, // warm cream
        stone: "#645e55",                                        // secondary text (AA on ivory)
        sage: { light: "#e3ecdf", DEFAULT: "#b7cdb5", deep: "#44624e" },
        powder: { light: "#e2eef6", DEFAULT: "#bcd6e8", deep: "#3b5f7d" },
        peach: { light: "#fcebe0", DEFAULT: "#f5cfb8", deep: "#8f523a" },
      },
      fontFamily: {
        display: ["Georgia", "'Times New Roman'", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      maxWidth: { page: "76rem" },
    },
  },
  plugins: [],
};
export default config;
