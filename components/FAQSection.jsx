"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Who can participate in Hack Infinity?",
      answer:
        "Hack Infinity is open to students, professionals, and tech enthusiasts of all skill levels. Whether you're a beginner or an experienced developer, you're welcome to join!",
    },
    {
      question: "Do I need to have a team to register?",
      answer:
        "No, you can register as an individual and form a team during the event. We'll have team formation activities to help you find teammates with complementary skills.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "You should bring your laptop, charger, any hardware you plan to use for your project, and personal items for the 48-hour event. We'll provide food, drinks, and a comfortable hacking environment.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, Hack Infinity is completely free to participate in. We believe in making innovation accessible to everyone.",
    },
    {
      question: "Will there be food and accommodation?",
      answer:
        "Yes, we'll provide meals throughout the event. As for accommodation, we'll have designated rest areas, but if you prefer a hotel, we have partnered with local hotels for discounted rates.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "That's okay! Hackathons are about learning and collaboration. We welcome participants with diverse skills including design, business, and project management. You'll learn a lot during the event!",
    },
  ]

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className="bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-[1.01]"
        >
          <CardContent className="p-0">
            <button className="w-full p-6 text-left flex justify-between items-center" onClick={() => toggleFAQ(index)}>
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="text-red-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="text-red-500 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 pt-0 text-gray-400 animate-accordion-down">
                <p>{faq.answer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

