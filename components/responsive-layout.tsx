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
  const [activeSection, setActiveSection] = useState("about")

  // Get section from URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && ['about', 'services', 'projects', 'news', 'contact'].includes(hash)) {
      setActiveSection(hash)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <SidebarProvider>
          <div className="flex min-h-screen">
            
            <main className="flex-1 bg-black text-white overflow-auto p-4">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="bg-black text-white min-h-screen p-4">
          {children}
        </main>
      </div>
    </div>
  )
}
