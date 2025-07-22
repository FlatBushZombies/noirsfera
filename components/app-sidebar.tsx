"use client"

import {
  Briefcase,
  FolderOpen,
  Newspaper,
  Mail,
  Info,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "About", url: "/about", icon: Info },
  { title: "Services", url: "/services", icon: Briefcase },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "News", url: "/news", icon: Newspaper },
  { title: "Contact", url: "/contact", icon: Mail },
]

interface AppSidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function AppSidebar({ currentPage, onPageChange }: AppSidebarProps) {
  return (
    <Sidebar className="w-64 min-h-screen bg-[#1E1E1E] border-r border-[#2C2C2C]">
      <SidebarHeader className="p-6 flex items-center justify-center">
        <div className="text-2xl font-bold tracking-wide text-white">
          NoirSfera
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="px-4 space-y-1">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={currentPage === item.title.toLowerCase()}
                className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-white text-sm hover:bg-[#2C2C2C] data-[active=true]:bg-[#2C2C2C] data-[active=true]:text-cyan-400 transition-colors"
              >
                <button
                  onClick={() => onPageChange(item.title.toLowerCase())}
                  className="w-full flex items-center gap-3 text-left"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
