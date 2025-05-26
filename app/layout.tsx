import type React from "react"
import type { Metadata } from "next"

import { Roboto } from "next/font/google"

import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const roboto = Roboto({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NoirSfera",
  description: "Modernizing businesses through futuristic software",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
