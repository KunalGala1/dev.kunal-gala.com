"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faBriefcase,
  faFile,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

interface NavProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({ isOpen, setIsOpen }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const setTransitionDelays = (element: HTMLElement, index: number) => {
      const anchor = element.firstElementChild as HTMLAnchorElement;
      if (anchor) {
        const children = anchor.children;
        const svg = children[0] as SVGElement;
        const div = children[1] as HTMLDivElement;
        const span = children[2] as HTMLSpanElement;

        const transitionDelay = `${index * 100 + 500}ms`;

        anchor.style.transitionDelay = transitionDelay;

        if (svg) {
          svg.style.transitionDelay = transitionDelay;
        }

        if (div) {
          div.style.transitionDelay = transitionDelay;
        }

        if (span) {
          span.style.transitionDelay = transitionDelay;
        }
      }
    };

    const navListItems = document.getElementsByClassName("nav-li");

    Array.from(navListItems).forEach((element, index) => {
      setTransitionDelays(element as HTMLElement, index);
    });
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-screen h-screen z-[5] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      id="nav"
    >
      <ul className="px-8 py-4 mt-16 space-y-4">
        <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <FontAwesomeIcon
            icon={faHouse}
            className={`transition-transform ${isOpen ? "translate-x-0" : "-translate-x-16"}`}
          />
          <Hr isOpen={isOpen} />
          <Span isOpen={isOpen}>Home</Span>
        </NavLink>
        <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <FontAwesomeIcon
            icon={faBook}
            className={`transition-transform ${isOpen ? "translate-x-0" : "-translate-x-16"}`}
          />
          <Hr isOpen={isOpen} />
          <Span isOpen={isOpen}>About</Span>
        </NavLink>
        <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <FontAwesomeIcon
            icon={faBriefcase}
            className={`transition-transform ${isOpen ? "translate-x-0" : "-translate-x-16"}`}
          />
          <Hr isOpen={isOpen} />
          <Span isOpen={isOpen}>Portfolio</Span>
        </NavLink>
        <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <FontAwesomeIcon
            icon={faFile}
            className={`transition-transform ${isOpen ? "translate-x-0" : "-translate-x-16"}`}
          />
          <Hr isOpen={isOpen} />
          <Span isOpen={isOpen}>Resume</Span>
        </NavLink>
        <NavLink
          href={"#"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          target={"_blank"}
        >
          <FontAwesomeIcon
            icon={faMusic}
            className={`transition-transform ${isOpen ? "translate-x-0" : "-translate-x-16"}`}
          />
          <Hr isOpen={isOpen} /> <Span isOpen={isOpen}>Music</Span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  target?: "_blank";
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  target,
  children,
  isOpen,
  setIsOpen,
}) => (
  <li className="nav-li">
    <Link
      href={href}
      className={
        "flex items-center gap-2 font-black text-xl hover:text-accent hover:outline outline-accent outline-1 p-2 rounded-md hover:bg-accent/10" +
        " " +
        `transition-opacity ${isOpen ? "" : "opacity-0 !delay-0"}`
      }
      onClick={() => {
        setIsOpen(false);
      }}
      target={target}
    >
      {children}
    </Link>
  </li>
);

interface HrProps {
  isOpen: boolean;
}

const Hr: React.FC<HrProps> = ({ isOpen }) => (
  <div
    className={`flex flex-1 gap-1 sm:gap-2 justify-around transition-transform ${isOpen ? "scale-100" : "scale-90"}`}
  >
    {Array.from({ length: 10 }, (_, index) => (
      <span className="font-thin" key={index}>
        _
      </span>
    ))}
  </div>
);

interface SpanProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Span: React.FC<SpanProps> = ({ isOpen, children }) => (
  <span
    className={`transition-transform ${isOpen ? "translate-x-0" : "translate-x-16"}`}
  >
    {children}
  </span>
);
