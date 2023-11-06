import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#1C1C1C",
          150: "#1E1E1E",
          200: "#323232",
          300: "#5C5C5C",
          600: "#52525B",
          800: "#E2E8F0",
          900: "#F4F4F4",
        },
        purple: "#8246AF",
        light_purple: "#965AC3",
        text_purple: "#9333EA",
        yellow: "#FFB71B",
        green: "#78BE20",
        lightBlue: "#00B2E3",
      },
      hyphens: {
        auto: "auto",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
