"use client"

export default function ApproachHeroSection() {
  return (
    <section className="relative bg-gray-100 py-12 md:py-16 lg:py-20">
      {/* Optionnel: Image de fond avec superposition */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
        // Vous pouvez utiliser une requête pour générer une image si vous n'en avez pas :
        // query="arrière-plan abstrait évoquant la planification stratégique, des lignes de connexion, tons bleus et gris professionnels"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Une Méthodologie Éprouvée pour des Résultats Optimaux.
          </h1>
          <p className="mt-3 text-sm sm:text-md md:text-lg text-gray-700 max-w-2xl mx-auto">
            Chez Atlas Digital Impact, chaque projet digital est mené avec rigueur et transparence. Nous suivons un
            processus collaboratif en plusieurs étapes pour garantir la qualité et l'atteinte de vos objectifs
            spécifiques au Maroc.
          </p>
        </div>
      </div>
    </section>
  )
}
