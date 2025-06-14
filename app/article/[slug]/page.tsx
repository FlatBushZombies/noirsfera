import { getPostBySlug, urlFor } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const components = {
    types: {
      image: ({ value }: any) => (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(400).url() || "/placeholder.svg"}
            alt={value.alt || "Article image"}
            width={800}
            height={400}
            className="rounded-lg w-full object-cover"
          />
          {value.caption && <p className="text-center text-sm text-gray-400 mt-2">{value.caption}</p>}
        </div>
      ),
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-3xl font-bold text-white mb-6 mt-8">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-2xl font-bold text-white mb-4 mt-6">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-xl font-semibold text-white mb-3 mt-5">{children}</h3>,
      normal: ({ children }: any) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-cyan-400 pl-6 my-6 italic text-gray-300 bg-white/5 py-4 rounded-r-lg">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>,
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          className="text-cyan-400 hover:text-cyan-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      strong: ({ children }: any) => <strong className="font-semibold text-white">{children}</strong>,
      em: ({ children }: any) => <em className="italic text-gray-200">{children}</em>,
      code: ({ children }: any) => (
        <code className="bg-gray-800 text-cyan-400 px-2 py-1 rounded text-sm font-mono">{children}</code>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
          {/* Navigation */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="text-center mb-12">
            <Badge className="glass-card bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 backdrop-blur-sm mb-4">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">{post.excerpt}</p>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(40).height(40).url() || "/placeholder.svg"}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div className="text-left">
                  <div className="text-cyan-400 font-medium">{post.author.name}</div>
                  {post.author.bio && <div className="text-xs text-gray-500">{post.author.bio}</div>}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <Button className="glass-card bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </div>

          {/* Featured Image */}
          {post.highlightImage && (
            <div className="mb-12">
              <Image
                src={urlFor(post.highlightImage).width(1200).height(600).url() || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="glass-card bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
          <div className="prose prose-lg prose-invert max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 glass-card bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <div className="flex items-start gap-6">
            {post.author.image && (
              <Image
                src={urlFor(post.author.image).width(80).height(80).url() || "/placeholder.svg"}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full flex-shrink-0"
              />
            )}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">About {post.author.name}</h3>
              {post.author.bio && <p className="text-gray-300 leading-relaxed">{post.author.bio}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
