"use client"

import { motion } from "framer-motion"
import { FaTelegram, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa"

export function SocialIcons() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="w-4 h-4 text-white" />,
      url: "https://wa.me/79778148423",
      bgColor: "bg-green-600 hover:bg-green-700" // WhatsApp green
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="w-4 h-4 text-white" />,
      url: "https://t.me/yourusername",
      bgColor: "bg-blue-500 hover:bg-blue-600" // Telegram blue
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-4 h-4 text-white" />,
      url: "https://www.instagram.com/noirsfera",
      bgColor: "bg-pink-600 hover:bg-pink-700" // Instagram gradient would need custom CSS
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4 text-white" />,
      url: "https://twitter.com/yourusername",
      bgColor: "bg-black hover:bg-gray-800" // Twitter black
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