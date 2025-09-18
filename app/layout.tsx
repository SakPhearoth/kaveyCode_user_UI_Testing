import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";

export const metadata: Metadata = {
  title: "កវី កូដ KaveyCode",
  description:
    "Learn HTML, CSS, JavaScript, Python, Java, C++ and more with our free coding courses and video tutorials.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarComponent />

            <main>{children}</main>

            <FooterComponent />
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
