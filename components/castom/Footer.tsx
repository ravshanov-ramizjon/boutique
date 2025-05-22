"use client"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Kamola Boutique</h3>
          <p className="text-gray-600">
            Элегантность и стиль для каждой женщины. Добро пожаловать в наш бутик!
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Меню</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-pink-600"
              >
                Главная
              </button>
            </li>
            <li><Link href="#about" className="hover:text-pink-600">О нас</Link></li>
            <li><Link href="#services" className="hover:text-pink-600">Почему мы</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              Телефон:
              <div className="flex flex-col">
                <Link href="tel:+998915380345" className="hover:text-pink-600">+998(91)5380345</Link>
                <Link href="tel:+998887220171" className="hover:text-pink-600">+998(88)7220171</Link>
              </div>
            </li>
            <li className="flex items-start gap-2">
              Адрес:
              <Link
                href="https://yandex.uz/maps/-/CHvWvGo8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 cursor-pointer"
              >
                улица Хусейна Байкара, Gulbog', Самарканд
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Соцсети</h3>
          <ul className="space-y-2">
            <li><a href="https://www.instagram.com/kamolaboutique?igsh=MWFkNDVuYnRnczY4NQ==" className="hover:text-pink-600">Instagram</a></li>
            <li><a href="https://t.me/kamolaboutique" className="hover:text-pink-600">Telegram</a></li>
          </ul>
        </div>
      </div>

      {/* нижняя строка, отдельно от grid */}
      <div className="border-t text-center py-4 text-xs text-gray-500">
        <p>
          <Link
            href="https://web-site-development.netlify.app/"
            className="hover:text-pink-600 text-sm transition duration-200"
          >
            Создано Web Site Development
          </Link>
        </p>
      </div>
    </footer>
  )
}
