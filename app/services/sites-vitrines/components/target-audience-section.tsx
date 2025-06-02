"use client"

import { CheckCircle } from "lucide-react"

interface TargetAudienceSectionProps {
  title: string
  items: string[]
}

export default function TargetAudienceSection({ title, items }: TargetAudienceSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-10 sm:mb-12">{title}</h2>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
