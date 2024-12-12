    'use client';

    import React from 'react'
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Pagination , Autoplay } from 'swiper/modules';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { PetCard } from '../ui/card/PetCard';
    import Link from 'next/link';
    import { PETS_ALL } from '@/seed/pets';

    const SOME_PETS = PETS_ALL.slice(0, 8)
        

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
            SOME_PETS.map(( dog, index) => (
                <SwiperSlide className='rounded-xl border border-[rgb(221, 221, 221)] overflow-hidden '>
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
