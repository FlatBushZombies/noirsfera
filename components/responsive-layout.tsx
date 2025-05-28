"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { SidebarProvider } from "@/components/ui/sidebar"

interface ResponsiveLayoutProps {
  children: React.ReactNode
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  type Section = "about" | "services" | "projects" | "news" | "contact"
  const [activeSection, setActiveSection] = useState<Section>("about")
  const router = useRouter()

  // Handle section change
  const handleSectionChange = (section: Section) => {
    setActiveSection(section)
    router.push(`#${section}`)
  }

  // Get section from URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && ['about', 'services', 'projects', 'news', 'contact'].includes(hash)) {
      setActiveSection(hash as Section)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <SidebarProvider>
          <div className="flex min-h-screen">
            <div className="flex-1 flex flex-col">
              <div className="flex h-16 items-center justify-between px-4">
                {/* Add any header content here if needed */}
              </div>
              <div className="flex-1 flex overflow-hidden">
                <div className="w-[16rem] flex-shrink-0">
                  <AppSidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
                </div>
                <main className="flex-1 bg-black text-white overflow-auto p-4">
                  {children}
                </main>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <MobileNavigation activeSection={activeSection} onSectionChange={handleSectionChange} />
        <main className="bg-black text-white min-h-screen p-4">
          {children}
        </main>
      </div>
    </div>
  )
}
