'use client'

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet" // Используем Sheet для мобильного меню

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Kamola <span className="text-gray-800">Boutique</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Главная</Link>
          <Link href="#about">О нас</Link>
          <Link href="#services">Услуги</Link>
          <Link href="#contact">Контакты</Link>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu with Sheet from ShadCN UI */}
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <SheetContent side="top" className="p-6 flex flex-col gap-4 text-lg text-gray-700">
        <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:text-pink-600" onClick={() => setMenuOpen(false)}>Главная</Link>
        <Link href="#about" className="hover:text-pink-600" onClick={() => setMenuOpen(false)}>О нас</Link>
        <Link href="#services" className="hover:text-pink-600" onClick={() => setMenuOpen(false)}>Услуги</Link>
        <Link href="#contact" className="hover:text-pink-600" onClick={() => setMenuOpen(false)}>Контакты</Link>
        </nav>
      </SheetContent>
    </Sheet>
    </header>
  )
}
