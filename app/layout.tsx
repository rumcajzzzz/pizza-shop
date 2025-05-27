import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingCart } from "@/components/floating-cart"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import FadeObserver from "@/components/FadeObserver";
import OdometerLoader from "@/components/Odometer";
import Script from "next/script"
import ScrollReset from "@/components/ScrollReset"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mario's Pizza - Authentic Italian Pizza",
  description: "Experience the finest authentic Italian pizzas made with fresh ingredients and traditional recipes.",
    generator: 'v0.dev'
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
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.7/themes/odometer-theme-default.min.css"
          />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.7/themes/odometer-theme-default.min.css"
          integrity="sha512-/k/mL9TQSZHAqtVqXJAiy5bt2w1P7gxdra0UlnFjVHF9a/LC2vxt7otx3BMcn79V/DZsPRwdw8tPlwbElMnIAw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <ScrollReset />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.7/odometer.min.js"
          strategy="beforeInteractive"
        />
        <FadeObserver />
        <OdometerLoader />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <div className="pt-16">{children}</div>
          <FloatingCart />
        </ThemeProvider>
      </body>
    </html>
  )
}
