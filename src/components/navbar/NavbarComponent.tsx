"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "ទំព័រដើម" },
    { href: "/courses", label: "មេរៀន" },
    { href: "/videos", label: "វីដេអូ" },
    { href: "/about", label: "អំពីកវីកូដ" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Keycloak login page URL (replace with your realm & client)
  const keycloakLoginUrl = `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/realms/${process.env.NEXT_PUBLIC_KEYCLOAK_REALM}/protocol/openid-connect/auth?client_id=${process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_KEYCLOAK_REDIRECT_URI}`;

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/kavey-code-logo.png"
              alt="Kavey Code Logo"
              width={80}
              height={80}
              className="rounded"
            />
            <span className="text-xl font-bold">
              កវី<span className="text-primary">កូដ</span>
            </span>
          </Link>

          {/* Desktop Links */}
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
                    isActive ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />

            {/* 🔑 Redirect directly to Keycloak */}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => (window.location.href = keycloakLoginUrl)}
            >
              ចូលគណនី / ចុះឈ្មោះ
            </Button>

            {/* 👤 Profile Icon */}
            <Link href="/profile">
              <Button variant="outline" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 px-4 hover:text-primary ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => (window.location.href = keycloakLoginUrl)}
                >
                  ចូលគណនី / ចុះឈ្មោះ
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
