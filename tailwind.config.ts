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
      },
      backgroundImage: {
        main: "linear-gradient(rgb(53, 163, 210), rgb(141, 35, 143))",
      },
    },
  },
  plugins: [],
};
export default config;
