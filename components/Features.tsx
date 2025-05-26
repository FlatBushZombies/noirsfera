"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Features() {
  const services = [
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      description: "We build scalable web applications using modern technologies and best practices.",
      bgColor: "bg-sky-400",
      textColor: "text-blue-900",
      image: "/mobile-app.png",
      link: "#web-development",
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
      bgColor: "bg-emerald-400",
      textColor: "text-emerald-900",
      image: "/phone-app.png",
      link: "#mobile-development",
    },
    {
      id: "cloud-solutions",
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure and automated deployment pipelines for modern applications.",
      bgColor: "bg-indigo-600",
      textColor: "text-white",
      image: "/images/cloud-solutions.jpg",
      link: "#cloud-solutions",
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
      bgColor: "bg-yellow-400",
      textColor: "text-yellow-900",
      image: "/images/ai-ml.jpg",
      link: "#ai-ml",
    },
  ]

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
    

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${service.bgColor} rounded-2xl p-8 cursor-pointer group transition-all duration-300 hover:shadow-xl relative overflow-hidden min-h-[320px] flex flex-col justify-between`}
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h2 className={`text-2xl md:text-3xl font-bold ${service.textColor} leading-tight max-w-[70%]`}>
                    {service.title}
                  </h2>
                  <ArrowRight
                    className={`${service.textColor} w-6 h-6 group-hover:translate-x-1 transition-transform duration-300`}
                  />
                </div>

                <p className={`${service.textColor} text-lg opacity-90 mb-6 max-w-md`}>{service.description}</p>

                {/* Additional info link */}
                <div className="flex items-center gap-2">
                  <span className={`${service.textColor} text-sm font-medium opacity-80`}>Learn more</span>
                  <ArrowRight className={`${service.textColor} w-4 h-4 opacity-80`} />
                </div>
              </div>

              {/* Image */}
              <div className="absolute bottom-4 right-4 w-32 h-24 rounded-lg overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
