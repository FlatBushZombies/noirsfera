"use client"

import type React from "react"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { MobileNavigation } from "@/components/mobile-navigation"
import { SidebarProvider } from "@/components/ui/sidebar"

interface ResponsiveLayoutProps {
  children: React.ReactNode
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-black">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="flex-1 bg-black text-white overflow-auto">{children}</main>
          </div>
        </SidebarProvider>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="bg-black text-white min-h-screen">{children}</main>
      </div>
    </div>
  )
}
