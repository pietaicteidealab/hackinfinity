// "use client"

// import { useState, useEffect } from "react"
// import { Suspense } from "react"
// import dynamic from "next/dynamic"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Calendar, Clock, Code, Cpu, Globe, Lightbulb, MapPin, Medal, Rocket, Trophy, Users, Wifi } from "lucide-react"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"
// import FAQSection from "@/components/FAQSection"
// import CountdownTimer from "@/components/CountdownTimer"

// import About from "@/components/About"
// import Theme from "@/components/Theme"
// import Schedule from "@/components/Schedule"
// import Prizes from "@/components/Prizes"
// import Sponsors from "@/components/Sponsors"
// import Contact from "@/components/Contact"


// // Dynamically import the Three.js component with no SSR
// const InfinityLogo = dynamic(() => import("@/components/InfinityLogo"), {
//   ssr: false, 
//   loading: () => (
//     <div className="flex h-[50vh] items-center justify-center">
//       <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
//     </div>
//   ),
// })

// export default function HackathonWebsite() {
//   const [mounted, setMounted] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")

//   useEffect(() => {
//     setMounted(true)

//     // Intersection Observer for sections
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.3,
//     }

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id)
//         }
//       })
//     }

//     const observer = new IntersectionObserver(observerCallback, observerOptions)

//     // Observe all sections
//     document.querySelectorAll("section[id]").forEach((section) => {
//       observer.observe(section)
//     })

//     return () => {
//       observer.disconnect()
//     }
//   }, [])

//   // Hackathon date - set to 3 months from now
//   const hackathonDate = new Date("2025-04-17T00:00:00")

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar activeSection={activeSection} />

//       {/* Hero Section with Three.js Infinity Logo */}
//       <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none"></div>

//         {/* Three.js Canvas */}
//         <div className="w-full h-[70vh] absolute inset-0">
//           {mounted && (
//             <Suspense
//               fallback={
//                 <div className="flex h-full items-center justify-center">
//                   {/* <InfinityLoader /> */}
//                 </div>
//               }
//             >
//               <InfinityLogo />
//             </Suspense>
//           )}
//         </div>

//         <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-[40vh]">
//           <h1 className="text-5xl md:text-7xl font-bold mb-4">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">HACK</span>
            
//           </h1>
//           <div className="text-6xl md:text-8xl font-bold mb-6 flex justify-center items-center">
//             {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">∞</span> */}
//           </div>
//           <p className="text-xl md:text-2xl mb-2 text-gray-300 ">
//             <span className="font-mono">INFINITE POSSIBILITIES. INFINITE INNOVATION.</span>
//           </p>
//           <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
//             Join us for 48 hours of coding, creativity, and collaboration. Push the boundaries of what's possible and
//             build the future.
//           </p>

//           {/* Countdown Timer */}
//           <div className="mb-8">
//             <CountdownTimer targetDate={hackathonDate} />
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-none transform hover:scale-105 transition-all duration-300">
//               Register Now
//             </Button>
//             <Button
//               variant="outline"
//               className="border-red-500 text-red-500 hover:bg-red-950/20 transform hover:scale-105 transition-all duration-300"
//             >
//               Learn More
//             </Button>
//           </div>
//         </div>

//         <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-20">
//           <div className="w-10 h-10 flex items-center justify-center rounded-full border border-red-500 hover:border-amber-500 transition-colors duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-red-500 hover:text-amber-500 transition-colors duration-300"
//             >
//               <path d="M12 5v14M5 12l7 7 7-7" />
//             </svg>
//           </div>
//         </div>
//       </section>


//       {/* About Section */}
//      <About />

//       {/* Themes Section */}
//  <Theme/>
//       {/* Schedule Section */}
      
// <Schedule />
//       {/* Prizes Section */}
     
// <Prizes />
//       {/* Sponsors Section */}
// <Sponsors/>

//       {/* FAQ Section */}
   

//           <FAQSection />

//       {/* Contact Section */}
//       <Contact />
// {/* Footer Section */}
//       <Footer />
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
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

  const hackathonDate = new Date("2025-04-17T00:00:00");

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
            Join us for 48 hours of coding, creativity, and collaboration. Push the boundaries of what's possible and build the future.
          </p>

          {/* Countdown Timer */}
          <div className="mt-6 mb-8">
            <CountdownTimer targetDate={hackathonDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white border-none transform hover:scale-105 transition-all duration-300">
              Register Now
            </Button>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-950/20 transform hover:scale-105 transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>

       
      </section>

      {/* Sections */}
      <About />
      <Theme />
      <Schedule />
      <Prizes />
      <Sponsors />
      <FAQSection />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
