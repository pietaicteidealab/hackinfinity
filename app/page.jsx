"use client"

import { useState, useEffect } from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CountdownTimer from "@/components/CountdownTimer";
import About from "@/components/About";
import Theme from "@/components/Theme";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import TeamSection from "@/components/TeamSection";
import WhatsAppButton from "@/components/WhatsAppButton";
const InfinityLogo = dynamic(() => import("@/components/InfinityLogo"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
    </div>
  ),
});

export default function HackathonWebsite() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [email, setEmail] = useState("");
  const [notificationStatus, setNotificationStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const hackathonDate = new Date("2025-04-18T00:00:00");

  const handleNotifyMe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotificationStatus("");

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setNotificationStatus("success");
        setEmail("");
      } else {
        setNotificationStatus("error");
      }
    } catch (error) {
      setNotificationStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        <div className="w-full h-[70vh] absolute inset-0 flex items-center justify-center">
          {mounted && (
            <Suspense fallback={<div className="flex h-full items-center justify-center"></div>}>
              <div className="w-full max-w-5xl h-auto p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
                <InfinityLogo />
              </div>
            </Suspense>
          )}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[40vh]">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 ">HACK</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-mono">INFINITE POSSIBILITIES. INFINITE INNOVATION.</p>
          <p className="text-lg md:text-xl text-gray-400 mt-2 max-w-2xl mx-auto">
            Join us for 36 hours of coding, creativity, and collaboration. Push the boundaries of what's possible and build the future.
          </p>

          {/* Notification Form */}
          <div className="mt-8 mb-8 p-6 bg-black/50 rounded-lg border border-red-500/20">
            <h2 className="text-2xl font-bold mb-4">Hackathon Postponed</h2>
            <p className="text-gray-300 mb-6">
              Our hackathon has been postponed until further notice. Enter your email to be notified when we go live.
            </p>
            
            <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-black/50 border border-red-500/20 text-white focus:outline-none focus:border-red-500 w-full sm:w-80"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-none transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                {isSubmitting ? "Subscribing..." : "Notify Me"}
              </Button>
            </form>

            {notificationStatus === "success" && (
              <p className="mt-4 text-green-400">✅ Successfully subscribed to notifications!</p>
            )}
            {notificationStatus === "error" && (
              <p className="mt-4 text-red-400">❌ Failed to subscribe. Please try again.</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="https://lu.ma/xl5esac2" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-none transform hover:scale-105 transition-all duration-300">
                Register Now
              </Button>
            </Link> */}
            {/* <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-950/20 transform hover:scale-105 transition-all duration-300">
              Learn More
            </Button> */}
          </div>
        </div>
      </section>

      <About />
      <Theme />
      {/* <Schedule /> */}
      {/* <Prizes /> */}
      {/* <Sponsors /> */}
      <TeamSection />
      <FAQSection />
      <Contact />
      {/* <WhatsAppButton /> */}
      <Footer />
    </div>
  );
}


