"use client"

import { motion } from "framer-motion"
import { FaTelegram, FaWhatsapp } from "react-icons/fa"

export function SocialIcons() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegram className="w-4 h-4 text-white" />,
      url: "https://t.me/yourusername",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-4 h-4 text-white" />,
      url: "https://wa.me/79778148423",
    },
  ]

  return (
    <div className="flex gap-3 mt-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${social.name}`}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 hover:bg-cyan-700 transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  )
}