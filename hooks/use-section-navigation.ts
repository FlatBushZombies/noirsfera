"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export function useSectionNavigation() {
  const pathname = usePathname()
  const router = useRouter()

  // Handle initial navigation to section based on URL hash
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }, 100)
      }
    }
  }, [pathname])

  // Navigate to a section
  const navigateToSection = (sectionId: string, behavior: ScrollBehavior = "smooth") => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({
        behavior,
        block: "start",
      })

      // Update URL without page reload
      window.history.pushState({}, "", `${pathname}#${sectionId}`)
    }
  }

  return { navigateToSection }
}
