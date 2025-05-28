"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, Briefcase, FolderOpen, Newspaper, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SidebarMenuButton } from "@/components/ui/sidebar"

interface MobileNavigationProps {
  activeSection: "about" | "services" | "projects" | "news" | "contact"
  onSectionChange: (section: "about" | "services" | "projects" | "news" | "contact") => void
  className?: string
}

export function MobileNavigation({ activeSection, onSectionChange }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionClick = (sectionId: "about" | "services" | "projects" | "news" | "contact") => {
    onSectionChange(sectionId)
    setIsOpen(false)
  }

  type NavItem = {
    id: "about" | "services" | "projects" | "news" | "contact"
    label: string
    icon: React.ComponentType<{ className?: string }>
  }

  const navItems: NavItem[] = [
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "news", label: "News", icon: Newspaper },
    { id: "contact", label: "Contact", icon: Mail },
  ] as const

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur-sm border border-gray-800 text-white hover:bg-gray-900 hover:text-cyan-400"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80 bg-black border-r border-gray-800 text-white">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <nav className="space-y-2 mb-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <SidebarMenuButton
                    onClick={() => handleSectionClick(item.id)}
                    className={`w-full justify-start py-2 px-4 rounded-md transition-colors border-0 ${
                      activeSection === item.id
                        ? "text-cyan-400 bg-gray-900 hover:bg-gray-900 hover:text-cyan-400"
                        : "text-white hover:text-white hover:bg-gray-900/50 bg-transparent"
                    }`}
                    asChild
                  >
                    <button className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  </SidebarMenuButton>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
