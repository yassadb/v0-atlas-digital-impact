"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // CardHeader et CardTitle ajoutés
import {
  Palette,
  Smartphone,
  Search,
  Settings2,
  Lightbulb,
  ShieldCheck,
  type LightbulbIcon as LucideProps,
} from "lucide-react"

const iconComponents: { [key: string]: React.FC<LucideProps> } = {
  Palette,
  Smartphone,
  Search,
  Settings2,
  Lightbulb,
  ShieldCheck,
}

interface Feature {
  icon: keyof typeof iconComponents
  name: string
  description: string
}

interface ServiceFeaturesSectionProps {
  title: string
  features: Feature[]
}

export default function ServiceFeaturesSection({ title, features }: ServiceFeaturesSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12 sm:mb-16">{title}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const IconComponent = iconComponents[feature.icon]
            return (
              <Card
                key={feature.name}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <CardHeader className="p-0 mb-4">
                  {IconComponent && (
                    <div className="p-3 bg-amber-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                  )}
                </CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
