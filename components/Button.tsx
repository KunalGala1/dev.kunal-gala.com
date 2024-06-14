import React from "react";

type ButtonType = {
  children: React.ReactNode;
  theme: "dark" | "light";
  effect?: "rainbow-boxshadow";
};

const Button = ({ children, theme, effect }: ButtonType) => {
  const themeStyles = {
    dark: "bg-black text-white",
    light: "outline outline-2 outline-secondary text-secondary",
  };

  const effectStyles = {
    "rainbow-boxshadow":
      "before:bg-rainbow before:left-0 before:top-0 relative before:absolute before:-z-10 before:w-full before:h-full before:blur",
  };

  return (
    <button
      className={`w-[150px] h-11 rounded font-semibold text-sm ${themeStyles[theme]} ${effect && effectStyles[effect]}`}
    >
      {children}
    </button>
  );
};

export default Button;
