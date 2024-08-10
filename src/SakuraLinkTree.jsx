import React, { useState, useEffect } from "react";
import Sakura from "./Sakura";
import Background from "./Background";
import ProfileCard from "./ProfileCard";
import ThemeToggle from "./ThemeToggle";

const SakuraLinkTree = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.theme = newTheme;
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-white dark:from-gray-900 dark:to-pink-900 flex flex-col items-center justify-center p-4 transition-colors duration-500 relative overflow-hidden">
      <Background theme={theme} />
      <Sakura windSpeed={1} />
      <ProfileCard />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default SakuraLinkTree;
