

"use client"
import React from 'react'
import { useState, useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Code, Cpu, Globe, Lightbulb, MapPin, Medal, Rocket, Trophy, Users, Wifi } from "lucide-react"
const About=()=> {
    
  // Hackathon date - set to 3 months from now
  const hackathonDate = new Date("2025-04-17T00:00:00")
  return <div>
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
  </div>
}

export default About;