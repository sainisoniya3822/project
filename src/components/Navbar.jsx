"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
    { name: "BOOK HOTEL", path: "/booking" },
    { name: "EVENTS", path: "/events" },
  ];

  const isActive = (path) => pathname === path;

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else if (pathname !== "/") {
      router.push("/contact");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f2e6d8] shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-22 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-20 w-20 overflow-hidden rounded-full">
              <img
                src="./assets/madhuramlogo.png"
                alt="Madhuram Heritage Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#9c9491] ${
                  isActive(item.path)
                    ? "border-b-2 border-[#562D1D] pb-1 text-[#562D1D]"
                    : "text-[#562D1D]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={scrollToContact}
              className="rounded-md bg-[#562D1D] px-6 py-2 font-medium text-[#f7eee3] transition-all duration-300 hover:scale-105"
            >
              ENQUIRY NOW
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#562D1D]" />
            ) : (
              <Menu className="h-6 w-6 text-[#562D1D]" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t bg-[#f2e6d8] md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block rounded-md px-3 py-2 text-sm font-semibold ${
                    isActive(item.path)
                      ? "bg-[#562D1D] text-[#f2e6d8]"
                      : "bg-[#562D1D] text-[#f2e6d8]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToContact();
                  }}
                  className="w-full rounded-md bg-[#562D1D] px-4 py-2 font-medium text-[#f2e6d8]"
                >
                  ENQUIRY NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;