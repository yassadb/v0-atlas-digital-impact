"use client"

import Header from "../header"
import Footer from "../footer"
import HeroSection from "../hero-section"
import IntroSection from "../intro-section"
import ServicesOverviewSection from "../services-overview-section"
import WhyChooseUsSection from "../why-choose-us-section"
import CtaBannerSection from "../cta-banner-section"
import PortfolioScrollSection from "../portfolio-scroll-section" // <-- Importer la nouvelle section

export default function Page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <IntroSection />
      <PortfolioScrollSection /> {/* <-- Ajouter la nouvelle section ici */}
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <CtaBannerSection />
      {/* Le contenu main initial peut être supprimé ou adapté si la page est entièrement construite avec des sections */}
      {/* 
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-sm dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        </div>
      </main>
      */}
      <Footer />
    </div>
  )
}
