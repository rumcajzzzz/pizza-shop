import type { Pizza } from "@/lib/types"
import { PizzaCard } from "./pizza-card"

interface PizzaGridProps {
  pizzas: Pizza[]
}

export function PizzaGrid({ pizzas }: PizzaGridProps) {
  return (
    <section id="menu" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  text-muted-foreground mb-4">Nasze menu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Odkryj naszą ofertę ręcznie robionych pizz, przygotowywanych z najlepszych składników i wypiekanych do perfekcji.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  )
}
