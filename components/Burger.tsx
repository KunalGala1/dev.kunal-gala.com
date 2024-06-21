"use client";
import React, { useState, useEffect } from "react";

interface BurgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const numberOfBars = 100;

const Burger: React.FC<BurgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <li className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="z-10 relative"
      >
        <svg
          viewBox="0 0 48 36"
          width={20}
          height={20}
          fill="none"
          className={`transition duration-300 ${isOpen ? "scale-150" : ""}`}
        >
          <path
            stroke="#57697F"
            strokeWidth="4"
            d="M0 2h32"
            className={`transition duration-300 origin-[35%_10%] ${isOpen ? "translate-y-4 translate-x-2 rotate-45 stroke-accent" : ""}`}
          />
          <path
            stroke="#57697F"
            strokeWidth="4"
            d="M0 18h48"
            className={`transition duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <path
            stroke="#57697F"
            strokeWidth="4"
            d="M16 34h32"
            className={`transition duration-300 origin-[65%_90%] ${isOpen ? "-translate-y-4 -translate-x-2 -rotate-45 stroke-accent" : ""}`}
          />
        </svg>
      </button>
      {/* <nav
        className={`fixed transition ${isOpen ? "translate-y-0" : "-translate-y-full"} top-0 left-0 w-screen h-screen bg-slate-100 dark:bg-primary z-0`}
      ></nav> */}
      <div className="flex fixed top-0 left-0 h-screen w-full">
        {Array.from({ length: numberOfBars }, (_, index) => (
          <div
            key={index}
            className={`transition top-0 h-full bg-red-200 outline outline-1 outline-slate-800/20 ${isOpen ? `translate-y-0` : `-translate-y-full`}`}
            style={{
              transitionDelay: `${index * 10}ms`,
              width: `${100 / numberOfBars}%`,
            }}
          ></div>
        ))}
      </div>
    </li>
  );
};

export default Burger;
