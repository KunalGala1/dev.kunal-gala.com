import React from "react";
import Link from "next/link";

const Medium_Nav = () => {
  return (
    <ul>
      <NavLink href="/">Home</NavLink>
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
    <Link href={href}>{children}</Link>
  </li>
);
