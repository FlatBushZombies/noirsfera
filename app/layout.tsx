import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ResponsiveLayout } from "@/components/responsive-layout"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Noir Sfera - Portfolio",
  description: "A modern portfolio website with dark aesthetics",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cascadia+Code:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        
          <ResponsiveLayout>{children}</ResponsiveLayout>

      </body>
    </html>
  )
}
