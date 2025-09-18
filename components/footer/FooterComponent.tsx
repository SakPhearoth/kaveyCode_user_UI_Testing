"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FooterComponent() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/kavey-code-logo.png"
                alt="Kavey Code Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-bold text-card-foreground">
                កវី <span className="text-primary">កូដ</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering Khmer and global students with free, high-quality
              coding education. Learn at your own pace and build the skills
              for tomorrow.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                Facebook
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                YouTube
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                GitHub
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Courses</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/courses/html-css" className="hover:text-primary transition-colors">
                  HTML & CSS
                </Link>
              </li>
              <li>
                <Link href="/courses/javascript" className="hover:text-primary transition-colors">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="/courses/python" className="hover:text-primary transition-colors">
                  Python
                </Link>
              </li>
              <li>
                <Link href="/courses/java" className="hover:text-primary transition-colors">
                  Java
                </Link>
              </li>
              <li>
                <Link href="/courses/cpp" className="hover:text-primary transition-colors">
                  C++
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-primary transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 KaveyCode. All rights reserved. Made with ❤️ for students worldwide.</p>
        </div>
      </div>
    </footer>
  );
}