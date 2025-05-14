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
            <li><Link href="/">Главная</Link></li>
            <li><Link href="#about">О нас</Link></li>
            <li><Link href="#services">Услуги</Link></li>
            <li><Link href="#contact">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2">
            <li>Телефон: +998 90 123 45 67</li>
            <li>Email: info@kamolaboutique.uz</li>
            <li>Адрес: г. Ташкент, Улица Мода, 10</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Соцсети</h3>
          <ul className="space-y-2">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Kamola Boutique. Все права защищены.
      </div>
    </footer>
  )
}
