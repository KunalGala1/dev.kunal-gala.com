"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

interface BurgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const numberOfBars = 30;

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
      <nav
        className={`fixed transition-opacity ${isOpen ? "delay-[1000ms] opacity-100 duration-500 pointer-events-auto" : "opacity-0 delay-0 duration-100 pointer-events-none"} top-0 left-0 w-screen h-screen z-[5]`}
      >
        <ul className="mt-28 p-8">
          <NavLink href={"/"} isOpen={isOpen} setIsOpen={setIsOpen}>
            Home
          </NavLink>
          <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen}>
            About
          </NavLink>
          <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen}>
            Portfolio
          </NavLink>
          <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen}>
            Resume
          </NavLink>
          <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen}>
            Music Website
          </NavLink>
        </ul>
      </nav>
      <div
        className={`flex fixed top-0 left-0 h-screen w-full ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {Array.from({ length: numberOfBars }, (_, index) => (
          <div
            key={index}
            className={`transition-transform scale-110 rounded-full duration-[1000ms] top-0 h-full ${index % 2 == 0 ? "bg-slate-200 dark:bg-slate-800" : "bg-slate-300 dark:bg-slate-900"} ${isOpen ? `-translate-y-0` : `-translate-y-[110%]`}`}
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
