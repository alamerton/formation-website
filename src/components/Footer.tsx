"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-white">
        <p>{new Date().getFullYear()} Formation Research</p>
      </div>
    </footer>
  );
};

export default Footer;
