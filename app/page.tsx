"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import NewsSection from "@/components/sections/news-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("about")

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutSection />
      case "services":
        return <ServicesSection/>
      case "projects":
        return <ProjectsSection/>
      case "news":
        return <NewsSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
      <SidebarProvider>
      <div className="flex min-h-screen bg-black">
        <AppSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <SidebarInset className="flex-1 md:ml-4">
          <div className="md:hidden">
            <SidebarTrigger className="fixed top-4 left-4 z-50 bg-black border border-gray-700 text-white hover:text-cyan-400" />
          </div>
          {renderPage()}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
