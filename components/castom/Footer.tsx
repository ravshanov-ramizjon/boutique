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
            <li><Link href="/" className="hover:text-pink-600">Главная</Link></li>
            <li><Link href="#about" className="hover:text-pink-600">О нас</Link></li>
            <li><Link href="#services" className="hover:text-pink-600">Почему мы</Link></li>
            <li><Link href="#contact" className="hover:text-pink-600">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2">
            <li>Телефон:
              <Link
                href="tel:+998901234567"
                className="hover:text-pink-600"
                type="tel"
              >
                +998 90 123 45 67
              </Link>
            </li>
            <li>Email:
              <Link
                href="mailto:kamolaboutique@gmail.com"
                className="hover:text-pink-600"
                type="email"
              >
                kamolaboutique@gmail.com
              </Link>
            </li>
            <li>Адрес: 
              <Link
              href="https://yandex.uz/maps/-/CHvWvGo8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 cursor-pointer"
              >
              г. Ташкент, Улица Мода, 10
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Соцсети</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-600">Instagram</a></li>
            <li><a href="#" className="hover:text-pink-600">Telegram</a></li>
            <li><a href="#" className="hover:text-pink-600">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center py-4 text-xs text-gray-500">
        <p>
          <Link
            href="/"
            className="hover:text-pink-600 text-sm transition duration-200"
          >
            Создано Web Site Development
          </Link>
        </p>
      </div>
    </footer>
  )
}
