import React from "react";
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
  return (
    <nav
      className={`fixed top-0 left-0 w-screen h-screen z-[5] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <ul className="px-8 py-4 mt-16 space-y-4">
        <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen} index={0}>
          <FontAwesomeIcon icon={faHouse} />
          <Hr />
          <Span>Home</Span>
        </NavLink>
        <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen} index={1}>
          <FontAwesomeIcon icon={faBook} />
          <Hr />
          <Span>About</Span>
        </NavLink>
        <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen} index={2}>
          <FontAwesomeIcon icon={faBriefcase} />
          <Hr />
          <Span>Portfolio</Span>
        </NavLink>
        <NavLink href={"#"} isOpen={isOpen} setIsOpen={setIsOpen} index={3}>
          <FontAwesomeIcon icon={faFile} />
          <Hr />
          <Span>Resume</Span>
        </NavLink>
        <NavLink
          href={"#"}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          target={"_blank"}
          index={4}
        >
          <FontAwesomeIcon icon={faMusic} />
          <Hr /> <Span>Music</Span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;

interface NavLinkProps {
  index: number;
  href: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  target?: "_blank";
}

const NavLink: React.FC<NavLinkProps> = ({
  index,
  href,
  target,
  children,
  isOpen,
  setIsOpen,
}) => (
  <li>
    <Link
      href={href}
      className={
        "flex items-center gap-2 font-black text-xl hover:text-accent hover:outline outline-accent outline-1 p-2 rounded-md hover:bg-accent/5" +
        " " +
        `transition-opacity ${isOpen ? "" : "opacity-0 !delay-0"}`
      }
      style={{ transitionDelay: `${index * 100 + 500}ms` }}
      onClick={() => {
        setIsOpen(false);
      }}
      target={target}
    >
      {children}
    </Link>
  </li>
);

const Hr = () => (
  <div className="flex flex-1 gap-1 sm:gap-2 justify-around">
    {Array.from({ length: 10 }, () => (
      <span className="font-thin">_</span>
    ))}
  </div>
);

interface SpanProps {
  children: React.ReactNode;
}

const Span: React.FC<SpanProps> = ({ children }) => <span>{children}</span>;
