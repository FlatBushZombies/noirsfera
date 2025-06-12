import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/footer"




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
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body >
        
          {children}
        <Footer />
      </body>
    </html>
  )
}