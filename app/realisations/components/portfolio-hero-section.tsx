"use client"

export default function PortfolioHeroSection() {
  return (
    <section className="relative bg-gray-800 text-white py-12 md:py-16 lg:py-20">
      {/* Optionnel: Image de fond avec superposition */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
        // Vous pouvez utiliser une requête pour générer une image si vous n'en avez pas :
        // query="mosaïque abstraite de designs web élégants et modernes, tons professionnels"
      ></div>
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Découvrez la Qualité Atlas Digital Impact en Action.
          </h1>
          <p className="mt-3 text-sm sm:text-md md:text-lg text-gray-300 max-w-2xl mx-auto">
            Explorez une sélection de nos projets et des concepts de design qui illustrent notre savoir-faire en matière
            de création de sites web modernes, performants et parfaitement adaptés aux besoins des entreprises
            marocaines.
          </p>
        </div>
      </div>
    </section>
  )
}
