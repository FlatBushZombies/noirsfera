"use client"

import type React from "react"

import { useState, useRef } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import NewsSection from "@/components/sections/news-section"
import ContactSection from "@/components/sections/contact-section"

export default function NarStraPortfolio() {
  const [currentPage, setCurrentPage] = useState("about")
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return (
          <AboutSection
            ref={aboutRef}
            servicesRef={servicesRef as React.RefObject<HTMLDivElement>}
            projectsRef={projectsRef as React.RefObject<HTMLDivElement>}
            onNavigate={handleNavigate}
          />
        )
      case "services":
        return (
          <ServicesSection contactRef={contactRef as React.RefObject<HTMLDivElement>} onNavigate={handleNavigate} />
        )
      case "projects":
        return (
          <ProjectsSection contactRef={contactRef as React.RefObject<HTMLDivElement>} onNavigate={handleNavigate} />
        )
      case "news":
        return <NewsSection newsRef={newsRef as React.RefObject<HTMLDivElement>} onNavigate={handleNavigate}/>
      case "contact":
        return (
          <ContactSection projectsRef={projectsRef as React.RefObject<HTMLDivElement>} onNavigate={handleNavigate} />
        )
      default:
        return (
          <AboutSection
            ref={aboutRef}
            servicesRef={servicesRef as React.RefObject<HTMLDivElement>}
            projectsRef={projectsRef as React.RefObject<HTMLDivElement>}
            onNavigate={handleNavigate}
          />
        )
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-black w-full">
        <AppSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <SidebarInset className="flex-1 md:ml-4">
          <div className="md:hidden">
            <SidebarTrigger className="fixed top-4 left-4 z-50 bg-black border border-gray-700 text-white hover:text-cyan-800" />
          </div>
          {renderPage()}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
