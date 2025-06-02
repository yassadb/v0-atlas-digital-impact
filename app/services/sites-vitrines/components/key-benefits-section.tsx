"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // CardHeader ajouté
import { BadgeCheck, TrendingUp, Users, MessageCircle, type LightbulbIcon as LucideProps } from "lucide-react"

const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  BadgeCheck,
  TrendingUp,
  Users,
  MessageCircle,
}

interface Benefit {
  icon: keyof typeof iconComponents
  name: string
  description: string
}

interface KeyBenefitsSectionProps {
  title: string
  benefits: Benefit[]
}

export default function KeyBenefitsSection({ title, benefits }: KeyBenefitsSectionProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12 sm:mb-16">{title}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit) => {
            const IconComponent = iconComponents[benefit.icon]
            return (
              <Card
                key={benefit.name}
                className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg sm:flex-row sm:text-left sm:items-start"
              >
                <CardHeader className="p-0 mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                  {IconComponent && (
                    <div className="p-3 bg-amber-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                  )}
                </CardHeader>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{benefit.name}</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
