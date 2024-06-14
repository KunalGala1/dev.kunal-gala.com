import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#192B45",
        secondary: "#9AA3B0",
      },
      backgroundImage: {
        main: "linear-gradient(to right, rgb(53, 163, 210), rgb(141, 35, 143))",
        "fade-out":
          "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 98%, rgba(255, 255, 255, 1) 100%)",
        rainbow:
          "linear-gradient(120deg, rgb(236, 97, 146), rgb(236, 76, 52), rgb(255, 189, 43), rgb(235, 222, 86), rgb(87, 199, 84), rgb(83, 161, 235))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
