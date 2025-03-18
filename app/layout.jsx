import "./globals.css"
import { Suspense } from "react"
import InfinityLoader from "@/components/InfinityLoader"
import GoogleAnalytics from "@/lib/GoogleAnalytics"

export const metadata = {
  title: "Hack Infinity - Infinite Possibilities. Infinite Innovation.",
  description:
    "Join us for 48 hours of coding, creativity, and collaboration. Push the boundaries of what's possible and build the future.",
    generator: 'v0.dev',
    icons: {
      icon: '/favicon.png',
    },
  }


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        <GoogleAnalytics />
        <Suspense
          fallback={
            <div className="h-screen w-full flex items-center justify-center bg-black">
              <InfinityLoader />
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  )
}



import './globals.css'