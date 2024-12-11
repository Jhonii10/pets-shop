    'use client';

    import React from 'react'
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Pagination , Autoplay } from 'swiper/modules';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { PetCard } from '../ui/card/PetCard';
import Link from 'next/link';


    const dogs = [
            {
              breed: "Pastor alemán",
              price: 500000,
              imageUrl: "https://images.pexels.com/photos/29443619/pexels-photo-29443619/free-photo-of-retrato-de-un-perro-pastor-aleman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Bulldog Francés",
              price: 600000,
              imageUrl: "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Golden Retriever",
              price: 550000,
              imageUrl: "https://images.pexels.com/photos/2409503/pexels-photo-2409503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Labrador",
              price: 480000,
              imageUrl: "https://images.pexels.com/photos/35638/labrador-breed-dogs-animal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Beagle",
              price: 450000,
              imageUrl: "https://images.pexels.com/photos/7288/animal-dog-pet-park.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Shih Tzu",
              price: 350000,
              imageUrl: "https://images.pexels.com/photos/130771/pexels-photo-130771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Husky Siberiano",
              price: 700000,
              imageUrl: "https://images.pexels.com/photos/29392780/pexels-photo-29392780/free-photo-of-retrato-de-otono-de-un-husky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Dalmata",
              price: 520000,
              imageUrl: "https://images.pexels.com/photos/3763311/pexels-photo-3763311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Pug",
              price: 400000,
              imageUrl: "https://images.pexels.com/photos/3475680/pexels-photo-3475680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              breed: "Border Collie",
              price: 580000,
              imageUrl: "https://images.pexels.com/photos/3908821/pexels-photo-3908821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          
    ];
    

    export const SomePets = () => {
    return (
        <div className='w-full  m-auto  bg-[url(/images/fondo-pet.png)] bg-top p-2 md:p-10'>
            <div className='p-8 text-center'>
                <h2 className='text-2xl md:text-3xl font-bold '>Algunos de nuestros cachorros</h2>
            </div>
            <div className='max-w-6xl p-4 m-auto'>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
            delay: 2500,
            }}
            loop={true}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
            modules={[Pagination , Autoplay]}
            className="mySwiper"
        >
        {
            dogs.map(( dog, index) => (
                <SwiperSlide className='rounded-xl border border-[rgb(221, 221, 221)] overflow-hidden  hover:shadow-[0_0_26px_0_rgba(0,0,0,0.25)]'>
                    <PetCard pet={dog}/>
                </SwiperSlide>
            ))
        }
            
        </Swiper>
        <div className='mt-12 sm:mt-24'>
              <div className={`
                    flex flex-row items-center justify-center
                    before:content-[''] before:block before:relative before:w-[40vw] before:h-[1px] before:bg-[#4DD7F5]
                    after:content-[''] after:block after:relative after:w-[40vw] after:h-[1px] after:bg-[#4DD7F5]
                `}>
                  <Link 
                    href='/pets'
                    className="inline-flex flex-row items-center justify-center text-center bg-[#4DD7F5] border-[#4DD7F5] hover:bg-[#3fdcff] cursor-pointer font-bold rounded-full p-6 mx-7 min-w-40 "
                  >
                      Ver mas
                  </Link>
              </div>
          </div>
        </div>
        

        </div>
    )
    }
