"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { SocialIcons } from "../ui/social-icons"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface ContactSectionProps {
  id?: string
  projectsRef?: React.RefObject<HTMLDivElement>
  onNavigate?: (page: string) => void
}

interface FormData {
  fullName: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function ContactSection({ id, projectsRef, onNavigate }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleScrollTo = (targetPage: string, targetRef?: React.RefObject<HTMLDivElement>) => {
    onNavigate?.(targetPage)
    setTimeout(() => {
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setStatus({ type: "error", message: "Please enter your full name" })
      return false
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" })
      return false
    }
    if (!formData.subject.trim()) {
      setStatus({ type: "error", message: "Please enter a subject" })
      return false
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Please enter your message" })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus({ type: "loading", message: "Sending message..." })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: formData.email,
          name: formData.fullName,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Email sending error:", error)
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact us directly.",
      })
    }
  }

  const resetStatus = () => {
    setStatus({ type: "idle", message: "" })
  }

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <section id={id} className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 p-6 md:p-8">
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
            <button
              onClick={() => handleScrollTo("projects", projectsRef)}
              className="text-cyan-400 hover:underline text-base hover:cursor-pointer"
            >
              View our recent work →
            </button>
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
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Message */}
          {status.type !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 p-3 rounded-lg ${
                status.type === "success"
                  ? "bg-green-900/20 border border-green-500/20 text-green-400"
                  : status.type === "error"
                    ? "bg-red-900/20 border border-red-500/20 text-red-400"
                    : "bg-blue-900/20 border border-blue-500/20 text-blue-400"
              }`}
            >
              {status.type === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
              {status.type === "success" && <CheckCircle className="w-4 h-4" />}
              {status.type === "error" && <AlertCircle className="w-4 h-4" />}
              <span className="text-sm">{status.message}</span>
              {status.type !== "loading" && (
                <button type="button" onClick={resetStatus} className="ml-auto text-xs opacity-70 hover:opacity-100">
                  ×
                </button>
              )}
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              disabled={status.type === "loading"}
              className="w-full bg-black border-b border-gray-700 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-500 text-lg disabled:opacity-50"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              disabled={status.type === "loading"}
              className="w-full bg-black border-b border-gray-700 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-500 text-lg disabled:opacity-50"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              disabled={status.type === "loading"}
              className="w-full bg-black border-b border-gray-700 py-3 focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-500 text-lg disabled:opacity-50"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows={5}
              disabled={status.type === "loading"}
              className="w-full bg-black border-b border-gray-700 py-3 focus:outline-none focus:border-cyan-400 transition-colors resize-none text-white placeholder-gray-500 text-lg disabled:opacity-50"
              required
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
              disabled={status.type === "loading"}
              className="w-full md:w-auto px-8 py-6 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {status.type === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </motion.form>
      </section>
    </div>
  )
}