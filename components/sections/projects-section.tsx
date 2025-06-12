"use client"

import { motion } from "framer-motion"
import { SocialIcons } from "../ui/social-icons"
import { ExternalLink } from "lucide-react"

interface ProjectsSectionProps {
  id?: string
}

const projects = [
  {
    id: 1,
    title: "Enterprise Dashboard",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "AI-Powered CRM",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Financial Trading Platform",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Healthcare Management System",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "E-Learning Platform",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Supply Chain Optimizer",
    liveUrl: "#",
  },
]

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  return (
    <div className="bg-black min-h-screen">
      <section id={id} className="space-y-12 md:space-y-16 p-6 md:p-12 max-w-7xl mx-auto">
        <div className="space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Projects
          </motion.h2>

          <motion.p
            className="text-gray-300 text-xl md:text-2xl max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Each project is a clear representation of our vision.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-xl font-semibold group"
            >
              Let's get started on your next project
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>
        </div>

        {/* Description and Social Icons */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-5xl">
            We build in public - raw, real, and right in front of you. No hype, just progress you can see and be part
            of. Our early access to what we are working on is what keeps the ball rolling forward. As a team of
            passionate and independent creators, we have pride in these partnerships, and we are always open to future
            collaborations.
          </p>

          <div className="space-y-6">
            <p className="text-xl text-gray-200 font-semibold">
              Subscribe to our newsletter to be updated about new projects
            </p>
            <SocialIcons />
          </div>
        </motion.div>

        {/* Professional Projects Grid - 2 rows x 3 columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group border border-gray-700 hover:border-cyan-400"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="p-8 text-center space-y-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
