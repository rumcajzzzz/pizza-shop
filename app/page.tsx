import { Hero } from "@/components/hero"
import { PizzaGrid } from "@/components/pizza-grid"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getPizzas } from "@/lib/supabase"

export default async function HomePage() {
  const pizzas = await getPizzas()

  return (
    <main className="min-h-screen">
      <Hero />
      <PizzaGrid pizzas={pizzas} />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
