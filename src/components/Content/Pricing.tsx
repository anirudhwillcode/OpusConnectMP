"use client"

import { motion } from "framer-motion"
import { Briefcase, TrendingUp, Users, Zap, Plus } from "lucide-react"

export default function Component() {
  const features = [
    { icon: Briefcase, title: "Smart Job Matching", description: "AI-powered algorithms to find the perfect candidates" },
    { icon: Users, title: "Diverse Talent Pool", description: "Access to a wide range of skilled professionals" },
    { icon: TrendingUp, title: "Analytics Dashboard", description: "Real-time insights on your recruitment process" },
    { icon: Zap, title: "Quick Hiring", description: "Streamlined process to reduce time-to-hire" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Revolutionize Your Hiring Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Leverage cutting-edge technology to find and hire top talent faster than ever before.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-black bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-6 h-6 mr-2" />
            Add Job
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-70 transition-all duration-300 flex items-start"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-gray-400">
            Join thousands of companies already hiring smarter
          </p>
        </motion.div>
      </div>
    </section>
  )
}