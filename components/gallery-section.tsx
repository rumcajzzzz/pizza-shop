import Image from "next/image"

export function GallerySection() {
  const images = [
    {
      src: "/gallery/piec.jpg?height=300&width=400",
      alt: "Piec do pizzy opalany drewnem",
      title: "Tradycyjny piec opalany drewnem",
    },
    {
      src: "/gallery/ingredients.jpg?height=300&width=400",
      alt: "Świeże składniki do pizzy",
      title: "Świeże składniki każdego dnia",
    },
    {
      src: "/gallery/making.jpg?height=300&width=400",
      alt: "Proces przygotowania pizzy",
      title: "Ręcznie robione z miłością",
    },
    {
      src: "/gallery/restaurant.jpg?height=300&width=400",
      alt: "Wnętrze restauracji",
      title: "Przytulna atmosfera",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-muted-foreground mb-4">Galeria</h2>
          <p className="text-xl text-muted-foreground">Zajrzyj za kulisy Mario's Pizza</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
