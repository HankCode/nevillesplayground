import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      custom: "12rem",
    },
    letterSpacing: {
      ultrawide: ".35em",
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    extend: {
      colors: {
        prim1: "#FF840E",
        prim2: "#FFBA75",
        secondary: "#9fb469",
        third: "#a67c52",
        bgdark: "#333333",
      },
      animation: {
        heropulse: "pulse 3s linear 3",
      },
      keyframes: {},
    },
  },
  plugins: [],
};
export default config;
