"use client"

interface ServiceHeroSectionProps {
  title: string
  subtitle: string
  backgroundImageUrl?: string
}

export default function ServiceHeroSection({ title, subtitle, backgroundImageUrl }: ServiceHeroSectionProps) {
  return (
    <section className="relative bg-gray-800 text-white py-12 md:py-16 lg:py-20">
      {backgroundImageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
      )}
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay pour lisibilité */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{title}</h1>
          <p className="mt-3 text-sm sm:text-md text-gray-200">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
