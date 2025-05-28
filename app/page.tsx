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
  const [activeSection, setActiveSection] = useState<"about" | "services" | "projects" | "news" | "contact">("about")

  const sections = {
    about: <AboutSection />,
    services: <ServicesSection />,
    projects: <ProjectsSection />,
    news: <NewsSection />,
    contact: <ContactSection />,
  } as const

  const handleSectionChange = (section: "about" | "services" | "projects" | "news" | "contact") => {
    setActiveSection(section)
    router.push(`#${section}`)
    // Scroll to top on mobile
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const hash = pathname.split("#")?.[1]
    if (hash && Object.keys(sections).includes(hash)) {
      setActiveSection(hash as "about" | "services" | "projects" | "news" | "contact")
    }
  }, [pathname])

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex flex-col lg:flex-row">
        <MobileNavigation activeSection={activeSection} onSectionChange={handleSectionChange} className="lg:hidden" />
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen"
            >
              {sections[activeSection]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}