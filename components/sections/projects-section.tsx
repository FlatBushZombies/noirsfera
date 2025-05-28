"use client"

import { motion } from "framer-motion"
import { Grid } from "../ui/grid"
import { SocialIcons } from "../ui/social-icons"

interface ProjectsSectionProps {
  id?: string
}

export default function ProjectsSection({ id }: ProjectsSectionProps) {
  const projects = Array(8).fill(null)

  return (
    <section id={id} className="space-y-8 justify-center">
     
      <div className="space-y-4">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Each project is a clear representation of our vision.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <a href="#" className="text-cyan-400 hover:underline text-sm">
            Let's get started on your next project
          </a>
        </motion.div>

        <motion.p
          className="text-gray-400 text-sm mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          We build in public - raw, real, and right in front of you. No hype, just progress you can see and be part of.
          Our early access to what we are working on is what keeps the ball rolling forward. As a team of passionate and
          independent creators, we have pride in these partnerships, and we are always open to future collaborations.
        </motion.p>

        <motion.div className="mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <p className="text-sm text-gray-300">Subscribe to our newsletter to be updated about new projects</p>
          <SocialIcons />
        </motion.div>
      </div>
    </section>
  )
}
