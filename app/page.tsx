'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

import { User2, ShieldCheck, Sparkles } from 'lucide-react'


export default function Home() {
  // Массив с URL-ами изображений с Unsplash не рекомедуется для исползования
  // const images = [
  //   'https://images.unsplash.com/photo-1653707686205-480f42c2ae69?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1518284856799-c667e6363564?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1635716430620-d72de6e1c6e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1652834028068-237ca3b6af0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1653707686205-480f42c2ae69?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1518284856799-c667e6363564?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1635716430620-d72de6e1c6e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1652834028068-237ca3b6af0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1653707686205-480f42c2ae69?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1518284856799-c667e6363564?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1635716430620-d72de6e1c6e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   'https://images.unsplash.com/photo-1652834028068-237ca3b6af0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  // ]
  // Массив с реалными изображениями из PUBLIC
  const images = [
    '/kamola_photo3.jpg',
    '/kamola_photo4.jpg',
    '/kamola_photo5.jpg',
    '/kamola_photo6.jpg',
    '/kamola_photo7.jpg',
    '/kamola_photo8.jpg',
    '/kamola_photo9.jpg',
    '/kamola_photo10.jpg',
    '/kamola_photo11.jpg',
    '/kamola_photo12.jpg',
    '/kamola_photo13.jpg',
    '/kamola_photo14.jpg',
    '/kamola_photo15.jpg',
    '/kamola_photo16.jpg',
    '/kamola_photo17.jpg',
    '/kamola_photo18.jpg',
    '/kamola_photo19.jpg',
  ];

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="relative h-screen">
        <Image
          src="/hero.jpg"
          alt="Kamola Boutique"
          fill
          className="object-cover object-top w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">
            Kamola Boutique – это отражение вашей элегантности и безупречного вкуса. 🌟
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8">
            Мы создаем стиль для тех, кто выбирает качество, изысканность и уникальность. 💎 Камола Бутик – ваш выбор совершенства. ✨
          </p>
          <button
            onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
            className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105">
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
              Мы не просто продаем одежду – мы создаем настроение, вдохновляем и помогаем раскрыть вашу уникальность. <br />
              • Эксклюзивные образы: Только те вещи, которые вы полюбите с первого взгляда. <br />
              • Детали, которые важны: От изысканной отделки до тканей, которые вы захотите ощущать на себе каждый день. <br />
              • Магия аксессуаров: Завершающий штрих, который делает ваш образ неповторимым. <br /> <br />
              Наша миссия – ваша улыбка <br />
              Мы знаем, как важно чувствовать себя уверенно и красиво. Камола Бутик – это ваш союзник в создании образа, который сделает ваш день лучше.
            </p>
          </div>
          <div>
            <img
              src="/about.jpg"
              alt="О нас"
              className="rounded-2xl shadow-md w-full object-cover md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Карусель фотографий бутика */}
      <section id="gallery" className="py-10">
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
            className="mySwiper h-full w-full rounded-2xl"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Фото бутика ${index + 1}`}
                  width={500}
                  height={800}
                  className="rounded-xl shadow-black shadow-sm w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* Почему Kamola Boutique */}
      (
      <section id='services' className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
            Почему Kamola Boutique?
          </h2>

          <div className="hidden lg:flex items-start justify-center gap-8">
            {/* Card 1 */}
            <div className="w-full max-w-sm">
              <Card className="bg-pink-50 shadow-md hover:shadow-lg transition duration-300 rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <User2 className="h-12 w-12 text-pink-600 mb-4" />
                  <CardTitle className="text-pink-700 text-xl mb-2">1. Вы — главная героиня</CardTitle>
                  <CardDescription className="text-gray-700 text-base">
                    Всё подобрано с любовью, чтобы подчеркнуть вашу уникальность.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Card 2 — немного ниже */}
            <div className="w-full max-w-sm relative top-[52px]">
              <Card className="bg-pink-50 shadow-md hover:shadow-lg transition duration-300 rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ShieldCheck className="h-12 w-12 text-pink-600 mb-4" />
                  <CardTitle className="text-pink-700 text-xl mb-2">2. Качество, проверенное временем</CardTitle>
                  <CardDescription className="text-gray-700 text-base">
                    Мы верим, что вещь должна радовать вас долго.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-sm">
              <Card className="bg-pink-50 shadow-md hover:shadow-lg transition duration-300 rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Sparkles className="h-12 w-12 text-pink-600 mb-4" />
                  <CardTitle className="text-pink-700 text-xl mb-2">3. Вдохновение в каждой детали</CardTitle>
                  <CardDescription className="text-gray-700 text-base">
                    Мода для нас – это искусство, которым мы делимся с вами.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Мобильная версия — по вертикали */}
          <div className="lg:hidden flex flex-col gap-8 items-center">
            {[{
              icon: <User2 className="h-12 w-12 text-pink-600 mb-4" />,
              title: '1. Вы — главная героиня',
              desc: 'Всё подобрано с любовью, чтобы подчеркнуть вашу уникальность.'
            }, {
              icon: <ShieldCheck className="h-12 w-12 text-pink-600 mb-4" />,
              title: '2. Качество, проверенное временем',
              desc: 'Мы верим, что вещь должна радовать вас долго.'
            }, {
              icon: <Sparkles className="h-12 w-12 text-pink-600 mb-4" />,
              title: '3. Вдохновение в каждой детали',
              desc: 'Мода для нас – это искусство, которым мы делимся с вами.'
            }].map((item, idx) => (
              <Card key={idx} className="bg-pink-50 shadow-md hover:shadow-lg transition duration-300 rounded-2xl w-full max-w-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {item.icon}
                  <CardTitle className="text-pink-700 text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-gray-700 text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
