"use client";
import React, { useState, useEffect } from "react";
import TypeIt from "typeit-react";

// todo: fix cursor color on color-theme change (incorrectly retains initial color)

const Typewriter = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="mt-4 min-h-10">
        {mounted ? (
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .pause(1500)
                .type("a Juilliard-trained musician.")
                .pause(1000)
                .delete(100)
                .pause(1000)
                .type("a front-end web developer.")
                .pause(3000)
                .delete(100);
              return instance;
            }}
          />
        ) : (
          <span className="min-h-10 rounded flex justify-center items-center gap-4">
            <div className="h-4 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse w-[40%]"></div>
            <div className="h-4 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse w-[15%]"></div>
            <div className="h-4 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse w-1/3"></div>
            <div className="h-4 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse w-1/5"></div>
            <div className="h-4 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse w-1/6"></div>
          </span>
        )}
      </div>
    </>
  );
};

export default Typewriter;
