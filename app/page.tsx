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

  const sections = {
    about: <AboutSection id="about" />,
    services: <ServicesSection id="services" />,
    projects: <ProjectsSection id="projects" />,
    news: <NewsSection id="news" />,
    contact: <ContactSection id="contact" />,
  } as const

  const handleSectionChange = (section: "about" | "services" | "projects" | "news" | "contact") => {
    router.push(`#${section}`)
  }

  useEffect(() => {
    const hash = pathname.split("#")?.[1]
    if (hash && Object.keys(sections).includes(hash)) {
      // The active section will be managed by ResponsiveLayout
    }
  }, [pathname])

  return (
    <div className="flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname.split("#")?.[1] || "about"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        >
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-cyan-400">
                {(pathname.split("#")?.[1] || "about").charAt(0).toUpperCase() + (pathname.split("#")?.[1] || "about").slice(1)}
              </h2>
              {sections[pathname.split("#")?.[1] || "about" as keyof typeof sections]}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}