import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#192B45",
        secondary: "#9AA3B0",
        tertiary: "#57697F",
        dark: "#0C131D",
        "dark-secondary": "#eef5ff",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to right, rgb(53, 163, 210), rgb(141, 35, 143))",
        "fade-out":
          "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 98%, rgba(255, 255, 255, 1) 100%)",
        "dark-fade-out":
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 98%, rgba(12, 19, 29, 1) 100%)",
        rainbow:
          "linear-gradient(120deg, rgb(236, 97, 146), rgb(236, 76, 52), rgb(255, 189, 43), rgb(235, 222, 86), rgb(87, 199, 84), rgb(83, 161, 235))",
      },
      animation: {
        typewriter: "typewriter 7s steps(36) 1s infinite alternate",
        caret:
          "typewriter 7s steps(36) 1s infinite alternate, blink 7s linear 1s infinite alternate",
      },
      keyframes: {
        typewriter: {
          "0%, 15%": {
            left: "0%",
          },
          "85%, 100%": {
            left: "100%",
          },
        },
        blink: {
          // Typing effect - cursor is solid
          "15%, 85%": {
            opacity: "1",
          },
          // Animation is at rest - cursor is blinking
          // (before animation begins)
          "0%, 2.5%, 7.6%, 12.5%": { opacity: "0" },
          "2.6%, 7.5%, 12.6%": { opacity: "1" },
          // (after animation ends)
          "87.6%, 92.5%, 97.6%, 100%": { opacity: "0" },
          "87.5%, 92.6%, 97.5%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
