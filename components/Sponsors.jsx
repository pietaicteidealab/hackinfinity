
import { useState, useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Code, Cpu, Globe, Lightbulb, MapPin, Medal, Rocket, Trophy, Users, Wifi } from "lucide-react"

import React from 'react'

function Sponsors() {
  return <div>
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
  </div>
}

export default Sponsors