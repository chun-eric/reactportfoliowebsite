import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // initialize theme from local storage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // Initialize theme from local storage and apply it
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  // Apply theme to relevant elements
  useEffect(() => {
    // Apply the theme to the relevant elements
    const applyTheme = (theme) => {
      const rootElement = document.getElementById("root");
      const bodyElement = document.body;
      const paragraphElements = document.querySelectorAll("p");
      const titleElements = document.querySelectorAll("[class*='title']");

      const elements = [
        rootElement,
        bodyElement,
        ...paragraphElements,
        ...titleElements,
      ];

      elements.forEach((element) => {
        if (element) {
          element.classList.add(theme);
          element.classList.remove(theme === "light" ? "dark" : "light");
        }
      });
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme); // Save theme to local storage
  }, [theme]);

  return [theme, setTheme];
};
