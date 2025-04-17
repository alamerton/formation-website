"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white p-4">
      {/* Desktop header gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent pointer-events-none"></div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40" />
      )}

      <nav className="container mx-auto flex flex-wrap justify-between items-center relative">
        {/* Logo section */}
        <div className="flex items-center space-x-4 z-50">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Formation Research Logo"
              className="rounded-full sm:hidden"
            />
            <span className="hidden sm:inline text-white text-center text-[40px] font-light leading-normal font-serif">
              Formation Research
            </span>
          </Link>
        </div>

        {/* Hamburger/X Button (mobile only) */}
        <button
          ref={buttonRef}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <ul
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0 text-[20px] 
            bg-purple-900/95 backdrop-blur-lg md:bg-transparent md:backdrop-blur-0 
            absolute md:static top-[72px] left-0 right-0 py-6 md:py-0 space-y-4 md:space-y-0
            md:relative md:top-auto md:left-auto md:right-auto md:py-0 md:bg-none
            transition-opacity duration-300 ease-in-out z-40`}
        >
          {["Home", "About", "Theory of Change", "Team", "Research"].map(
            (item) => (
              <li key={item} className="px-4 md:px-0">
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`
                  }
                  className="block py-2 px-4 md:py-0 hover:bg-white/10 md:hover:bg-transparent md:hover:text-gray-300 transition-all duration-300 rounded-lg md:rounded-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
