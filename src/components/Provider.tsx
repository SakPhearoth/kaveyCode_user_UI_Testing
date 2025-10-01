"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./theme-provider";
import NavbarComponent from "./navbar/NavbarComponent";
import FooterComponent from "./footer/FooterComponent";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NavbarComponent />
        {children}
        <FooterComponent />
      </ThemeProvider>
    </SessionProvider>
  );
}
