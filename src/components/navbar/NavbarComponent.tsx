"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const links = [
    { href: "/", label: "ទំព័រដើម" },
    { href: "/courses", label: "មេរៀន" },
    { href: "/videos", label: "វីដេអូ" },
    { href: "/about", label: "អំពីកវីកូដ" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Logout handler that clears both NextAuth + Keycloak session
  const handleLogout = async () => {
    await signOut({ redirect: false });
    window.location.href = `${process.env.NEXT_PUBLIC_KEYCLOAK_URL}/realms/${process.env.NEXT_PUBLIC_KEYCLOAK_REALM}/protocol/openid-connect/logout?redirect_uri=${process.env.NEXT_PUBLIC_KEYCLOAK_REDIRECT_URI}`;
  };

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
                កវី<span className="text-primary">កូដ</span>
              </span>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
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

          {/* Desktop right side */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            {session ? (
              <>
                <span className="text-sm text-foreground">
                  {session.user?.name || "អ្នកប្រើ"}
                </span>
                <Button
                  onClick={handleLogout}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Logout
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/profile">
                    <User size={18} className="mr-1" /> Profile
                  </Link>
                </Button>
              </>
            ) : (
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/api/auth/signin">ចូលគណនី</Link>
                <span>/</span>
                <Link href="/api/auth/signin">ចុះឈ្មោះ</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {/* Mobile links */}
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 px-4 transition-colors hover:text-primary ${
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

              {/* Mobile auth buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                {session ? (
                  <>
                    <Button
                      onClick={handleLogout}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Logout
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href="/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User size={18} className="mr-1" /> Profile
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Link
                        href="/api/auth/signin"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        ចូលគណនី / ចុះឈ្មោះ
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
