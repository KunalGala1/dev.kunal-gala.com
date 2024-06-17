"use client";
import { useEffect } from "react";
import React from "react";
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import nextIcon from "../public/nextjs-icon.svg";
import typescriptIcon from "../public/typescript-icon.svg";
import tailwindIcon from "../public/tailwindcss-icon.svg";
import sanityIcon from "../public/sanity.svg";

const MadeWith = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Autoplay],
      direction: "vertical",
      autoplay: {
        delay: 3000,
      },
      loop: true,
    });
  }, []);
  return (
    <div className="swiper h-5">
      <div className="swiper-wrapper [&>div]:flex [&>div]:items-center [&>div]:gap-1 text-secondary text-sm">
        <div className="swiper-slide">
          <span>Next.js</span>
          <Image src={nextIcon} width={20} height={20} alt="Next.js icon" />
        </div>
        <div className="swiper-slide">
          <span>TypeScript</span>
          <Image
            src={typescriptIcon}
            width={20}
            height={20}
            alt="TypeScript icon"
          />
        </div>
        <div className="swiper-slide">
          <span>Tailwind</span>
          <Image
            src={tailwindIcon}
            width={20}
            height={10}
            alt="Tailwind icon"
          />
        </div>
        <div className="swiper-slide">
          <Image src={sanityIcon} width={50} height={20} alt="Sanity icon" />
        </div>
        <div className="swiper-slide">
          <span>❤️</span>
        </div>
      </div>
    </div>
  );
};

export default MadeWith;
