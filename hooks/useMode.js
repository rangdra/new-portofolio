import React, { useState, useEffect } from "react";

export default function useMode() {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
