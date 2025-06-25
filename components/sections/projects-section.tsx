"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { SocialIcons } from "../ui/social-icons"
import { ExternalLink, Compass, Code, Github, Atom, Feather, Gem, Sparkles, BookMarked, ArrowRight } from "lucide-react"
import Image from "next/image";


interface ProjectsSectionProps {
  id?: string
  contactRef?: React.RefObject<HTMLDivElement>
  newsRef?: React.RefObject<HTMLDivElement>
  onNavigate?: (page: string) => void
}



const projects = [
  {
    id: 1,
    title: "Camp Guide Landing Page",
    liveUrl: "https://resonant-sunflower-1bb1e7.netlify.app/",
    type: "website",
    icon: "compass",
    color: "from-emerald-400 to-teal-300",
    image: "/camp.jpeg",
    description: "Interactive guide for camping enthusiasts with location recommendations and equipment lists.",
  },
  {
    id: 2,
    title: "IBC Communication Protocol",
    liveUrl: "https://github.com/BrianMakanjira/ibc-go-client",
    type: "github",
    icon: "atom",
    color: "from-blue-400 to-indigo-300",
    image: "/protocol.jpg",
    description: "Implementation of Inter-Blockchain Communication protocol for secure cross-chain transactions.",
  },
  {
    id: 3,
    title: "Article Summarizer",
    liveUrl: "https://legendary-rabanadas-825160.netlify.app/",
    type: "website",
    icon: "feather",
    color: "from-purple-400 to-pink-300",
    image: "/article.jpeg",
    description: "AI-powered tool that condenses long articles into concise, readable summaries.",
  },
  {
    id: 4,
    title: "Modern AI Landing Page",
    liveUrl: "https://brilliant-selkie-8d3439.netlify.app/",
    type: "website",
    icon: "sparkles",
    color: "from-amber-400 to-orange-300",
    image: "/modern.jpg",
    description: "Sleek, responsive landing page for an AI startup with interactive elements and animations.",
  },
  {
    id: 5,
    title: "DMB Pay",
    liveUrl: "https://jocular-sfogliatella-55a4c9.netlify.app/",
    type: "website",
    icon: "gem",
    color: "from-cyan-400 to-sky-300",
    image: "/dmb-pay.jpeg",
    description: "Secure digital payment platform with intuitive user interface and real-time transaction tracking.",
  },
  {
    id: 6,
    title: "Library Backend System",
    liveUrl: "https://github.com/BrianMakanjira/book-api",
    type: "github",
    icon: "bookMarked",
    color: "from-rose-400 to-red-300",
    image: "/library.jpg",
    description: "Robust API for managing library resources, including books, users, and lending operations.",
  },
  {
    id: 7,
    title: "TUT School Website",
    liveUrl: "https://tutschool.ru",
    type: "website",
    icon: "school",
    color: "from-violet-400 to-purple-300",
    image: "/institution.jpeg", 
    description: "Comprehensive website for TUT School, a language and arts institution featuring course information, enrollment, and student resources.",
  }
]

const ProjectsSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(({ id, contactRef,newsRef, onNavigate }, ref) => {
  const handleScrollTo = (targetPage: string, targetRef?: React.RefObject<HTMLDivElement>) => {
    onNavigate?.(targetPage)
    setTimeout(() => {
      targetRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

   // Function to get the appropriate icon based on project icon type
  const getProjectIcon = (iconType: string) => {
    switch (iconType) {
      case "compass":
        return <Compass className="w-6 h-6" />
      case "atom":
        return <Atom className="w-6 h-6" />
      case "feather":
        return <Feather className="w-6 h-6" />
      case "sparkles":
        return <Sparkles className="w-6 h-6" />
      case "gem":
        return <Gem className="w-6 h-6" />
      case "bookMarked":
        return <BookMarked className="w-6 h-6" />
      default:
        return <Code className="w-6 h-6" />
    }
  }

  // Function to get the source icon based on project type
  const getSourceIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github className="w-3 h-3" />
      case "website":
        return <ExternalLink className="w-3 h-3" />
      default:
        return <ExternalLink className="w-3 h-3" />
    }
  }

 return (

   <div className="bg-black min-h-screen">
      <section id={id} className="space-y-12 md:space-y-16 p-6 md:p-12 max-w-7xl mx-auto">
        <div className="space-y-8">
          <motion.h2
            className="text-xl md:text-2xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Projects
          </motion.h2>

          <motion.p
            className="text-gray-300 text-sm md:text-md max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Each project is a clear representation of our vision.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <button
              onClick={() => handleScrollTo("contact", contactRef)}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-semibold group hover:cursor-pointer"
            >
              Let's get started on your next project
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </motion.div>
        </div>

        {/* Description and Social Icons */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm md:text-md leading-relaxed max-w-5xl">
            We build in public - raw, real, and right in front of you. No hype, just progress you can see and be part
            of. Our early access to what we are working on is what keeps the ball rolling forward. As a team of
            passionate and independent creators, we have pride in these partnerships, and we are always open to future
            collaborations.
          </p>

          <div className="space-y-6">
            <button
              onClick={() => handleScrollTo("news", newsRef)}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-semibold group hover:cursor-pointer"
            >
             Subscribe to our newsletter to be updated about new projects 
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            <SocialIcons />
          </div>
        </motion.div>
                {/* Professional Projects Grid - 2 rows x 3 columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group h-[400px] relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
              </div>

              {/* Liquid Glass Effect Icon */}
              <div className="absolute top-6 right-6 z-20">
                <div className="w-20 h-20 relative group-hover:scale-110 transition-all duration-500">
                  {/* Glass background with gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-full opacity-20 blur-md`}
                  ></div>

                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"></div>

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {getProjectIcon(project.icon)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-medium mb-4 border border-white/20">
                    {getSourceIcon(project.type)}
                    <span>{project.type === "github" ? "Open Source" : "Web App"}</span>
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>
                </div>

                <div className="mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 border border-white/20"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
})

ProjectsSection.displayName = "ProjectsSection"

export default ProjectsSection
