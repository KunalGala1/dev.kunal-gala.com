import React from "react";
import Link from "next/link";

const Medium_Nav = () => {
  return (
    <ul className="md:flex gap-5 hidden">
      <NavLink href="/">Home</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Portfolio</NavLink>
      <NavLink href="#">Resume</NavLink>
      <NavLink href="#">Music</NavLink>
    </ul>
  );
};

export default Medium_Nav;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-secondary hover:text-slate-500 dark:text-dark-secondary dark:hover:text-accent"
    >
      {children}
    </Link>
  </li>
);
