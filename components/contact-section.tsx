"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-muted-foreground mb-4">Kontakt</h2>
          <p className="text-xl text-muted-foreground">
            Skontaktuj się z nami w sprawie rezerwacji, cateringu lub jeśli masz pytania
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Wyślij wiadomość</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input name="name" placeholder="Twoje imię" value={formData.name} onChange={handleChange} required />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Twój email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Twój numer telefonu"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Textarea
                    name="message"
                    placeholder="Twoja wiadomość"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" className="w-full text-white bg-red-700 hover:bg-red-500">
                    Wyślij wiadomość
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>ul. Pizza 123</li>
                      <li>Little Italy, NY 10013</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>(555) 123-PIZZA</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>info@mariospizza.com</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Godziny otwarcia</h3>
                    <div className="text-muted-foreground">
                      <p>Pon-Czw: 11:00 – 22:00</p>
                      <p>Pt-Sob: 11:00 – 23:00</p>
                      <p>Niedziela: 12:00 – 21:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
  
}
