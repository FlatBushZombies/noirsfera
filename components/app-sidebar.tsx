"use client"

import { motion } from "framer-motion"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { User, Briefcase, FolderOpen, Newspaper, Mail } from "lucide-react"
import Head from "next/head"


interface AppSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function AppSidebar({ activeSection, setActiveSection }: AppSidebarProps) {
  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "news", label: "News", icon: Newspaper },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <>
    <Head>
       <link
          href="https://fonts.googleapis.com/css2?family=Cascadia+Mono&display=swap"
          rel="stylesheet"
        />
    </Head>
    <Sidebar className="border-r border-gray-800 bg-black text-white">
      <SidebarHeader className="p-6 bg-black">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-white flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 3.5C8 5.433 6.433 7 4.5 7C2.567 7 1 5.433 1 3.5C1 1.567 2.567 0 4.5 0C6.433 0 8 1.567 8 3.5Z"
                fill="black"
              />
              <path
                d="M15 3.5C15 5.433 13.433 7 11.5 7C9.567 7 8 5.433 8 3.5C8 1.567 9.567 0 11.5 0C13.433 0 15 1.567 15 3.5Z"
                fill="black"
              />
              <path
                d="M8 11.5C8 13.433 6.433 15 4.5 15C2.567 15 1 13.433 1 11.5C1 9.567 2.567 8 4.5 8C6.433 8 8 9.567 8 11.5Z"
                fill="black"
              />
              <path
                d="M15 11.5C15 13.433 13.433 15 11.5 15C9.567 15 8 13.433 8 11.5C8 9.567 9.567 8 11.5 8C13.433 8 15 9.567 15 11.5Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="font-bold text-xl text-white">Noir Sfera</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-6 bg-black">
        <SidebarMenu className="space-y-2">
          {navItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} className="w-full">
                <SidebarMenuButton
                  onClick={() => setActiveSection(item.id)}
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
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  </>
  )
}
