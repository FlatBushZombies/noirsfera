"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
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
  const titleRef = useRef<HTMLSpanElement>(null)
  const rotatingObjectRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "news", label: "News", icon: Newspaper },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    if (titleRef.current && rotatingObjectRef.current) {
      const text = titleRef.current
      const rotatingObject = rotatingObjectRef.current
      const textContent = text.textContent || ""

      // Clear the text and create spans for each character
      text.innerHTML = ""

      textContent.split("").forEach((char, index) => {
        const span = document.createElement("span")
        span.textContent = char === " " ? "\u00A0" : char
        span.style.display = "inline-block"
        span.style.transformOrigin = "center center"
        span.style.opacity = "0"
        text.appendChild(span)
      })

      // GSAP animation timeline
      const tl = gsap.timeline()

      // Initial entrance animation
      tl.to(text.children, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.05,
      })
        .to(
          text.children,
          {
            rotation: 360,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: {
              amount: 0.4,
              from: "start",
            },
          },
          "-=0.3",
        )
        .to(
          text.children,
          {
            color: "#00bcd4",
            duration: 0.3,
            stagger: 0.02,
          },
          "-=0.2",
        )
        .to(
          text.children,
          {
            color: "#ffffff",
            duration: 0.4,
            stagger: 0.02,
          },
          "-=0.1",
        )

      // Continuous subtle rotation for letters
      gsap.to(text.children, {
        rotation: "+=5",
        duration: 2,
        ease: "sine.inOut",
        stagger: {
          amount: 0.5,
          repeat: -1,
          yoyo: true,
        },
      })

      // Rotating object animation
      gsap.to(rotatingObject, {
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1,
      })

      // Hover animations
      const handleMouseEnter = () => {
        gsap.to(text.children, {
          rotation: "+=180",
          scale: 1.1,
          color: "#00bcd4",
          duration: 0.4,
          ease: "power2.out",
          stagger: {
            amount: 0.2,
            from: "center",
          },
        })

        gsap.to(rotatingObject, {
          scale: 1.2,
          duration: 0.3,
          ease: "back.out(1.7)",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(text.children, {
          scale: 1,
          color: "#ffffff",
          duration: 0.4,
          ease: "power2.out",
          stagger: {
            amount: 0.1,
            from: "center",
          },
        })

        gsap.to(rotatingObject, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        })
      }

      text.addEventListener("mouseenter", handleMouseEnter)
      text.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        text.removeEventListener("mouseenter", handleMouseEnter)
        text.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      <Sidebar className="border-r border-gray-800 bg-black text-white">
        <SidebarHeader className="p-6 bg-black">
          {/* Logo */}
          <div className="flex items-center gap-3 relative">
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
            <span
              ref={titleRef}
              className="font-bold text-xl text-white cursor-pointer select-none py-8"
              style={{ fontFamily: "'Cascadia Mono', monospace" }}
            >
              Noir Sfera
            </span>

            {/* Rotating Object */}
            <div
              ref={rotatingObjectRef}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6 opacity-70"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                  stroke="#00bcd4"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" fill="#00bcd4" opacity="0.3" />
                <path d="M12 6V2M18 12H22M12 18V22M6 12H2" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className=" bg-black py-16">
          <SidebarMenu className="">
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