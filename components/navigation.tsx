"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-24">
            <div className="p-6 h-full flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-8 rounded-md bg-black flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 3.5C8 5.433 6.433 7 4.5 7C2.567 7 1 5.433 1 3.5C1 1.567 2.567 0 4.5 0C6.433 0 8 1.567 8 3.5Z"
                fill="white"
              />
              <path
                d="M15 3.5C15 5.433 13.433 7 11.5 7C9.567 7 8 5.433 8 3.5C8 1.567 9.567 0 11.5 0C13.433 0 15 1.567 15 3.5Z"
                fill="white"
              />
              <path
                d="M8 11.5C8 13.433 6.433 15 4.5 15C2.567 15 1 13.433 1 11.5C1 9.567 2.567 8 4.5 8C6.433 8 8 9.567 8 11.5Z"
                fill="white"
              />
              <path
                d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="font-bold text-xl">Noir Sfera</span>
        </div>
      </div>
      <ul className="space-y-2 mt-8">
        {navItems.map((item) => (
          <motion.li key={item.id} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => setActiveSection(item.id)}
              className={`text-left w-full py-2 px-4 rounded-md transition-colors ${
                activeSection === item.id
                  ? "text-cyan-400 bg-gray-900"
                  : "text-gray-400 hover:text-white hover:bg-gray-900/50"
              }`}
            >
              {item.label}
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}
