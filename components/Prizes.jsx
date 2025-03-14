import React from 'react'

import { useState, useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Code, Cpu, Globe, Lightbulb, MapPin, Medal, Rocket, Trophy, Users, Wifi } from "lucide-react"
function Prizes() {
  return <div>
    
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
  </div>
}

export default Prizes