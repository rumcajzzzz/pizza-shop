"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store"

export function FloatingCart() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  // Hide floating cart on larger screens since we have navbar cart
  if (totalItems === 0) return null

  return (
    <Link href="/cart" className="md:hidden">
      <Button
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-red-600 hover:bg-red-700 shadow-lg z-40"
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        </div>
      </Button>
    </Link>
  )
}
