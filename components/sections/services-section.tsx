"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SocialIcons } from "../ui/social-icons"
import type React from "react"
import { Info } from "lucide-react"
import { Features } from "../Features"

interface ServicesSectionProps {
  id?: string
  contactRef?: React.RefObject<HTMLDivElement>
  onNavigate?: (page: string) => void
}

export default function ServicesSection({ id, contactRef, onNavigate }: ServicesSectionProps) {
  const handleScrollTo = (targetPage: string, targetRef?: React.RefObject<HTMLDivElement>) => {
    onNavigate?.(targetPage)
    setTimeout(() => {
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  return (
     <div className="min-h-screen bg-black">
    <section id={id} className="space-y-6 md:space-y-8 p-4 md:p-8">
      <div className="space-y-4">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h2
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Services
          </motion.h2>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="bg-black border border-gray-800 rounded-full p-2"
          >
            <Info className="h-5 w-5 text-cyan-400" />
          </motion.div>
        </motion.div>
        <Features />
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          While others chase trends, we craft timeless digital solutions. Every line of code is written with intention,
          every design crafted with purpose.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <button onClick={() => handleScrollTo("contact", contactRef)} className="text-cyan-400 hover:underline text-sm">
            Let's get started on your next project
          </button>
        </motion.div>
      </div>
    </section>
    </div>
  )
}
