import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

import { SessionProvider } from "next-auth/react";


import NavbarComponent from "@/src/components/navbar/NavbarComponent";
import FooterComponent from "@/src/components/footer/FooterComponent";
import { Providers } from "../components/Provider";

export const metadata: Metadata = {
  title: "កវីកូដ KaveyCode",
  description:
    "Learn HTML, CSS, JavaScript, Python, Java, C++ and more with our free coding courses and video tutorials.",
  generator: "v0.app",
  icons: {
    icon: "/images/kavey-code-logo.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
