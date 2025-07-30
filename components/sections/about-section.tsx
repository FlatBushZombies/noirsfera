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

    const teamMembers = [
      {
        name: "Lackson",
        title: "Lead Engineer",
        roles: [
          "Aeronautical Engineer",
          "Software Architecture Specialist",
          "Systems Design Expert",
          "Technical Project Lead",
        ],
        image: "/profiles/lackson.jpg",
      },
      {
        name: "Brian",
        title: "FullStack Developer",
        roles: [
          "Fullstack Engineer",
          "Frontend Development Specialist",
          "Backend Systems Architect",
          "Database Design Expert",
        ],
        image: "/placeholder.svg?height=400&width=300",
      },
    ]

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
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="aspect-[3/4] bg-black border border-gray-800 overflow-hidden rounded-md relative group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.title}`}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Professional Role Overlay - Only visible on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                    <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-lg font-bold mb-1 text-white">{member.name}</h4>
                      <p className="text-cyan-400 text-sm font-medium mb-3 border-b border-cyan-400/30 pb-2">
                        {member.title}
                      </p>

                      {/* Professional Roles List */}
                      <div className="space-y-1">
                        <p className="text-xs text-gray-300 uppercase tracking-wide mb-2 font-medium">
                          Professional Roles
                        </p>
                        {member.roles.map((role, roleIndex) => (
                          <div
                            key={roleIndex}
                            className="flex items-center text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300"
                            style={{ transitionDelay: `${100 + roleIndex * 50}ms` }}
                          >
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 border border-cyan-400/20 rounded-md" />
                  </div>
                </motion.div>
              ))}
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
