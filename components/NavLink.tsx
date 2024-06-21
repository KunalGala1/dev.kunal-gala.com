import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isOpen,
  setIsOpen,
}) => {
  return (
    <li className="mt-8">
      <Link
        href={href}
        className="hover:text-accent font-bold text-xl"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
