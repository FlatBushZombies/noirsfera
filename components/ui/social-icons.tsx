"use client"

import { motion } from "framer-motion"
import { FaTelegram, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa"

export function SocialIcons() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-4 h-4 text-black" />,
      url: "https://wa.me/79778148423",
      bgColor: "bg-cyan-100 hover:bg-cyan-200" // Light cyan background
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="w-4 h-4 text-black" />,
      url: "https://t.me/yourusername",
      bgColor: "bg-cyan-200 hover:bg-cyan-300" // Medium cyan background
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-4 h-4 text-black" />,
      url: "https://www.instagram.com/noirsfera",
      bgColor: "bg-cyan-300 hover:bg-cyan-400" // Darker cyan background
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4 text-black" />,
      url: "https://x.com/from_noirsfera",
      bgColor: "bg-cyan-400 hover:bg-cyan-500" // Cyan-400 as base
    }
  ]

  return (
    <div className="flex gap-3 mt-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
          className={`flex items-center justify-center w-8 h-8 rounded-full ${social.bgColor} transition-colors`}
          whileHover={{ 
            scale: 1.2,
            backgroundColor: "#22d3ee" // Force cyan-400 on hover
          }}
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