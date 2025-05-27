import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Mario&#39;s Pizza</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Autentyczna włoska pizza przygotowywana z miłością, świeżymi składnikami i tradycyjnymi recepturami przekazywanymi z pokolenia na pokolenie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
            <Link href="#menu">Zamów teraz</Link>
          </Button>
          <Button size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
            <Link href="#about">Dowiedz się więcej</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
