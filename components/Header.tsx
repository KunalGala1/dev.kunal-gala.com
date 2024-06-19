import React from "react";
import Image from "next/image";
import WebsiteTheme from "./WebsiteTheme";

const Header = () => {
  return (
    <>
      <header
        className={
          "h-16 px-8 flex justify-between items-center shadow-sm dark:shadow-gray-800/50" +
          " " +
          // Glassmorphism
          "fixed w-full z-50 backdrop-blur bg-white/50 dark:bg-dark/50"
        }
      >
        <h1 className="font-extrabold text-xl dark:text-dark-secondary">
          <a href="/">Kunal Gala</a>
        </h1>
        {/* Icons */}
        <ul className="flex gap-5">
          <li>
            <button>
              <svg viewBox="0 0 159 162" width={20} height={20} fill="none">
                <path
                  stroke="#000"
                  className="dark:stroke-secondary"
                  strokeLinecap="round"
                  strokeWidth="21"
                  d="m148 151-41.394-41.394"
                />
                <circle
                  cx="65"
                  cy="65"
                  r="55"
                  stroke="#9AA3B0"
                  className="dark:stroke-white"
                  strokeWidth="20"
                />
              </svg>
            </button>
          </li>

          <WebsiteTheme />

          {/* Burger */}
          <li>
            <button>
              <svg viewBox="0 0 48 36" width={20} height={20} fill="none">
                <path
                  stroke="#57697F"
                  className="dark:stroke-secondary"
                  strokeWidth="4"
                  d="M0 2h32M0 18h48M16 34h32"
                />
              </svg>
            </button>
          </li>
        </ul>
      </header>

      {/* Filler div that occupies the same space as Header */}
      <div className="pointer-events-none h-16 select-none print:hidden"></div>
    </>
  );
};

export default Header;
