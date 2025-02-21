"use client";

import "@/styles/slider.css";
import { useState } from "react";

export function ThemeToggler() {
  const [isDark, setIsDark] = useState(localStorage.theme === "dark");
  const onClick = () => {
    const currentIsDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (currentIsDark) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    setIsDark(localStorage.theme === "dark");
    console.log(currentIsDark);
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark"
    );
    console.log([...document.documentElement.classList.entries()]);
  };
  return (
    <div className="toggler relative w-[50px] h-[20px]">
      <label id="switch" className="switch">
        <input
          type="checkbox"
          onChange={() => onClick()}
          id="slider"
          checked={!isDark}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
