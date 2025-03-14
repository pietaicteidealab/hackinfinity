import React from 'react'

import { useState, useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Code, Cpu, Globe, Lightbulb, MapPin, Medal, Rocket, Trophy, Users, Wifi } from "lucide-react"
function Theme() {
  return <div>

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

  </div>
}

export default Theme