import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

// Validate environment variables
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables"
  )
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_DATASET in environment variables"
  )
}


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      featured,
      readTime,
      highlightImage,
      author->{
        name,
        image,
        bio
      }
    }
  `)
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      readTime,
      highlightImage,
      body,
      author->{
        name,
        image,
        bio
      }
    }
  `,
    { slug },
  )
}
