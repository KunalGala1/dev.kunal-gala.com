"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./Nav";

interface BurgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const numberOfBars = 30;

const Burger: React.FC<BurgerProps> = ({ isOpen, setIsOpen }) => {
  return (
    <li className="relative md:hidden">
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
          className={`transition duration-500 ${isOpen ? "scale-150" : ""}`}
        >
          <path
            stroke="#57697F"
            strokeWidth="4"
            d="M0 2h32"
            className={`transition duration-500 origin-[35%_10%] ${isOpen ? "translate-y-4 translate-x-2 rotate-45 stroke-accent" : ""}`}
          />
          <path
            stroke="#57697F"
            strokeWidth="4"
            d="M0 18h48"
            className={`transition duration-500 ${isOpen ? "opacity-0" : ""}`}
          />
          <path
            stroke="#57697F"
            strokeWidth="4"
            d="M16 34h32"
            className={`transition duration-500 origin-[65%_90%] ${isOpen ? "-translate-y-4 -translate-x-2 -rotate-45 stroke-accent" : ""}`}
          />
        </svg>
      </button>

      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`flex fixed top-0 left-0 h-screen w-full ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {Array.from({ length: numberOfBars }, (_, index) => (
          <div
            key={index}
            className={`transition-transform scale-110 rounded-full duration-500 top-0 h-full ${index % 2 == 0 ? "bg-slate-200 dark:bg-slate-800" : "bg-slate-300 dark:bg-slate-900"} ${isOpen ? `-translate-y-0` : `-translate-y-[110%]`}`}
            style={{
              transitionDelay: `${index * 20}ms`,
              width: `${100 / numberOfBars}%`,
            }}
          ></div>
        ))}
      </div>
    </li>
  );
};

export default Burger;
