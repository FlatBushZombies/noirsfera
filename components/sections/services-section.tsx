"use client"

import { motion } from "framer-motion"
import { Grid } from "../ui/grid"
import { Info } from "lucide-react"
import { Features } from "../Features"

export default function ServicesSection() {
  const services = Array(6).fill(null)

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold">services:</h2>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-full p-2"
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
          <a href="#" className="text-cyan-400 hover:underline text-sm">
            Let's get started on your next project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
