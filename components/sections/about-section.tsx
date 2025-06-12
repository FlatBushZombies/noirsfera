"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SocialIcons } from "../ui/social-icons"

interface AboutSectionProps {
  id?: string
  servicesRef?: React.RefObject<HTMLDivElement>
  projectsRef?: React.RefObject<HTMLDivElement>
  onNavigate?: (page: string) => void
}

const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(
  ({ id, servicesRef, projectsRef, onNavigate }, ref) => {
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
      <div className="min-h-screen bg-black" ref={ref}>
        <section id={id} className="space-y-4 p-4 md:p-8">
          <div className="space-y-4">
            <motion.h2
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About
            </motion.h2>
            <motion.h3
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Modernizing businesses through futuristic Software.
            </motion.h3>
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A software development agency owned by Developers, specialising in Web Development, Automation, Data
              Science....
              <button
                onClick={() => handleScrollTo("services", servicesRef)}
                className="text-cyan-400 underline decoration-cyan-400 hover:cursor-pointer"
              >
                click to see more.
              </button>
            </motion.p>

            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Ready to turn your ideas into reality? Here at "Noir Sfera", we are focused on helping you evolve your
              business, ideas and visions to reach your targeted audience through the creation of engaging, compelling,
              and high quality applications from scratch. Whether you have a clear vision or need assistance in shaping
              your project, we are here to help.
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
                className="text-cyan-400 hover:underline text-sm underline mr-4 hover:cursor-pointer"
              >
                what we been building
              </button>
              <SocialIcons />
            </motion.div>
          </div>
        </section>
      </div>
    )
  },
)

AboutSection.displayName = "AboutSection"

export default AboutSection
