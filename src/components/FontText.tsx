"use client";

import React from "react";

type FontTextProps<T extends React.ElementType = "span"> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
  forceLanguage?: "khmer" | "english";
} & React.ComponentPropsWithoutRef<T>;

export default function FontText<T extends React.ElementType = "span">({
  children,
  className = "",
  as,
  forceLanguage,
  ...props
}: FontTextProps<T>) {
  const Component = as || "span";

  // Determine which font to use
  let fontClass = "";

  if (forceLanguage === "khmer") {
    fontClass = "font-khmer";
  } else if (forceLanguage === "english") {
    fontClass = "font-english";
  } else {
    // Auto-detect based on text content
    const text = typeof children === "string" ? children : "";
    const hasKhmer = /[\u1780-\u17FF]/.test(text);
    fontClass = hasKhmer ? "font-khmer" : "font-english";
  }

  return (
    <Component className={`${fontClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
