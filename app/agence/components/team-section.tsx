"use client"

export default function TeamSection() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      {/* Optionnel: Image de fond ou illustration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/team-background-abstract.png')",
          // Vous pouvez utiliser une requête pour générer une image si vous n'en avez pas :
          // query="motif abstrait et moderne symbolisant la collaboration et la synergie d'équipe, tons neutres et bleus doux"
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent opacity-50"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une Équipe d'Experts Passionnés à Votre Service.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Atlas Digital Impact s'appuie sur une équipe de professionnels (designers, développeurs, stratèges)
            expérimentés et engagés, qui mutualisent leurs compétences pour offrir des solutions digitales percutantes.
            Nous combinons la rigueur de nos processus basés en Belgique avec une présence et une écoute active des
            besoins au Maroc.
          </p>
          {/* Optionnel: Bouton pour voir l'équipe plus en détail si une page dédiée existe */}
          {/*
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link href="/equipe">Découvrir notre équipe</Link>
          </Button>
        </div>
        */}
        </div>
      </div>
    </section>
  )
}
