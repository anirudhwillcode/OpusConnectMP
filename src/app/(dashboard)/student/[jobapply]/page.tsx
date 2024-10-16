'use client'

import { useRef, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, HeartIcon, ShareIcon, MapPinIcon, BriefcaseIcon, Users, Eye, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const job = {
  id: 1,
  title: "Business Development Manager",
  company: "Aiveda",
  details: "Aiveda is hiring for the role of Business Development Manager!\n\nJob Description:\n\nIdeal candidate is a motivated, organized, and creative individual who welcomes the challenges of acquiring and developing new business through sales efforts. You will build key customer relationships, identify business opportunities, and close business deals while maintaining extensive knowledge of current market conditions.",
  location: "Delhi",
  salary: "$80,000 - $120,000",
  link: "https://example.com/apply",
  applicants: 20,
  timeLeft: 29,
  eligibilityCriteria: "Fresher • MBA Students • Undergraduate",
  companyPfp: "/placeholder.svg?height=80&width=80",
  impressions: 2585,
  updatedOn: "Oct 16, 2024"
}

export default function Component() {
  const [activeSection, setActiveSection] = useState('details')
  const detailsRef = useRef<HTMLDivElement>(null)
  const datesRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, section: string) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(section)
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#dates') scrollToSection(datesRef, 'dates')
    else if (hash === '#reviews') scrollToSection(reviewsRef, 'reviews')
    else if (hash === '#faqs') scrollToSection(faqsRef, 'faqs')
  }, [])

  return (
    <div className="min-h-screen bg-gyay-100 md:p-8">
      <main className="container mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-2rem)] overflow-hidden">
        <div className="w-full lg:w-2/3 space-y-8 overflow-y-auto pr-4 scrollbar-hide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-none shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <img src={job.companyPfp} alt={job.company} className="w-20 h-20 rounded-lg shadow-md" />
                    <Badge className="absolute -top-2 -right-2 bg-green-500">Hiring</Badge>
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-3xl font-bold text-gray-800 mb-1">{job.title}</h1>
                    <p className="text-lg text-indigo-600 font-semibold">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-1 text-indigo-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <BriefcaseIcon className="w-4 h-4 mr-1 text-indigo-500" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1 text-indigo-500" />
                        <span>Updated: {job.updatedOn}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center bg-indigo-100 p-3 rounded-lg">
                    <div className="text-4xl font-bold text-indigo-600">{job.timeLeft}</div>
                    <div className="text-sm text-indigo-500">Days Left</div>
                  </div>
                </div>
                <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                  {['details', 'dates', 'reviews', 'faqs'].map((section) => (
                    <Button
                      key={section}
                      variant={activeSection === section ? "default" : "outline"}
                      onClick={() => scrollToSection(
                        section === 'details' ? detailsRef :
                        section === 'dates' ? datesRef :
                        section === 'reviews' ? reviewsRef : faqsRef,
                        section
                      )}
                      className={`${activeSection === section ? 'bg-indigo-600 text-white' : 'text-indigo-600'} hover:bg-indigo-500 hover:text-white transition-colors`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {['details', 'dates', 'reviews', 'faqs'].map((section) => (
              activeSection === section && (
                <motion.div
                  key={section}
                  ref={
                    section === 'details' ? detailsRef :
                    section === 'dates' ? datesRef :
                    section === 'reviews' ? reviewsRef : faqsRef
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-semibold mb-4 capitalize text-indigo-700">{section}</h2>
                      {section === 'details' ? (
                        <p className="text-gray-700 whitespace-pre-line">{job.details}</p>
                      ) : (
                        <p className="text-gray-700">
                          {section === 'dates' ? "Information about important dates and deadlines will be displayed here." :
                           section === 'reviews' ? "Company and job reviews from current and former employees will be shown here." :
                           "Frequently asked questions and discussions about the job and company will be listed here."}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        
        <div className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-indigo-300 to-purple-300 text-black border-none shadow-xl">
              <CardContent className="p-6 space-y-4">
                <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-100 transition-colors" size="lg">
                  Apply Now
                </Button>
                <div className="flex justify-between">
                  <Button variant="ghost" size="sm" className="text-black hover:bg-white/20">
                    <HeartIcon className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="ghost" size="sm" className="text-black hover:bg-white/20">
                    <ShareIcon className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
                <div className="space-y-3 bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Applied
                    </span>
                    <span className="font-semibold">{job.applicants}</span>
                  </div>
                  <Progress value={job.applicants} max={100} className="h-2 bg-white/20" />
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Impressions
                    </span>
                    <span className="font-semibold">{job.impressions}</span>
                  </div>
                  <Progress value={job.impressions} max={5000} className="h-2 bg-white/20" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Eligibility</h3>
                <div className="flex flex-wrap gap-2">
                  {job.eligibilityCriteria.split('•').map((criteria, index) => (
                    <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-700">
                      {criteria.trim()}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-purple-200 to-pink-200 text-black border-none shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Refer & Win</h3>
                <p className="text-sm mb-4">MacBook, iPhone, Apple Watch, Cash and more!</p>
                <div className="flex justify-between mb-4">
                  <Button variant="secondary" size="sm">
                    Refer now
                  </Button>
                  <Button variant="secondary" size="sm">
                    Know more
                  </Button>
                </div>
                <div className="flex justify-end">
                  <img src="/placeholder.svg?height=50&width=50" alt="Apple products" className="w-16 h-16 rounded-full shadow-lg" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white border-none shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">The finishing school you need!</h3>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-sm">Courses</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100+</p>
                    <p className="text-sm">Interview prep</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm" className="w-full bg-white text-orange-500 hover:bg-orange-100">
                  Know more
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}