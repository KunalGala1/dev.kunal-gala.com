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
import { useRouter } from "next/router";

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
        const span = children[2] as HTMLSpanElement;

        const transitionDelay = `${index * 100 + 500}ms`;

        anchor.style.transitionDelay = transitionDelay;

        if (svg) {
          svg.style.transitionDelay = transitionDelay;
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
        <NavLink href={"/"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <Icon isOpen={isOpen}>
            <FontAwesomeIcon icon={faHouse} />
          </Icon>
          <DividerLine isOpen={isOpen} />
          <Span isOpen={isOpen}>Home</Span>
        </NavLink>
        <NavLink href={"#about"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <Icon isOpen={isOpen}>
            <FontAwesomeIcon icon={faBook} />
          </Icon>
          <DividerLine isOpen={isOpen} />
          <Span isOpen={isOpen}>About</Span>
        </NavLink>
        <NavLink href={"#portfolio"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <Icon isOpen={isOpen}>
            <FontAwesomeIcon icon={faBriefcase} />
          </Icon>
          <DividerLine isOpen={isOpen} />
          <Span isOpen={isOpen}>Portfolio</Span>
        </NavLink>
        <NavLink href={"/resume"} isOpen={isOpen} setIsOpen={setIsOpen}>
          <Icon isOpen={isOpen}>
            <FontAwesomeIcon icon={faFile} />
          </Icon>
          <DividerLine isOpen={isOpen} />
          <Span isOpen={isOpen}>Resume</Span>
        </NavLink>
        <NavLink
          href={"https://kunal-gala.com/"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          target={"_blank"}
        >
          <Icon isOpen={isOpen}>
            <FontAwesomeIcon icon={faMusic} />
          </Icon>
          <DividerLine isOpen={isOpen} /> <Span isOpen={isOpen}>Music</Span>
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
        "group flex items-center justify-center gap-4 font-black text-xl hover:text-accent hover:outline outline-accent outline-1 p-2 rounded-lg hover:bg-accent/10" +
        " " +
        `transition-opacity ${isOpen ? "" : "opacity-0 !delay-0"}`
      }
      onClick={(event) => {
        event.preventDefault();
        const headerOffset = 64;
        switch (href) {
          case "/":
            break;
          case "#about":
            const about = document.getElementById("about");
            if (!about) return;
            const aboutPosition = about.getBoundingClientRect().top;
            const offsetPosition =
              aboutPosition + window.scrollY - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "instant",
            });
            break;
          default:
            break;
        }
        setIsOpen(false);
      }}
      target={target}
    >
      {children}
    </Link>
  </li>
);

interface IconProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ isOpen, children }) => (
  <div
    className={
      `transition-transform ${isOpen ? "translate-x-0" : "-translate-x-16"}` +
      " " +
      "w-1/2 flex justify-end"
    }
  >
    {children}
  </div>
);

interface DividerLineProps {
  isOpen: boolean;
}

const DividerLine: React.FC<DividerLineProps> = ({ isOpen }) => (
  <>
    <div className="w-0.5 h-12 opacity-80 rounded-full bg-primary dark:bg-secondary group-hover:bg-accent group-dark:hover:bg-accent"></div>
  </>
);

interface SpanProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Span: React.FC<SpanProps> = ({ isOpen, children }) => (
  <span
    className={
      `transition-transform ${isOpen ? "translate-x-0" : "translate-x-16"}` +
      " " +
      "w-1/2"
    }
  >
    {children}
  </span>
);
