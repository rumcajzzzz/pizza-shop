"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCartStore } from "@/lib/store"
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react"

export function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()

  const handleCheckout = () => {  
    alert("Redirecting to Stripe Checkout...")
  }

  if (items.length === 0) { 
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Twój koszyk jest pusty</h1>
          <p className="text-muted-foreground mb-8">Dodaj troche pyszności żeby zacząć zamawiać!</p>
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700">
              <ArrowLeft className="w-4 h-4 mr-2 text-white" />
              <p className="text-white">Do Menu</p>
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Twój koszyk</h1>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
                Wróc do wyboru
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 min-w-[80px]">
                      <Image
                        src={item.image_url || "/placeholder.svg?height=80&width=80"}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                  </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-red-600 font-bold">{item.price.toFixed(2)}zł</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button size="sm" variant="destructive" onClick={() => removeItem(item.id)}>
                      <Trash2 className="w-4 h-4 dark:text-gray-500" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Podsumowanie zamówienia:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Kwota:</span>
                  <span>{getTotalPrice().toFixed(2)}zł</span>
                </div>
                <div className="flex justify-between">
                  <span>Prowizja:</span>
                  <span>{(getTotalPrice() * 0.08).toFixed(2)}zł</span>
                </div>
                <div className="flex justify-between">
                  <span>Dostawa:</span>
                  <span>9.99zł</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Łącznie:</span>
                  <span>{(getTotalPrice() + getTotalPrice() * 0.08 + 3.99).toFixed(2)}zł</span>
                </div>
                <Button onClick={handleCheckout} className="w-full text-white bg-red-600 hover:bg-red-700" size="lg">
                  Przejdź do zamówienia
                </Button>
                <Button onClick={clearCart} variant="outline" className="w-full">
                  Wyczyść koszyk
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
