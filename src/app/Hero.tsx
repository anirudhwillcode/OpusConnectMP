"use client"; 

import React, { useState, useEffect } from "react";
import { World, GlobeConfig } from "@/components/ui/globe";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";

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

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const globeConfig: GlobeConfig = {
    globeColor: "#000080", // Deep blue color
    atmosphereColor: "#ffffff",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1500,
    arcLength: 0.8,
    rings: 2,
    maxRings: 5,
    initialPosition: {
      lat: 0,
      lng: 0,
    },
    autoRotate: true,
    autoRotateSpeed: 0.6,
  };

  const arcData = [
    {
      order: 1,
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.4,
      color: "#ffffff",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* OpusConnect Navbar */}
      <nav className="bg-black text-white py-4 px-6 md:px-12">
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

      {/* Hero Section with Globe */}
      <div className="flex-grow flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <World globeConfig={globeConfig} data={arcData} />
        </div>
        <Logo />
        <div className="relative z-10 text-center text-white px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Connecting Talent, Empowering Opportunities
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            OpusConnect is your gateway to a thriving professional network, where students, alumni, and companies come together to create a future full of opportunities.
          </p>
          {/* Login and Sign Up Buttons */}
          <div className="flex justify-center space-x-4">
  <Link href="/login">
    <Button className="text-white bg-gray-800 hover:bg-gray-700 rounded-lg py-2 px-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      Login
    </Button>
  </Link>
  <Link href="/signup">
    <Button className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg py-2 px-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      Sign Up
    </Button>
  </Link>
</div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}
