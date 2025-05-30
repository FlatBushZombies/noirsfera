"use client"

import { Code, Smartphone, Cloud, Cpu } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const services = [
    {
      id: "web-development",
      title: "Full-Stack Development",
      description: "Scalable web applications built with modern frameworks and architectures.",
      icon: <Code className="w-5 h-5" />,
      color: "text-cyan-400"
    },
    {
      id: "mobile-development",
      title: "Mobile Solutions",
      description: "Cross-platform mobile apps with native performance and UX.",
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-purple-400"
    },
    {
      id: "cloud-solutions",
      title: "Cloud & DevOps",
      description: "Optimized infrastructure and CI/CD pipelines for your applications.",
      icon: <Cloud className="w-5 h-5" />,
      color: "text-blue-400"
    },
    {
      id: "ai-ml",
      title: "AI Engineering",
      description: "Custom machine learning models and AI-powered solutions.",
      icon: <Cpu className="w-5 h-5" />,
      color: "text-emerald-400"
    },
  ]

  return (
    <section className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header with perfect spacing */}
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-cyan-400">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Specialized services tailored to your technical requirements
          </motion.p>
        </div>

        {/* Cards grid with pixel-perfect spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-700/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="h-full flex flex-col bg-gray-900/50 rounded-xl p-8 border border-gray-800 group-hover:border-gray-700 transition-all duration-300 backdrop-blur-sm">
                {/* Icon container with precise spacing */}
                <div className={`mb-7 p-3 rounded-lg bg-gray-800 w-12 h-12 flex items-center justify-center ${service.color}`}>
                  {service.icon}
                </div>
                
                {/* Title with perfect line-height */}
                <h3 className="text-2xl font-semibold text-white mb-5 leading-snug">
                  {service.title}
                </h3>

                {/* Description with ideal paragraph spacing */}
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* CTA with perfect alignment */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span>Explore service</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path 
                        d="M5.75 12.5L10.25 8L5.75 3.5" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}