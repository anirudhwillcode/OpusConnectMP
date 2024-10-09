'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Assuming you're using lucide-react for icons
import Button from "@/components/Button"; // Assuming you have a Button component

function Logo() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-8 w-8 text-primary flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15,35 L85,35 L85,85 L15,85 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-all duration-1000 ease-in-out ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        style={{
          strokeDasharray: 240,
          strokeDashoffset: animate ? 0 : 240,
        }}
      />
      <path
        d="M35,35 L35,20 L65,20 L65,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-all duration-500 ease-in-out ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        style={{
          strokeDasharray: 70,
          strokeDashoffset: animate ? 0 : 70,
          transitionDelay: "0.5s",
        }}
      />
      <path
        d="M15,55 L85,55"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className={`transition-all duration-500 ease-in-out ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        style={{
          strokeDasharray: 70,
          strokeDashoffset: animate ? 0 : 70,
          transitionDelay: "1s",
        }}
      />
      <circle
        cx="50"
        cy="45"
        r="8"
        fill="currentColor"
        className={`transition-all duration-500 ease-in-out ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{ transitionDelay: "1.2s" }}
      />
    </svg>
  );
}

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-[30px] bg-black flex flex-col">
      {/* OpusConnect Navbar */}
      <nav className="bg-white text-black py-4 px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Logo /> {/* Place Logo Here */}
            <Link href="/" className="text-2xl font-bold">
              OpusConnect
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/admin" className="hover:text-gray-300 transition-colors">
              Admin
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-2">
              <Link href="/admin" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/services" className="hover:text-gray-300 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MainNavbar;
