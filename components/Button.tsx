import React from "react";

type ButtonType = {
  children: React.ReactNode;
  theme: "dark" | "light";
};

const Button = ({ children, theme }: ButtonType) => {
  const themeStyles = {
    dark: "bg-black text-white",
    light: "outline outline-2 outline-secondary text-secondary",
  };

  return (
    <button
      className={`w-[150px] h-11 rounded font-semibold text-sm ${themeStyles[theme]}`}
    >
      {children}
    </button>
  );
};

export default Button;
