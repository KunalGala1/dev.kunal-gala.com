import React from "react";
import Link from "next/link";

const Medium_Nav = () => {
  return (
    <ul className="md:flex gap-5 hidden">
      <NavLink href="/">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#portfolio">Portfolio</NavLink>
      <NavLink href="/kgala_resume.pdf">Resume</NavLink>
      <NavLink href="https://kunal-gala.com/" target="_blank">
        Music
      </NavLink>
    </ul>
  );
};

export default Medium_Nav;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank";
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, target }) => (
  <li>
    <Link
      href={href}
      className="text-secondary hover:text-slate-500 dark:text-dark-secondary dark:hover:text-accent"
      target={target}
      onClick={(event) => {
        const headerOffset = 64;
        switch (href) {
          case "/":
            event.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            break;
          case "#about":
            event.preventDefault();
            const about = document.getElementById("about");
            if (!about) break;
            const aboutPosition = about.getBoundingClientRect().top;
            const aboutOffsetPosition =
              aboutPosition + window.scrollY - headerOffset;
            window.scrollTo({
              top: aboutOffsetPosition,
              behavior: "smooth",
            });
            break;
          case "#portfolio":
            event.preventDefault();
            const portfolio = document.getElementById("portfolio");
            if (!portfolio) break;
            const portfolioPosition = portfolio.getBoundingClientRect().top;
            const portfolioOffsetPosition =
              portfolioPosition + window.scrollY - headerOffset;
            window.scrollTo({
              top: portfolioOffsetPosition,
              behavior: "smooth",
            });
            break;
          default:
            break;
        }
      }}
    >
      {children}
    </Link>
  </li>
);
