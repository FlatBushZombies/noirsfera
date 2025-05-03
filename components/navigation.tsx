"use client"

import { motion } from "framer-motion"

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
      <ul className="space-y-2">
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
