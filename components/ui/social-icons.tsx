"use client"

import { motion } from "framer-motion"

export function SocialIcons() {
  return (
    <div className="flex gap-2 mt-4">
      {[1, 2, 3].map((_, index) => (
        <motion.div
          key={index}
          className="w-6 h-6 rounded-full bg-cyan-400"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        />
      ))}
    </div>
  )
}
