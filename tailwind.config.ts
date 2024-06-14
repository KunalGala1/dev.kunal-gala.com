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
      },
    },
  },
  plugins: [],
};
export default config;
