import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-16 px-8 flex justify-between items-center shadow">
      <h1 className="font-extrabold text-xl text-main">
        <a href="/">Kunal Gala</a>
      </h1>
      {/* Icons */}
      <ul className="flex gap-5">
        <li>
          <a href="#">
            <Image
              src="/magnifying-glass.svg"
              width={20}
              height={20}
              alt="Magnifying glass icon"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image src="/sun.svg" width={20} height={20} alt="Sun icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src="/moon-with-twinkle.svg"
              width={20}
              height={20}
              alt="Moon with twinkle icon"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image src="/burger.svg" width={20} height={20} alt="Burger icon" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
