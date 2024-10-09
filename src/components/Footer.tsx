import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  BookOpen,
  Users,
  HelpCircle,
  Mail
} from "lucide-react"
import React from "react"

export const Footer = () => {
  return (
    <footer className="py-10 bg-gray-300 text-black sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Opus Connect</h2>
            <p className="text-base leading-relaxed text-black mb-6">
              Connecting students, educators, and opportunities in one collaborative platform. Empowering education through technology.
            </p>
            <ul className="flex items-center space-x-4">
              {[TwitterIcon, FacebookIcon, InstagramIcon, GithubIcon].map((Icon, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <Icon size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-grablack uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { icon: BookOpen, text: "Courses" },
                { icon: Users, text: "Community" },
                { icon: HelpCircle, text: "Support" },
                { icon: Mail, text: "Contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-base text-grablack hover:text-white transition-colors duration-200"
                  >
                    <item.icon size={16} className="mr-2" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-grablack uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Academic Integrity"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base text-grablack hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-black uppercase mb-4">
              Stay Connected
            </h3>
            <p className="text-base text-black mb-4">
              Subscribe to our newsletter for updates and educational resources.
            </p>
            <form action="#" method="POST" className="space-y-3">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2 text-base text-black placeholder-gray-500 bg-white   border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-12 mb-8 border-gray-700" />

        <p className="text-sm text-center text-black">
          © {new Date().getFullYear()} Opus Connect. All rights reserved. A college project by the Opus Team.
        </p>
      </div>
    </footer>
  )
}