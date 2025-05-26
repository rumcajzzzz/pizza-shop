export interface Pizza {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  ingredients: string[]
  created_at: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image_url: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}
