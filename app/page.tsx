"use client"

import type React from "react"

import { useState, useRef } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import { Button } from "@/components/ui/button"

export default function Noirsfera() {
  const [currentPage, setCurrentPage] = useState("about")
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
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
          <ServicesSection projectsRef={projectsRef as React.RefObject<HTMLDivElement>} onNavigate={handleNavigate} />
        )
      case "projects":
        return (
          <ProjectsSection contactRef={contactRef as React.RefObject<HTMLDivElement>} onNavigate={handleNavigate} />
        )
      case "news":
        return (
          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="w-full max-w-4xl">
              <div className="border-2 border-blue-500 rounded-lg p-8 mb-8 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Latest News & Updates</h2>
                  <p className="text-gray-400">Featured content will appear here</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-6 min-h-[200px]">
                    <div className="w-full h-32 bg-gray-700 rounded mb-4"></div>
                    <h3 className="text-white font-semibold mb-2">Blog Post {i}</h3>
                    <p className="text-gray-400 text-sm">Preview of blog content...</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <span className="text-white font-semibold">news: </span>
                  <span className="text-gray-400">This blog is about our new releases and projects on the way.</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  Subscribe to our newsletter and get updates straight from your inbox.
                </p>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded">Subscribe</Button>
              </div>
            </div>
          </div>
        )
      case "contact":
        return <ContactSection />
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
            <SidebarTrigger className="fixed top-4 left-4 z-50 bg-black border border-gray-700 text-white hover:text-cyan-400" />
          </div>
          {renderPage()}
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
