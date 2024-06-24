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
    return (
      <li>
        <div className="w-6 h-6 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse"></div>
      </li>
    );
  }

  if (theme === "light") {
    // Sun
    return (
      <li>
        <button
          onClick={() => {
            setTheme("dark");
          }}
          className="relative z-10"
        >
          <svg viewBox="0 0 159 159" width={20} height={20} fill="none">
            <path
              stroke="#9AA3B0"
              strokeLinecap="round"
              strokeWidth="14"
              d="M28 79.5H7"
            />
            <circle cx="79.5" cy="80" r="35.5" fill="#192B45" />
            <path
              stroke="#9AA3B0"
              strokeLinecap="round"
              strokeWidth="14"
              d="M152 79.5h-21M79.5 28V7M79.5 152v-21M115.916 43.084l14.849-14.85M28.235 130.765l14.85-14.849M115.916 115.916l14.849 14.849M28.235 28.235l14.85 14.849"
            />
          </svg>
        </button>
      </li>
    );
  } else if (theme === "dark") {
    // Moon
    return (
      <li>
        <button
          onClick={() => {
            setTheme("light");
          }}
          className="relative z-10"
        >
          <svg viewBox="0 0 173 178" width={20} height={20} fill="none">
            <mask
              id="a"
              width="133.759"
              height="152.402"
              x="-6.655"
              y="31.34"
              fill="#000"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M-6.655 31.34h133.759v152.402H-6.655z" />
              <path
                fill-rule="evenodd"
                d="M119.021 140.819c-26.133 5.854-53.751-6.926-65.65-32.16-10.865-23.043-5.379-49.59 11.754-66.544a58.699 58.699 0 0 0-12.212 4.197C23.69 60.09 11.17 94.95 24.95 124.173c13.779 29.223 48.64 41.742 77.862 27.963a58.406 58.406 0 0 0 16.209-11.318Z"
                clipRule="evenodd"
              />
            </mask>
            <path
              fill="#9AA3B0"
              fill-rule="evenodd"
              d="M119.021 140.819c-26.133 5.854-53.751-6.926-65.65-32.16-10.865-23.043-5.379-49.59 11.754-66.544a58.699 58.699 0 0 0-12.212 4.197C23.69 60.09 11.17 94.95 24.95 124.173c13.779 29.223 48.64 41.742 77.862 27.963a58.406 58.406 0 0 0 16.209-11.318Z"
              clipRule="evenodd"
            />
            <path
              fill="#9AA3B0"
              d="m119.021 140.819 3.517 3.554a5 5 0 0 0-4.61-8.433l1.093 4.879ZM65.125 42.115l3.517 3.554a5 5 0 0 0-4.61-8.433l1.093 4.879Zm52.803 93.825c-23.899 5.353-49.156-6.342-60.035-29.414l-9.044 4.265c12.918 27.397 42.897 41.261 71.265 34.907l-2.186-9.758Zm-60.035-29.414C47.96 85.46 52.968 61.179 68.642 45.669l-7.034-7.108c-18.592 18.398-24.557 47.211-12.76 72.23l9.045-4.265Zm-2.848-55.692a53.699 53.699 0 0 1 11.173-3.84l-2.186-9.758a63.7 63.7 0 0 0-13.252 4.553l4.265 9.045Zm-25.573 71.207C16.87 95.316 28.32 63.436 55.045 50.834l-4.265-9.045C19.06 56.746 5.47 94.586 20.427 126.306l9.045-4.265Zm71.208 25.574c-26.726 12.601-58.606 1.152-71.208-25.574l-9.045 4.265c14.957 31.721 52.797 45.311 84.517 30.354l-4.264-9.045Zm14.824-10.35a53.428 53.428 0 0 1-14.824 10.35l4.264 9.045a63.428 63.428 0 0 0 17.594-12.287l-7.034-7.108Z"
              mask="url(#a)"
            />
            <path
              fill="#fff"
              d="M103.006 6.314c.943-2.664 4.711-2.664 5.655 0l3.889 10.976a3.002 3.002 0 0 0 1.826 1.826l10.977 3.89c2.664.944 2.664 4.711 0 5.655l-10.977 3.89a3.002 3.002 0 0 0-1.826 1.825l-3.889 10.977c-.944 2.664-4.712 2.664-5.655 0l-3.89-10.977a3 3 0 0 0-1.826-1.826l-10.976-3.889c-2.664-.944-2.664-4.712 0-5.655l10.976-3.89a3 3 0 0 0 1.826-1.826l3.89-10.976ZM138.096 41.768c.944-2.664 4.712-2.664 5.656 0l6.244 17.622a3 3 0 0 0 1.826 1.826l17.622 6.244c2.664.944 2.664 4.712 0 5.656l-17.622 6.244a3 3 0 0 0-1.826 1.826l-6.244 17.621c-.944 2.665-4.712 2.665-5.656 0l-6.244-17.621a3 3 0 0 0-1.825-1.826l-17.622-6.244c-2.664-.944-2.664-4.712 0-5.656l17.622-6.244a3 3 0 0 0 1.825-1.826l6.244-17.622Z"
            />
          </svg>
        </button>
      </li>
    );
  }
};

export default WebsiteTheme;
