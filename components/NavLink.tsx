import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faBriefcase,
  faFile,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

const iconMap: { [key: string]: IconDefinition } = {
  faHouse: faHouse,
  faBook: faBook,
  faBriefcase: faBriefcase,
  faFile: faFile,
  faLink: faLink,
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  target?: "_blank";
  icon: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isOpen,
  setIsOpen,
  index,
  target,
  icon,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`transition-opacity ${isOpen ? "opacity-1" : "opacity-0"} flex group items-center gap-2 justify-between hover:text-accent text-vibrant dark:text-secondary dark:hover:text-accent hover:outline outline-1 outline-accent/50 p-1 rounded font-black text-2xl`}
        onClick={() => {
          setIsOpen(false);
        }}
        target={target}
      >
        <div
          className={`${isOpen ? "transition-notcolors duration-500 translate-x-0 opacity-1" : "-translate-x-[100px] opacity-0 !delay-1000"}`}
          style={{ transitionDelay: `${index * 100 + 500}ms` }}
        >
          <FontAwesomeIcon icon={iconMap[icon] as IconProp}></FontAwesomeIcon>
        </div>
        <hr
          className={`${isOpen ? "transition-notcolors duration-500 opacity-1 scale-1" : "opacity-0 scale-95 !delay-1000"} h-px flex-1 border-vibrant dark:border-secondary border-t border-dashed translate-y-2.5 group-hover:border-accent`}
          style={{ transitionDelay: `${index * 100 + 1000}ms` }}
        />
        <div
          className={`${isOpen ? "transition-notcolors duration-500 translate-x-0 opacity-1" : "translate-x-[100px] opacity-0 !delay-1000"}`}
          style={{ transitionDelay: `${index * 100 + 500}ms` }}
        >
          {children}
        </div>
      </Link>
    </li>
  );
};

export default NavLink;
