"use client"

import { useState } from "react"
import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react"

interface NewsSectionProps {
  id?: string
  newsRef?: React.RefObject<HTMLDivElement>
  onNavigate?: (page: string) => void
}

const NewsSection = forwardRef<HTMLDivElement, NewsSectionProps>(({ id, newsRef, onNavigate }, ref) => {
  const handleScrollTo = (targetPage: string, targetRef?: React.RefObject<HTMLDivElement>) => {
      onNavigate?.(targetPage)
      setTimeout(() => {
        targetRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    }
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "All",
    "Web Development",
    "AI & Machine Learning",
    "Design",
    "Mobile",
    "DevOps",
    "Security",
    "Performance",
  ]

  const featuredArticles = [
    {
      id: 1,
      title: "Building the Future: How AI is Revolutionizing Modern Web Development",
      excerpt:
        "Exploring the cutting-edge intersection of artificial intelligence and web development, and how it's reshaping the digital landscape.",
      author: "Brian Makanjira",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "/ai-ml.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Next.js 15 introduces revolutionary server components that change everything",
      excerpt:
        "A deep dive into the new server components architecture and how it improves performance and developer experience.",
      author: "Sarah Chen",
      date: "Dec 14, 2024",
      readTime: "6 min read",
      category: "Web Development",
      image: "/node.jpg",
    },
  ]

  const allArticles = [
    ...featuredArticles,
    {
      id: 3,
      title: "Serverless architecture: Building scalable applications without managing servers",
      excerpt: "A comprehensive guide to serverless architecture and its benefits for modern application development.",
      author: "David Park",
      date: "Dec 11, 2024",
      readTime: "9 min read",
      category: "DevOps",
      image: "/server.jpg",
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">noirSfera</span> Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Insights, tutorials, and thoughts on modern web development, AI, and technology trends
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
          <Card className="bg-gray-900 border-gray-800 overflow-hidden group cursor-pointer">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredArticles[0].image || "/placeholder.svg"}
                    alt={featuredArticles[0].title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-500 text-black font-semibold">Featured</Badge>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {featuredArticles[0].category}
                  </Badge>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                    {featuredArticles[0].title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredArticles[0].excerpt}</p>

                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="text-cyan-400">{featuredArticles[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredArticles[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticles[0].readTime}</span>
                    </div>
                  </div>

                  <Button className="w-fit bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Latest Articles Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.slice(1).map((article) => (
              <Card
                key={article.id}
                className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="text-cyan-400 font-medium">{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-transparent p-8 rounded-2xl border border-cyan-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-6">
              Get the latest articles, tutorials, and insights delivered straight to your inbox. Join our community of
              developers and tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
              />
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
)

NewsSection.displayName = "NewsSection"

export default NewsSection
