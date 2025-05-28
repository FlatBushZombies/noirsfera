"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { MobileNavigation } from "@/components/mobile-navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ResponsiveLayout } from "@/components/responsive-layout"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import NewsSection from "@/components/sections/news-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<"about" | "services" | "projects" | "news" | "contact">("about")

  const sections = {
    about: <AboutSection id="about" />,
    services: <ServicesSection id="services" />,
    projects: <ProjectsSection id="projects" />,
    news: <NewsSection id="news" />,
    contact: <ContactSection id="contact" />,
  } as const

  const handleSectionChange = (section: "about" | "services" | "projects" | "news" | "contact") => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Update URL hash
    router.push(`#${section}`)
  }

  useEffect(() => {
    const hash = pathname.split("#")?.[1]
    if (hash && Object.keys(sections).includes(hash)) {
      setActiveSection(hash as "about" | "services" | "projects" | "news" | "contact")
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname])

  return (
    <ResponsiveLayout>
      <div className="flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen"
            >
              <div className="space-y-16">
                {Object.entries(sections).map(([section, Component]) => (
                  <div key={section} id={section} className="space-y-8">
                    <h2 className="text-4xl font-bold text-cyan-400">{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                    {Component}
                  </div>
                ))}
              </div>
            </motion.div>
        </AnimatePresence>
      </div>
    </ResponsiveLayout>
  )
}