"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { link } from "fs";

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
        className={`fixed ${isOpen ? "pointer-events-auto" : "pointer-events-none"} top-0 left-0 w-screen h-screen z-[5]`}
      >
        <ul className="px-8 py-4 mt-16 space-y-4">
          <NavLink
            href="/"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            index={0}
            icon={"faHouse"}
          >
            Home
          </NavLink>
          <NavLink
            index={1}
            href="#"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            icon={"faBook"}
          >
            About
          </NavLink>
          <NavLink
            index={2}
            href="#"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            icon={"faBriefcase"}
          >
            Portfolio
          </NavLink>
          <NavLink
            index={3}
            href="#"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            icon={"faFile"}
          >
            Resume
          </NavLink>
          <NavLink
            index={4}
            href="https://kunal-gala.com/"
            target={"_blank"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            icon={"faLink"}
          >
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
