"use client"

import { motion, AnimatePresence } from "framer-motion"
import type React from "react"
import { Info, ArrowRight, Database, Brain, Palette, CheckCircle, Play } from "lucide-react"
import { useState } from "react"

interface ServicesSectionProps {
  id?: string
  contactRef?: React.RefObject<HTMLDivElement>
  onNavigate?: (page: string) => void
}

const services = [
  {
    id: 1,
    title: "Fullstack Development",
    icon: Database,
    description: "Complete end-to-end applications with robust backend systems",
    color: "cyan",
    steps: [
      { step: 1, title: "Architecture", desc: "Design scalable system architecture" },
      { step: 2, title: "Backend", desc: "Build APIs and database systems" },
      { step: 3, title: "Frontend", desc: "Create dynamic user interfaces" },
      { step: 4, title: "Integration", desc: "Connect all systems seamlessly" },
    ],
    features: ["API Development", "Database Design", "Cloud Deployment", "Real-time Features"],
  },
  {
    id: 2,
    title: "AI Engineering & Data Analytics",
    icon: Brain,
    description: "Intelligent systems and data-driven insights for business growth",
    color: "purple",
    steps: [
      { step: 1, title: "Data Collection", desc: "Gather and clean relevant datasets" },
      { step: 2, title: "Model Training", desc: "Build and train AI models" },
      { step: 3, title: "Analytics", desc: "Extract actionable insights" },
      { step: 4, title: "Deployment", desc: "Deploy AI solutions at scale" },
    ],
    features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "AI Integration"],
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: Palette,
    description: "Intuitive designs that users love to interact with",
    color: "orange",
    steps: [
      { step: 1, title: "Research", desc: "Understand your users deeply" },
      { step: 2, title: "Wireframe", desc: "Map out user journeys" },
      { step: 3, title: "Prototype", desc: "Create interactive mockups" },
      { step: 4, title: "Test", desc: "Validate with real users" },
    ],
    features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
  },
]

export default function ServicesSection({ id, contactRef, onNavigate }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

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

  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return {
          bg: "bg-cyan-500/10",
          border: "border-cyan-500/20",
          text: "text-cyan-400",
          glow: "shadow-cyan-500/20",
        }
      case "purple":
        return {
          bg: "bg-purple-500/10",
          border: "border-purple-500/20",
          text: "text-purple-400",
          glow: "shadow-purple-500/20",
        }
      case "orange":
        return {
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
          text: "text-orange-400",
          glow: "shadow-orange-500/20",
        }
      default:
        return {
          bg: "bg-gray-500/10",
          border: "border-gray-500/20",
          text: "text-gray-400",
          glow: "shadow-gray-500/20",
        }
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <section id={id} className="space-y-12 p-4 md:p-8">
        {/* Header */}
        <div className="space-y-4">
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.h2
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              How simple it can be to get your
              <span className="block text-cyan-400">Projects Done</span>
            </motion.h2>
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="bg-black border border-gray-800 rounded-full p-3"
            >
              <Info className="h-6 w-6 text-cyan-400" />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Just step away from those traditional old methods of hiring plus managing and see for yourself how we
            transform your ideas into digital reality.
          </motion.p>
        </div>

        {/* Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            const Icon = service.icon
            const isActive = activeService === service.id

            return (
              <motion.div
                key={service.id}
                className={`relative group cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveService(service.id)}
                onHoverEnd={() => setActiveService(null)}
              >
                {/* Main Card */}
                <motion.div
                  className={`
                    relative overflow-hidden rounded-2xl border ${colors.border} 
                    bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm
                    transition-all duration-500 group-hover:scale-[1.02]
                  `}
                  whileHover={{
                    boxShadow: `0 20px 40px -12px ${colors.glow}`,
                  }}
                >
                  {/* Card Header */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                        <Icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <motion.div
                        className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className={`h-5 w-5 ${colors.text}`} />
                      </motion.div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                        >
                          <CheckCircle className={`h-4 w-4 ${colors.text}`} />
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Process Steps */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="border-t border-gray-800 p-6"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-sm font-medium text-white mb-4">Our Process</h4>
                        <div className="space-y-3">
                          {service.steps.map((step, stepIndex) => (
                            <motion.div
                              key={step.step}
                              className={`
                                flex items-center space-x-3 p-3 rounded-lg cursor-pointer
                                transition-all duration-200 hover:bg-gray-800/50
                                ${hoveredStep === step.step ? "bg-gray-800/50" : ""}
                              `}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: stepIndex * 0.1 }}
                              onHoverStart={() => setHoveredStep(step.step)}
                              onHoverEnd={() => setHoveredStep(null)}
                            >
                              <div
                                className={`
                                flex-shrink-0 w-8 h-8 rounded-full border-2 ${colors.border}
                                flex items-center justify-center text-xs font-medium
                                ${hoveredStep === step.step ? colors.bg : "bg-gray-900"}
                                ${hoveredStep === step.step ? colors.text : "text-gray-400"}
                                transition-all duration-200
                              `}
                              >
                                {step.step}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-white">{step.title}</div>
                                <div className="text-xs text-gray-400">{step.desc}</div>
                              </div>
                              <ArrowRight
                                className={`
                                h-4 w-4 transition-all duration-200
                                ${hoveredStep === step.step ? colors.text : "text-gray-600"}
                                ${hoveredStep === step.step ? "translate-x-1" : ""}
                              `}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Overlay */}
                  <motion.div
                    className={`
                      absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5
                      ${service.color === "cyan" ? "from-cyan-500 to-blue-500" : ""}
                      ${service.color === "purple" ? "from-purple-500 to-pink-500" : ""}
                      ${service.color === "orange" ? "from-orange-500 to-red-500" : ""}
                      transition-opacity duration-500 pointer-events-none
                    `}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400">Ready to transform your digital presence?</p>
          <button
            onClick={() => handleScrollTo("contact", contactRef)}
            className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <span>Let's get started on your next project</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </section>
    </div>
  )
}
