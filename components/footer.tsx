import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted text-foreground py-12 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pizza u Mario</h3>
            <p className="text-muted-foreground">
              Serwujemy autentyczną włoską pizzę od 1952 roku. Z miłością, tradycją i najlepszymi składnikami.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#menu" className="hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  O nas
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-white">
                  Koszyk
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Dane kontaktowe</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>ul. Pizza 123</li>
              <li>Małe Włochy, NY 10013</li>
              <li>(555) 123-PIZZA</li>
              <li>info@pizzauMario.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Śledź nas</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 Pizza u Mario. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
