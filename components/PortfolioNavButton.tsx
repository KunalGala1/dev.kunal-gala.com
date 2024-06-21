"use client";
import React, { useState, useEffect } from "react";

type PortfolioNavButtonType = {
  direction: "prev" | "next";
};

const PortfolioNavButton = ({ direction }: PortfolioNavButtonType) => {
  const [carouselPosition, setCarouselPosition] = useState("start");

  useEffect(() => {
    const p_Container = document.getElementById("portfolio-container");
    const prevBtn = document.getElementById("portfolio-container-prev-btn");
    const nextBtn = document.getElementById("portfolio-container-next-btn");

    if (!p_Container || !prevBtn || !nextBtn) return;

    p_Container.addEventListener("scroll", () => {
      handleScroll({ p_Container, prevBtn, nextBtn });
    });
  }, []);

  type HandleScrollType = {
    p_Container: HTMLElement;
    prevBtn: HTMLElement;
    nextBtn: HTMLElement;
  };

  const handleScroll = ({
    p_Container,
    prevBtn,
    nextBtn,
  }: HandleScrollType): void => {
    console.log(p_Container, prevBtn, nextBtn);
  };

  return (
    <button
      className={`flex gap-2 text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition duration-75`}
      id={`portfolio-container-${direction}-btn`}
      onClick={() => {
        const p_Container = document.getElementById("portfolio-container");
        if (!p_Container) return;
        const p_ContainerChild = p_Container.firstElementChild as HTMLElement;
        if (!p_ContainerChild) return;
        const childWidth = p_ContainerChild.offsetWidth;
        if (direction === "prev") {
          p_Container.scrollBy({
            left: -childWidth,
            behavior: "smooth",
          });
        } else if (direction === "next") {
          p_Container.scrollBy({
            left: childWidth,
            behavior: "smooth",
          });
        }

        // todo: on larger than mobile screens, it will overscroll at the ends.
      }}
    >
      {direction === "prev" ? (
        <>
          <span>←</span>
          <span>{direction}</span>
        </>
      ) : (
        <>
          <span>{direction}</span>
          <span>→</span>
        </>
      )}
    </button>
  );
};

export default PortfolioNavButton;
