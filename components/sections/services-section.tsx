"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SocialIcons } from "../ui/social-icons"
import type React from "react"

interface ServicesSectionProps {
  id?: string
  projectsRef?: React.RefObject<HTMLDivElement>
  onNavigate?: (page: string) => void
}

export default function ServicesSection({ id, projectsRef, onNavigate }: ServicesSectionProps) {
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
      <section id={id} className="space-y-4 p-4 md:p-8">
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Services
          </motion.h2>
          <motion.h3
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            White glove client hands, we craft timeless digital solutions.
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Every line of code is written with precision, every design crafted with purpose. We specialize in Web
            Development, Automation, Data Science, and AI/ML solutions.
          </motion.p>

          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Our comprehensive services include custom web applications, mobile development, cloud solutions, and digital
            transformation strategies. We work closely with our clients to understand their unique needs and deliver
            solutions that exceed expectations.
          </motion.p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <motion.div
              className="aspect-[3/4] bg-black border border-gray-800 overflow-hidden rounded-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Image
                src="/profiles/lackson.jpg"
                alt="Team member"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <div className="aspect-[3/4] bg-black border border-gray-800 rounded-md"></div>
          </div>

          <motion.div className="mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <button
              onClick={() => handleScrollTo("projects", projectsRef)}
              className="text-cyan-400 hover:underline text-sm underline hover:cursor-pointer"
            >
              what we been building
            </button>
            <SocialIcons />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
