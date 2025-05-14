'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'

export default function Home() {
  // Массив с URL-ами изображений с Unsplash
  const images = [
    'https://images.unsplash.com/photo-1653707686205-480f42c2ae69?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1518284856799-c667e6363564?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1635716430620-d72de6e1c6e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1652834028068-237ca3b6af0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1653707686205-480f42c2ae69?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1518284856799-c667e6363564?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1635716430620-d72de6e1c6e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1652834028068-237ca3b6af0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1653707686205-480f42c2ae69?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1518284856799-c667e6363564?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1635716430620-d72de6e1c6e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1652834028068-237ca3b6af0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  ]

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10 py-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Kamola Boutique
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 max-w-2xl mx-auto">
            Добро пожаловать в мир женственности, стиля и вдохновения.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105">
            Связаться с нами
          </button>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">О нас</h2>
            <p className="text-gray-600 leading-relaxed">
              Kamola Boutique — это место, где каждая женщина может найти свой уникальный стиль. Мы предлагаем изысканную коллекцию одежды и аксессуаров, созданных с любовью к деталям.
            </p>
          </div>
          <div>
            <img
              src="/about.jpg"
              alt="О нас"
              className="rounded-2xl shadow-md w-full object-cover h-[300px] sm:h-[400px] md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Карусель фотографий бутика */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-gray-800 text-center">Фотографии бутика</h2>

          <Swiper
            loop={true}
            speed={10000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 1.5
              },
              640: {
                slidesPerView: 2.2
              },
              768: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 4
              },
              1280: {
                slidesPerView: 5
              }
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper h-[200px] sm:h-[200px] md:h-[200px] lg:h-[300px] w-full rounded-2xl shadow-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Фото бутика ${index + 1}`}
                  width={500}
                  height={500}
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-gray-800">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2 text-pink-600">Индивидуальный подход</h3>
              <p className="text-gray-600 text-sm">Мы подберём идеальный образ под ваш стиль и вкус.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2 text-pink-600">Эксклюзивные коллекции</h3>
              <p className="text-gray-600 text-sm">Ограниченные партии одежды, которых нет в масс-маркете.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2 text-pink-600">Подарочные сертификаты</h3>
              <p className="text-gray-600 text-sm">Порадуйте близких стильным подарком от Kamola Boutique.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
