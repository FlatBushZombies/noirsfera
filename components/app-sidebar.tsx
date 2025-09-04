"use client"

import { Briefcase, FolderOpen, Newspaper, Mail, Info, MessageSquare } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
  {
    title: "Services",
    url: "/services",
    icon: Briefcase,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Testimonials",
    url: "/testimonials",
    icon: MessageSquare,
  },
  {
    title: "News",
    url: "/news",
    icon: Newspaper,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
]

interface AppSidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function AppSidebar({ currentPage, onPageChange }: AppSidebarProps) {
  const { isMobile, setOpenMobile } = useSidebar()

  const handlePageChange = (page: string) => {
    onPageChange(page)
    // Close the mobile drawer when a menu item is clicked (mobile only)
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <Sidebar className="border-r border-gray-700 bg-black">
      <SidebarHeader className="p-8 bg-black">
        <div className="text-2xl font-bold text-white">noir Sfera</div>
      </SidebarHeader>
      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentPage === item.title.toLowerCase()}
                    className="text-white hover:text-cyan-400 hover:bg-gray-800 data-[active=true]:bg-gray-800 data-[active=true]:text-cyan-400 p-6 transition-transform duration-300 hover:translate-x-2 mb-2"
                  >
                    <button
                      type="button"
                      onClick={() => handlePageChange(item.title.toLowerCase())}
                      className="group flex items-center gap-3"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 group-hover:border-2 group-hover:border-white">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-lg">{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
