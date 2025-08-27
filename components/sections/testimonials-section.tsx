"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, Quote, ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialsProps {
  onNavigate: (page: string) => void
  contactRef?: React.RefObject<HTMLDivElement>
}

export default function TestimonialsSection({ onNavigate, contactRef }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: "tutschool",
      projectName: "Tut School - Language Learning Platform",
      clientName: "Elena Volkov",
      clientRole: "Founder & Director",
      clientAvatar: "/",
      rating: 5,
      testimonial:
        "Working with this team was exceptional. They delivered a modern, responsive website that perfectly captures our language school's mission. The multilingual support and mobile optimization exceeded our expectations. Our student enrollment increased by 40% within the first month of launch.",
      projectImage: "/desktop.png",
      mobileImage: "/mobile.jpg",
      projectUrl: "https://tutschool.ru",
      completionDate: "March 2024",
      category: "Education & E-learning",
    },

  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Client <span className="text-cyan-400">Testimonials</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl text-pretty">
            Real feedback from satisfied clients who trusted us with their digital transformation
          </p>
        </div>

        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <Card className="bg-white text-black overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[350px]">
                        {/* Left side - Project Demo */}
                        <div className="relative bg-gray-50 p-6 flex items-center justify-center">
                          <div className="flex items-center justify-center space-x-8 w-full">
                            {/* Desktop Preview */}
                            <div className="relative flex-shrink-0 group">
                              <img
                                src={testimonial.projectImage || "/placeholder.svg"}
                                alt="Desktop Preview"
                                className="w-64 h-40 object-cover rounded-lg shadow-md border transition-transform duration-300 group-hover:-translate-y-2"
                              />
                              <Badge className="absolute top-2 left-2 bg-blue-500 text-white text-xs">Desktop</Badge>
                            </div>

                            <div className="relative flex-shrink-0 group">
                              <img
                                src={testimonial.mobileImage || "/placeholder.svg"}
                                alt="Mobile Preview"
                                className="w-28 h-48 object-cover rounded-lg shadow-md border transition-transform duration-300 group-hover:-translate-y-2"
                              />
                              <Badge className="absolute top-1 left-1 bg-purple-500 text-white text-xs">Mobile</Badge>
                            </div>
                          </div>
                        </div>

                        {/* Right side - Testimonial Content */}
                        <div className="p-6 flex flex-col justify-center">
                          {/* Star Rating */}
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>

                          {/* Testimonial Quote */}
                          <Quote className="w-6 h-6 text-gray-400 mb-3" />
                          <blockquote className="text-base text-gray-800 mb-4 text-pretty leading-relaxed line-clamp-4">
                            "{testimonial.testimonial}"
                          </blockquote>

                          {/* Client Info */}
                          <div className="flex items-center space-x-3 mb-4">
                            <img
                              src={testimonial.clientAvatar || "/placeholder.svg"}
                              alt={testimonial.clientName}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm">{testimonial.clientName}</h4>
                              <p className="text-gray-600 text-xs">{testimonial.clientRole}</p>
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="space-y-2">
                            <h3 className="font-semibold text-gray-900 text-sm">{testimonial.projectName}</h3>

                            <div className="flex items-center justify-between pt-2">
                              <span className="text-xs text-gray-500">{testimonial.completionDate}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-gray-300 hover:border-blue-500 hover:text-blue-500 bg-transparent text-xs h-7"
                                onClick={() => window.open(testimonial.projectUrl, "_blank")}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Visit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-cyan-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-pretty">
            Let's discuss your project and create something amazing together
          </p>
          <Button
            onClick={() => onNavigate("contact")}
            className="bg-cyan-400 text-black hover:bg-cyan-300 px-8 py-3 text-lg font-semibold"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  )
}
