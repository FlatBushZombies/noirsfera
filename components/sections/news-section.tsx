"use client"

import { motion } from "framer-motion"
import { Grid } from "../ui/grid"
import { SocialIcons } from "../ui/social-icons"
import { Button } from "@/components/ui/button"

export default function NewsSection() {
  return (
    <section className="space-y-8">
      <div className="border border-blue-500 p-4 aspect-video w-full"></div>

      <Grid columns={2}>
        <motion.div
          className="bg-gray-900 p-4 aspect-video"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        ></motion.div>
        <motion.div
          className="bg-gray-900 p-4 aspect-video"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
        ></motion.div>
      </Grid>

      <div className="space-y-4">
        <motion.h2 className="text-2xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          blog:
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          This blog is about our new releases and projects on the way.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xs text-gray-400">Subscribe to get news when new projects release. Enter your email:</p>
          <Button>Subscribe</Button>
        </motion.div>

        <SocialIcons />
      </div>
    </section>
  )
}
