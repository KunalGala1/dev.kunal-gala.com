"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const WebsiteTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Dark or Light color theme */}
      <li>
        <a
          href="#"
          onClick={() => {
            setTheme("light");
          }}
        >
          <Image src="/sun.svg" width={20} height={20} alt="Sun icon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Image
            src="/moon-with-twinkle.svg"
            width={20}
            height={20}
            alt="Moon with twinkle icon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <Image src="/burger.svg" width={20} height={20} alt="Burger icon" />
        </a>
      </li>
    </>
  );
};

export default WebsiteTheme;
