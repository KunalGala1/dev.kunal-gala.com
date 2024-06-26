import React from "react";
import Link from "next/link";

type LinkButtonType = {
  children: React.ReactNode;
  theme: "dark" | "light";
  effect?: "rainbow-boxshadow";
  href: string;
};

const LinkButton = ({ children, theme, effect, href }: LinkButtonType) => {
  const themeStyles = {
    dark: "bg-black text-white",
    light:
      "bg-white dark:bg-transparent outline outline-2 outline-secondary text-secondary",
  };

  const effectStyles = {
    "rainbow-boxshadow":
      "before:bg-rainbow before:left-0 before:top-0 relative before:absolute before:-z-10 before:w-full before:h-full before:blur",
  };

  return (
    <Link
      className={`flex justify-center items-center w-[150px] h-11 rounded font-semibold text-sm ${themeStyles[theme]} ${effect && effectStyles[effect]}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
