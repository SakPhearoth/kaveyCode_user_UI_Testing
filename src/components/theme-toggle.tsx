"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/src/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setIsClicked(true);
    setTheme(theme === "light" ? "dark" : "light");

    // Reset click animation after transition
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <div className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      className={`
        relative h-9 w-9 overflow-hidden
        transition-all duration-200 ease-out
        hover:bg-accent hover:text-accent-foreground hover:scale-105
        active:scale-95 active:bg-accent/80
        focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${isClicked ? "animate-pulse bg-accent/60" : ""}
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 transition-opacity duration-200 hover:opacity-100" />

      <Sun
        className={`
        h-4 w-4 transition-all duration-500 ease-in-out
        ${
          theme === "dark"
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }
        ${isClicked ? "animate-spin" : ""}
      `}
      />
      <Moon
        className={`
        absolute h-4 w-4 transition-all duration-500 ease-in-out
        ${
          theme === "light"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }
        ${isClicked ? "animate-bounce" : ""}
      `}
      />

      {isClicked && (
        <div className="absolute inset-0 animate-ping rounded-md bg-primary/20" />
      )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
