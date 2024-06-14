import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 pt-16 pb-4">
      <ul className="flex gap-4">
        <li>
          <a href="#">
            <Image
              src={"/linkedin-icon.svg"}
              width={32}
              height={32}
              alt="linkedin-icon"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <Image
              src={"/github-icon.svg"}
              width={32}
              height={32}
              alt="github-icon"
            />
          </a>
        </li>
      </ul>
      <p className="text-secondary text-sm">
        &copy; {new Date().getFullYear()} Kunal Gala, All rights reserved.
      </p>
      <p className="text-secondary text-sm">&lt;/&gt; with &#91;icon&#93;</p>
    </footer>
  );
};

export default Footer;
