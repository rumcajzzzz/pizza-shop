"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Pizza } from "@/lib/types"
import { useCartStore } from "@/lib/store"
import { ShoppingCart } from "lucide-react"

interface PizzaCardProps {
  pizza: Pizza
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      image_url: pizza.image_url,
    })
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image
          src={pizza.image_url || "/placeholder.svg?height=256&width=400"}
          alt={pizza.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
        <p className="text-muted-foreground mb-4">{pizza.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {pizza.ingredients?.map((ingredient, index) => (
            <span key={index} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
              {ingredient}
            </span>
          ))}
        </div>

        <div className="text-2xl font-bold text-red-600 mt-auto">{pizza.price.toFixed(2)}zł</div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={handleAddToCart} className="w-full bg-red-600 hover:bg-red-700">
          <ShoppingCart className="w-4 h-4 mr-2 text-white" />
          <p className="text-white">Dodaj do koszyka</p>
        </Button>
      </CardFooter>
  </Card>

  )
}
