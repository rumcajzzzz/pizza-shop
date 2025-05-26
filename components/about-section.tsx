import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">O Mario's Pizza</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Od 1952 roku Mario's Pizza serwuje autentyczną włoską pizzę naszej społeczności. Nasze rodzinne przepisy
              są przekazywane z pokolenia na pokolenie – już od trzech generacji – dzięki czemu każda pizza niesie ze sobą
              tradycję i miłość do włoskiej kuchni.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Używamy wyłącznie najlepszych składników: pomidorów San Marzano, świeżej mozzarelli robionej codziennie oraz
              naszego unikalnego ciasta dojrzewającego przez 48 godzin. Każda pizza jest ręcznie formowana i wypiekana w tradycyjnym piecu opalanym drewnem.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">70+</div>
                <div className="text-muted-foreground">Lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">50k+</div>
                <div className="text-muted-foreground">Zadowolonych klientów</div>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <Image
              src="/gallery/about.jpg?height=400&width=600"
              alt="Kuchnia Mario's Pizza"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
  
}
