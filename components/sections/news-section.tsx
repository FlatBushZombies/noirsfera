"use client"

import { motion } from "framer-motion"
import { SocialIcons } from "../ui/social-icons"
import { Button } from "@/components/ui/button"

interface NewsSectionProps {
  id?: string
}

export default function NewsSection({ id }: NewsSectionProps) {
  return (
    <div className="bg-black min-h-screen">
      <section id={id} className="space-y-6 md:space-y-8 p-4 md:p-8">
        <div className="border border-blue-500 p-4 aspect-video w-full bg-black rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="aspect-video bg-gray-800 rounded"></div>
          <div className="aspect-video bg-gray-800 rounded"></div>
        </div>

        <div className="space-y-4">
          <motion.h2
            className="text-xl md:text-2xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            News
          </motion.h2>

          <motion.p
            className="text-gray-400 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            This blog is about our new releases and projects on the way.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs md:text-sm text-gray-400">
              Subscribe to get news when new projects release. Enter your email:
            </p>
            <Button className="bg-cyan-400 text-black hover:bg-cyan-300 w-full sm:w-auto">Subscribe</Button>
          </motion.div>

          <SocialIcons />
        </div>
      </section>
    </div>
  )
}
