'use client'

import React, { useState, useEffect } from "react"
import { World, GlobeConfig } from "@/components/ui/globe"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

function Logo() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="h-10 w-10 text-white flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        d="M15,35 L85,35 L85,85 L15,85 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M35,35 L35,20 L65,20 L65,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.path
        d="M15,55 L85,55"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
      />
      <motion.circle
        cx="50"
        cy="45"
        r="8"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </motion.svg>
  )
}

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const globeConfig: GlobeConfig = {
    globeColor: "#000090",
    atmosphereColor: "#ffffff",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 5500,
    arcLength: 1.8,
    rings: 5,
    maxRings: 10,
    initialPosition: { lat: 0, lng: 0 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  const arcData = [
    { order: 1, startLat: 37.7749, startLng: -122.4194, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.4, color: "#4FD1C5" },
    { order: 2, startLat: 35.6762, startLng: 139.6503, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: "#F6AD55" },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.5, color: "#9F7AEA" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col">
      <nav className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white py-4 px-6 md:px-12 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
            <Link href="/" className="text-2xl font-bold">OpusConnect</Link>
          </motion.div>
          <motion.div 
            className="hidden md:flex space-x-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {["Admin", "About", "Services", "Contact"].map((item, index) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
                {item}
              </Link>
            ))}
          </motion.div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div 
            className="mt-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2">
              {["Admin", "About", "Services", "Contact"].map((item, index) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
        <motion.div 
          className="relative z-10 text-white px-4 md:px-12 py-12 md:py-0 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Connecting Talent, Empowering Opportunities
          </h1>
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            OpusConnect is your gateway to a thriving professional network, where students, alumni, and companies come together to create a future full of opportunities.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-lg">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </motion.div>
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
          <World globeConfig={globeConfig} data={arcData} />
        </div>
      </main>

      <motion.div 
        className="text-center py-6 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Button variant="ghost" className="animate-bounce">
          Learn More <ChevronDown className="ml-2" />
        </Button>
      </motion.div>
    </div>
  )
}