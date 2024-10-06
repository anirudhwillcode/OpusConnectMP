'use client'

import { useState, useEffect } from 'react'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'

function Logo() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center space-x-2 p-4">
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
            animate ? 'opacity-100' : 'opacity-0'
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
            animate ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            strokeDasharray: 70,
            strokeDashoffset: animate ? 0 : 70,
            transitionDelay: '0.5s',
          }}
        />
        <path
          d="M15,55 L85,55"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className={`transition-all duration-500 ease-in-out ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            strokeDasharray: 70,
            strokeDashoffset: animate ? 0 : 70,
            transitionDelay: '1s',
          }}
        />
        <circle
          cx="50"
          cy="45"
          r="8"
          fill="currentColor"
          className={`transition-all duration-500 ease-in-out ${
            animate ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ transitionDelay: '1.2s' }}
        />
      </svg>
      {/* Responsive text handling */}
      <div className="flex flex-col">
  <span className="text-lg font-bold text-primary leading-tight hidden lg:block">
    OpusConnect
  </span>
  <span className="text-xs text-muted-foreground hidden xl:block">
    Bridging Talents
  </span>
</div>

    </div>
  )
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/*left*/}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-primarycolr overflow-hidden'>
        <Logo />
        <Menu/>
        {/* Add other sidebar content here */}
      </div>
      {/*right*/}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-200 overflow-scroll'>
         <Navbar/> 
        {children}
      </div>
    </div>
  )
}
