"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button onClick={() => setTheme(nextTheme)} className="theme-toggle" aria-label={`Switch to ${nextTheme} mode`}>
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}
