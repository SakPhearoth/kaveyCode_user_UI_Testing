"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { usePathname } from "next/navigation"; 

export default function NavbarComponent() {
  const pathname = usePathname(); 

  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/videos", label: "Videos" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="images/kavey-code-logo.png"
                alt="Kavey Code Logo"
                width={80}
                height={80}
                className="rounded"
              />
              <span className="text-xl font-bold text-foreground">
                កវី <span className="text-primary">កូដ</span>
              </span>
            </Link>
          </div>

          {/* links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-primary ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* right side */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
