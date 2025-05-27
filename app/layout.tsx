import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ResponsiveLayout } from "@/components/responsive-layout"



export const metadata: Metadata = {
  title: "Noir Sfera ",
  description: "Building Futuristic and Modern Software",
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
      <body >
        
          <ResponsiveLayout>{children}</ResponsiveLayout>

      </body>
    </html>
  )
}
