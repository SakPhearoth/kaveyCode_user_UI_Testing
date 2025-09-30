"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
// import { useSession } from "next-auth/react";

// Simple modal component
function Modal({ isOpen, onClose, children }: any) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background rounded-lg p-6 w-11/12 max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-foreground hover:text-primary"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  // const { data: session } = useSession();

  const links = [
    { href: "/", label: "ទំព័រដើម" },
    { href: "/courses", label: "មេរៀន" },
    { href: "/videos", label: "វីដេអូ" },
    { href: "/about", label: "អំពីកវីកូដ" },
  ];

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/kavey-code-logo.png"
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

          {/* Desktop right side */}
          {/* <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />

            {!session ? (
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsAuthModalOpen(true)}
              >
                ចូលគណនី / ចុះឈ្មោះ
              </Button>
            ) : (
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/profile">គណនីរបស់ខ្ញុំ</Link>
              </Button>
            )}
          </div> */}

          {/* Desktop right side */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/profile">ទៅកាន់គណនី</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
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
              {/* <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                {!session ? (
                  <>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => setIsAuthModalOpen(true)}
                    >
                      ចូលគណនី
                    </Button>
                    <Button
                      className="w-full border border-border"
                      onClick={() => setIsAuthModalOpen(true)}
                    >
                      ចុះឈ្មោះ
                    </Button>
                  </>
                ) : (
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link
                      href="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      គណនីរបស់ខ្ញុំ
                    </Link>
                  </Button>
                )}
              </div> */}

              {/* Mobile auth buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link
                    href="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ទៅកាន់គណនី
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <Modal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)}>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">
            ចូលគណនី / ចុះឈ្មោះ
          </h2>
          <div className="flex flex-col space-y-3">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsAuthModalOpen(false)}
            >
              <Link href="/login">ចូលគណនី</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full"
              onClick={() => setIsAuthModalOpen(false)}
            >
              <Link href="/signup">ចុះឈ្មោះ</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full text-sm text-foreground/70 hover:text-primary"
              onClick={() => setIsAuthModalOpen(false)}
            >
              <Link href="/profile">ទៅកាន់ការកំណត់គណនី</Link>
            </Button>
          </div>
        </div>
      </Modal>
    </nav>
  );
}
