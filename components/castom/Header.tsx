'use client'

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet" // Используем Sheet для мобильного меню
import Image from "next/image"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        <Link href="/"
          className="text-2xl font-bold text-pink-600 flex"
        >
          {/* Logo Kamola Byutik */}
          <Image
            src="/logo_byutiqe.png"
            alt="Kamola Byutik Logo"
            width={1000}
            height={20}
            className="w-50 h-20"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-pink-600 hover:underline">Главная</Link>
          <Link href="#about" className="hover:text-pink-600 hover:underline">О нас</Link>
          <Link href="#services" className="hover:text-pink-600 hover:underline">Почему мы</Link>
          <Link href="#contact" className="hover:text-pink-600 hover:underline">Контакты</Link>
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
