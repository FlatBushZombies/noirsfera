"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { MobileNavigation } from "@/components/mobile-navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import NewsSection from "@/components/sections/news-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  const router = useRouter()
  const pathname = usePathname()

  // Define section types and components
  type SectionName = "about" | "services" | "projects" | "news" | "contact"
  const sections = {
    about: <AboutSection id="about" />,
    services: <ServicesSection id="services" />,
    projects: <ProjectsSection id="projects" />,
    news: <NewsSection id="news" />,
    contact: <ContactSection id="contact" />,
  } as const

  // Get active section from URL and ensure it's properly typed
  const activeSectionFromUrl = pathname.split("#")?.[1] || "about"
  const validSections = Object.keys(sections) as SectionName[]
  const typedActiveSection = validSections.includes(activeSectionFromUrl as SectionName) 
    ? (activeSectionFromUrl as SectionName) 
    : "about" as SectionName

  // Handle section changes
  const handleSectionChange = (section: SectionName) => {
    router.push(`#${section}`)
  }

  // Use typedActiveSection instead of activeSection
  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex min-h-screen">
          <div className="w-[16rem] flex-shrink-0">
            <SidebarProvider>
              <AppSidebar 
                activeSection={typedActiveSection} 
                onSectionChange={handleSectionChange} 
              />
            </SidebarProvider>
          </div>
          <main className="flex-1 bg-black text-white overflow-auto p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={typedActiveSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-screen"
              >
                <div className="flex-1 overflow-y-auto">
                  <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-cyan-400">
                      {typedActiveSection.charAt(0).toUpperCase() + typedActiveSection.slice(1)}
                    </h2>
                    {sections[typedActiveSection as keyof typeof sections]}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <MobileNavigation 
          activeSection={typedActiveSection} 
          onSectionChange={handleSectionChange} 
        />
        <main className="bg-black text-white min-h-screen p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={typedActiveSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen"
            >
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-cyan-400">
                    {typedActiveSection.charAt(0).toUpperCase() + typedActiveSection.slice(1)}
                  </h2>
                  {sections[typedActiveSection as keyof typeof sections]}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
