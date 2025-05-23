"use client"

import { motion } from "framer-motion"
import { SocialIcons } from "../ui/social-icons"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="space-y-8">
      <motion.form className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <input
            type="text"
            placeholder="full name"
            className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <input
            type="email"
            placeholder="email"
            className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <input
            type="text"
            placeholder="subject"
            className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <textarea
            placeholder="your message or question"
            rows={4}
            className="w-full bg-transparent border-b border-gray-800 py-2 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
          ></textarea>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="rounded-full">
            send message
          </Button>
        </motion.div>
      </motion.form>

      <div className="space-y-4">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          contact:
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Let's get started on your next project.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <a href="#" className="text-cyan-400 hover:underline text-sm">
            what we been hacking
          </a>
        </motion.div>

        <SocialIcons />
      </div>
    </section>
  )
}
