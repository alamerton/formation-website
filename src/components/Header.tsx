"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-customPurple text-white p-4 shadow-md">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Formation Research Logo"
              className="rounded-full sm:hidden"
            />
            <span
              className="hidden sm:inline text-white text-center text-[40px] font-light leading-normal font-kameron"
              // style={{ textShadow: "0px 0px 8px #E79DFF" }}
            >
              Formation Research
            </span>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
        </button>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0 text-[20px] font-serif`}
        >
          {["Home", "About", "Theory of Change", "Contact", "Research"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`
                  }
                  className="block py-2 md:py-0 hover:text-gray-300 transition duration-300"
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
