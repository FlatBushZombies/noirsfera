"use client"

import { useState } from "react"
import { Menu, X, Briefcase, FolderOpen, Newspaper, Mail, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const menuItems = [
  {
    title: "About",
    icon: Info,
  },
  {
    title: "Services",
    icon: Briefcase,
  },
  {
    title: "Projects",
    icon: FolderOpen,
  },
  {
    title: "News",
    icon: Newspaper,
  },
  {
    title: "Contact",
    icon: Mail,
  },
]

interface MobileNavProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function MobileNav({ currentPage, onPageChange }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const handlePageChange = (page: string) => {
    onPageChange(page.toLowerCase())
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black border-gray-700 p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="text-xl font-bold text-white">NueStra</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                className="text-white hover:text-cyan-400"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-white mb-4">Navigation</div>
                {menuItems.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handlePageChange(item.title)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                      currentPage === item.title.toLowerCase()
                        ? "bg-gray-800 text-cyan-400"
                        : "text-white hover:text-cyan-400 hover:bg-gray-800"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
