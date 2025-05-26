import { createClient } from "@supabase/supabase-js"
import type { Pizza } from "./types"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getPizzas(): Promise<Pizza[]> {
  const { data, error } = await supabase.from("pizzas").select("*")

  if (error) {
    console.error("Error fetching pizzas from Supabase:", error)
    return [
      {
        id: "error-1",
        name: "Błąd z bazą danych",
        description: "Nie udało się załadować pizzy z bazy danych. Spróbuj ponownie później.",
        price: 0,
        image_url: "/placeholder.svg?height=300&width=400",
        category: "Informacja",
        ingredients: [],
        created_at: new Date().toISOString(),
      },
    ]
  }

  if (!data || data.length === 0) {
    console.warn("Pizzas table is empty.")
    return [
      {
        id: "empty-1",
        name: "Brak dostępnych pizz",
        description: "Aktualnie nie mamy żadnych pizz w ofercie. Zapraszamy wkrótce!",
        price: 0,
        image_url: "/pizza/margherita.png",
        category: "Informacja",
        ingredients: [],
        created_at: new Date().toISOString(),
      },
    ]
  }

  console.log("Connected successfully to Supabase.")

  return data.map((pizza) => ({
    ...pizza,
    price: typeof pizza.price === "string" ? parseFloat(pizza.price) : pizza.price,
  }))
}
