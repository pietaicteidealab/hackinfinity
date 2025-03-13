"use client"

import { useState, useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Code, Cpu, Globe, Lightbulb, MapPin, Medal, Rocket, Trophy, Users, Wifi } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FAQSection from "@/components/FAQSection"
import CountdownTimer from "@/components/CountdownTimer"

// Dynamically import the Three.js component with no SSR
const InfinityLogo = dynamic(() => import("@/components/InfinityLogo"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
    </div>
  ),
})

export default function HackathonWebsite() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)

    // Intersection Observer for sections
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Hackathon date - set to 3 months from now
  const hackathonDate = new Date()
  hackathonDate.setMonth(hackathonDate.getMonth() + 3)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeSection={activeSection} />

      {/* Hero Section with Three.js Infinity Logo */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none"></div>

        {/* Three.js Canvas */}
        <div className="w-full h-[70vh] absolute inset-0">
          {mounted && (
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  {/* <InfinityLoader /> */}
                </div>
              }
            >
              <InfinityLogo />
            </Suspense>
          )}
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-[40vh]">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">HACK</span>
          </h1>
          <div className="text-6xl md:text-8xl font-bold mb-6 flex justify-center items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">∞</span>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            <span className="font-mono">INFINITE POSSIBILITIES. INFINITE INNOVATION.</span>
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Join us for 48 hours of coding, creativity, and collaboration. Push the boundaries of what's possible and
            build the future.
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer targetDate={hackathonDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-none transform hover:scale-105 transition-all duration-300">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-950/20 transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-20">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-red-500 hover:border-amber-500 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-500 hover:text-amber-500 transition-colors duration-300"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4"></span>
              ABOUT HACK INFINITY
              <span className="w-8 h-1 bg-red-500 ml-4"></span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Hack Infinity is a 48-hour hackathon that brings together developers, designers, and innovators to create
              solutions that push the boundaries of technology. With the theme of "Infinite Possibilities," we challenge
              you to think beyond conventional limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <Calendar className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Event Date</h3>
                <p className="text-gray-400">
                  {hackathonDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
                <p className="text-gray-500 text-sm mt-2">48 hours of non-stop innovation</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                  <MapPin className="text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-400">Infinity Tech Hub</p>
                <p className="text-gray-500 text-sm mt-2">123 Innovation Avenue, Tech District</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <Users className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Participants</h3>
                <p className="text-gray-400">500+ Tech Enthusiasts</p>
                <p className="text-gray-500 text-sm mt-2">From universities and tech companies worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Themes Section */}
<section id="themes" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-black to-gray-900">
  {/* Background elements */}
  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5"></div>
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
  
  {/* Static particles instead of randomly positioned ones */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-amber-500 opacity-20 animate-pulse"></div>
    <div className="absolute top-3/4 left-1/2 w-1 h-1 rounded-full bg-amber-500 opacity-20 animate-pulse"></div>
    <div className="absolute top-1/2 left-3/4 w-1 h-1 rounded-full bg-amber-500 opacity-20 animate-pulse"></div>
    <div className="absolute top-1/3 left-1/5 w-1 h-1 rounded-full bg-amber-500 opacity-20 animate-pulse"></div>
    <div className="absolute top-2/3 left-4/5 w-1 h-1 rounded-full bg-amber-500 opacity-20 animate-pulse"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Section header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/20 text-xs font-mono text-red-400">
          <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
          EXPLORE THE POSSIBILITIES
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
        HACKATHON THEMES
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        This year's hackathon focuses on pushing the boundaries of what's possible. Choose one theme or combine multiple to create something extraordinary.
      </p>
    </div>

    {/* Themes grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* AI Theme */}
      <div className="group relative bg-gradient-to-br from-black to-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors duration-300">
          <Cpu className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-amber-500 mb-2 group-hover:text-amber-400 transition-colors duration-300">
          Artificial Intelligence
        </h3>
        <p className="text-gray-400 mb-4">
          Develop AI solutions that solve real-world problems and enhance human capabilities.
        </p>
        <div className="pt-4 border-t border-gray-800 flex items-center text-gray-500 text-sm">
          <span className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            129 teams
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Trophy className="w-3 h-3 mr-1" />
            Top prize
          </span>
        </div>
      </div>

      {/* Web3 Theme */}
      <div className="group relative bg-gradient-to-br from-black to-gray-900 rounded-xl p-6 border border-gray-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
          <Globe className="w-6 h-6 text-amber-500" />
        </div>
        <h3 className="text-xl font-bold text-amber-500 mb-2 group-hover:text-amber-400 transition-colors duration-300">
          Web3 & Blockchain
        </h3>
        <p className="text-gray-400 mb-4">
          Build decentralized applications that redefine digital ownership and transform industries.
        </p>
        <div className="pt-4 border-t border-gray-800 flex items-center text-gray-500 text-sm">
          <span className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            87 teams
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Trophy className="w-3 h-3 mr-1" />
            Top prize
          </span>
        </div>
      </div>

      {/* Open Innovation Theme */}
      <div className="group relative bg-gradient-to-br from-black to-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors duration-300">
          <Lightbulb className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-amber-500 mb-2 group-hover:text-amber-400 transition-colors duration-300">
          Open Innovation
        </h3>
        <p className="text-gray-400 mb-4">
          Surprise us with your creativity in any tech domain. No boundaries, just pure innovation.
        </p>
        <div className="pt-4 border-t border-gray-800 flex items-center text-gray-500 text-sm">
          <span className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            72 teams
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Trophy className="w-3 h-3 mr-1" />
            Top prize
          </span>
        </div>
      </div>

      {/* IoT Theme */}
      <div className="group relative bg-gradient-to-br from-black to-gray-900 rounded-xl p-6 border border-gray-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
          <Wifi className="w-6 h-6 text-amber-500" />
        </div>
        <h3 className="text-xl font-bold text-amber-500 mb-2 group-hover:text-amber-400 transition-colors duration-300">
          Internet of Things
        </h3>
        <p className="text-gray-400 mb-4">
          Connect the physical and digital worlds through smart devices and innovative IoT applications.
        </p>
        <div className="pt-4 border-t border-gray-800 flex items-center text-gray-500 text-sm">
          <span className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            93 teams
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Trophy className="w-3 h-3 mr-1" />
            Top prize
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Schedule Section */}
      <section id="schedule" className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4"></span>
              EVENT SCHEDULE
              <span className="w-8 h-1 bg-red-500 ml-4"></span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Your 48-hour journey to build the next generation of technology solutions.
            </p>
          </div>

          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-900/50">
              <TabsTrigger value="day1" className="data-[state=active]:bg-red-950/50 data-[state=active]:text-red-500">
                DAY 1
              </TabsTrigger>
              <TabsTrigger
                value="day2"
                className="data-[state=active]:bg-amber-950/50 data-[state=active]:text-amber-500"
              >
                DAY 2
              </TabsTrigger>
              <TabsTrigger value="day3" className="data-[state=active]:bg-red-950/50 data-[state=active]:text-red-500">
                DAY 3
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">09:00 AM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Registration & Check-in</h3>
                    <p className="text-gray-400">Get your badge, swag bag, and find your team area</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">10:00 AM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Opening Ceremony</h3>
                    <p className="text-gray-400">Welcome address, theme introduction, and rules explanation</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">11:30 AM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Team Formation</h3>
                    <p className="text-gray-400">Find teammates or finalize your existing team</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">12:00 PM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Hacking Begins!</h3>
                    <p className="text-gray-400">Start building your innovative solutions</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">07:00 PM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Dinner & Networking</h3>
                    <p className="text-gray-400">Refuel and connect with fellow participants</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day2" className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-amber-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">08:00 AM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Breakfast</h3>
                    <p className="text-gray-400">Start your day with a nutritious meal</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-amber-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">10:00 AM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Technical Workshops</h3>
                    <p className="text-gray-400">AI, Blockchain, and Web3 workshops to help with your projects</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-amber-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">12:30 PM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Lunch</h3>
                    <p className="text-gray-400">Refuel for the afternoon hacking session</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-amber-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">03:00 PM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Mentorship Sessions</h3>
                    <p className="text-gray-400">Get guidance from industry experts</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center hover:border-amber-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">08:00 PM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Gaming Break</h3>
                    <p className="text-gray-400">Take a break with some fun tech-themed games</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day3" className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">08:00 AM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Breakfast</h3>
                    <p className="text-gray-400">Final day breakfast to power through</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">10:00 AM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Submission Preparation</h3>
                    <p className="text-gray-400">Finalize your projects and prepare for presentations</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">12:00 PM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Hacking Ends</h3>
                    <p className="text-gray-400">All code submissions due</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center border-b border-gray-800 pb-6 hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">01:00 PM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Project Presentations</h3>
                    <p className="text-gray-400">Teams showcase their innovations to judges</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center hover:border-red-500/30 transition-colors duration-300">
                  <div className="md:w-1/4 flex items-center gap-3">
                    <Clock className="text-red-500 flex-shrink-0" />
                    <span className="text-amber-500 font-mono">04:00 PM</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Awards Ceremony</h3>
                    <p className="text-gray-400">Winners announced and prizes awarded</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4"></span>
              PRIZES & AWARDS
              <span className="w-8 h-1 bg-red-500 ml-4"></span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Exceptional innovation deserves exceptional rewards. Check out what you can win!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-amber-950/30 to-gray-900 border border-amber-500/30 backdrop-blur-sm overflow-hidden relative transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute transform rotate-45 bg-amber-500 text-black font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center text-sm">
                  1ST PLACE
                </div>
              </div>
              <CardContent className="p-6 pt-12">
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <Trophy className="w-full h-full text-amber-500" />
                  <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-amber-500">GRAND PRIZE</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-amber-500" />
                    </div>
                    <p className="text-gray-300">$10,000 Cash Prize</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-amber-500" />
                    </div>
                    <p className="text-gray-300">Startup Incubation Opportunity</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-amber-500" />
                    </div>
                    <p className="text-gray-300">Latest AR/VR Development Kit</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-amber-500" />
                    </div>
                    <p className="text-gray-300">1-Year Cloud Credits</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-800/30 to-gray-900 border border-gray-700 backdrop-blur-sm overflow-hidden relative transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(156,163,175,0.3)]">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute transform rotate-45 bg-gray-500 text-black font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center text-sm">
                  2ND PLACE
                </div>
              </div>
              <CardContent className="p-6 pt-12">
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <Trophy className="w-full h-full text-gray-400" />
                  <div className="absolute inset-0 bg-gray-500/20 blur-xl rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-400">RUNNER-UP</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-gray-400" />
                    </div>
                    <p className="text-gray-300">$5,000 Cash Prize</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-gray-400" />
                    </div>
                    <p className="text-gray-300">AI Development Toolkit</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-gray-400" />
                    </div>
                    <p className="text-gray-300">6-Month Cloud Credits</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-red-950/30 to-gray-900 border border-red-500/30 backdrop-blur-sm overflow-hidden relative transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute transform rotate-45 bg-red-500 text-black font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center text-sm">
                  3RD PLACE
                </div>
              </div>
              <CardContent className="p-6 pt-12">
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <Trophy className="w-full h-full text-red-400" />
                  <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-red-400">THIRD PRIZE</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-red-400" />
                    </div>
                    <p className="text-gray-300">$2,500 Cash Prize</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-red-400" />
                    </div>
                    <p className="text-gray-300">Smart Home Devices</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Medal className="w-3 h-3 text-red-400" />
                    </div>
                    <p className="text-gray-300">3-Month Cloud Credits</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Additionally, all participants will receive exclusive hackathon swag, certificates of participation, and
              networking opportunities with industry leaders.
            </p>
            <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-none transform hover:scale-105 transition-all duration-300">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4"></span>
              OUR SPONSORS
              <span className="w-8 h-1 bg-red-500 ml-4"></span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">These industry leaders make our hackathon possible.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-[150px] h-[60px] opacity-70 hover:opacity-100 transition-opacity duration-300 bg-[url('/placeholder.svg?height=100&width=200')] bg-contain bg-center bg-no-repeat"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4"></span>
              FREQUENTLY ASKED QUESTIONS
              <span className="w-8 h-1 bg-red-500 ml-4"></span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Everything you need to know about Hack Infinity.</p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center">
              <span className="w-8 h-1 bg-red-500 mr-4"></span>
              CONTACT US
              <span className="w-8 h-1 bg-red-500 ml-4"></span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Have questions? Our team is here to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-500">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/40 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-500 group-hover:text-amber-400 transition-colors duration-300">
                        Phone
                      </h4>
                      <p className="text-gray-400">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/40 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-500 group-hover:text-amber-400 transition-colors duration-300">
                        Email
                      </h4>
                      <p className="text-gray-400">info@hackinfinity.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/40 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-500"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-500 group-hover:text-amber-400 transition-colors duration-300">
                        Location
                      </h4>
                      <p className="text-gray-400">Infinity Tech Hub, 123 Innovation Avenue</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-amber-500">Follow Us</h3>
                <p className="text-gray-400 mb-6">
                  Stay updated with the latest news and announcements about the hackathon.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/40 transition-colors duration-300 transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/40 transition-colors duration-300 transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center hover:bg-amber-500/40 transition-colors duration-300 transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center hover:bg-amber-500/40 transition-colors duration-300 transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-amber-500 mb-4">Subscribe to Updates</h4>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500 transition-colors duration-300"
                    />
                    <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white transform hover:scale-105 transition-all duration-300">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

