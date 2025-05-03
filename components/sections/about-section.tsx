"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Grid } from "../ui/grid"
import { SocialIcons } from "../ui/social-icons"

export default function AboutSection() {
  return (
    <section className="space-y-8">
      <Grid>
        <div className="border border-blue-500 p-4 aspect-video"></div>
        <div className="bg-gray-900 p-4 aspect-video"></div>
        <div className="bg-gray-900 p-4 aspect-video"></div>
        <div className="bg-gray-900 p-4 aspect-video"></div>
      </Grid>

      <div className="space-y-4">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          about:
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
          A uniquely development agency headed by Developers, Specializing in Web Development, Automation, Data
          Analysis.
        </motion.p>

        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Ready to turn your ideas into reality? Here at "Nor Stera", we are focused on helping you evolve your
          business, ideas and visions to reach your targeted audience through the creation of engaging, innovative, and
          high quality software solutions. We are a team of passionate and independent creators, we have pride in these
          partnerships, and we are always open to future collaborations.
        </motion.p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <motion.div
            className="aspect-[3/4] bg-gray-900 overflow-hidden rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.PNG-6u8nKUeMnJRk8Jnl95G7D5v51cpFNO.png"
              alt="Team member"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="aspect-[3/4] bg-gray-900"></div>
          <div className="aspect-[3/4] bg-gray-900"></div>
        </div>

        <motion.div className="mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <a href="#" className="text-cyan-400 hover:underline text-sm">
            what we been hacking
          </a>
          <SocialIcons />
        </motion.div>
      </div>
    </section>
  )
}
