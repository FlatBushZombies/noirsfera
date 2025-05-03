"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NewsSection from "@/components/sections/news-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import AboutSection from "@/components/sections/about-section"
import Navigation from "@/components/navigation"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  const sections = {
    about: <AboutSection />,
    services: <ServicesSection />,
    projects: <ProjectsSection />,
    news: <NewsSection />,
    contact: <ContactSection />,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
        <div className="md:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[70vh]"
            >
              {sections[activeSection as keyof typeof sections]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
