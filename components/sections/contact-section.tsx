"use client"

import { motion } from "framer-motion"
import { SocialIcons } from "../ui/social-icons"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  id?: string
}

export default function ContactSection({ id }: ContactSectionProps) {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <section 
        id={id} 
        className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 p-6 md:p-8"
      >
        {/* Contact Information Section */}
        <motion.div 
          className="space-y-6 self-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Let's collaborate on your next project. Reach out and we'll respond as soon as possible.
          </motion.p>

          <motion.div 
            className="pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#" className="text-cyan-400 hover:underline text-base">
              View our recent work →
            </a>
          </motion.div>

          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SocialIcons />
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form 
          className="space-y-6 self-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black border-b border-gray-700 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-500 text-lg"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border-b border-gray-700 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-500 text-lg"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-black border-b border-gray-700 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-500 text-lg"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-black border-b border-gray-700 py-3 focus:outline-none focus:border-cyan-400 transition-colors resize-none text-white placeholder-gray-500 text-lg"
            ></textarea>
          </motion.div>

          <motion.div
            className="pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              type="submit" 
              className="w-full md:w-auto px-8 py-6 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-medium text-lg"
            >
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      </section>
    </div>
  )
}