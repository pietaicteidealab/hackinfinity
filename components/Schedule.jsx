import React from 'react'

import { useState, useEffect } from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Code, Cpu, Globe, Lightbulb, MapPin, Medal, Rocket, Trophy, Users, Wifi } from "lucide-react"

function Schedule() {
  return <div>
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
  </div>
}

export default Schedule