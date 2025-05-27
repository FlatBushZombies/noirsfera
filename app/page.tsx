"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import NewsSection from "@/components/sections/news-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import AboutSection from "@/components/sections/about-section"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const router = useRouter()

  const sections = {
    about: <AboutSection />,
    services: <ServicesSection />,
    projects: <ProjectsSection />,
    news: <NewsSection />,
    contact: <ContactSection />,
  }

  // Handle section change
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    router.push(`#${section}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <SidebarProvider>
            <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </SidebarProvider>
        </div>
        <div className="lg:w-3/4 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[70vh] lg:pl-8 w-full"
            >
              <div className="w-full">
                {sections[activeSection as keyof typeof sections]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}