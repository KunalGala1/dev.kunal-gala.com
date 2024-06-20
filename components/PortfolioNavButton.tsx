"use client";
import React, { useState } from "react";

type PortfolioNavButtonType = {
  direction: "prev" | "next";
};

const PortfolioNavButton = ({ direction }: PortfolioNavButtonType) => {
  const [carouselPosition, setCarouselPosition] = useState("start");

  const getCarouselPosition = () => {
    const p_Container = document.getElementById("portfolio-container");
  };
  return (
    <button
      className={`flex gap-2 text-slate-400 hover:text-slate-800 transition duration-75`}
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

        getCarouselPosition();
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
