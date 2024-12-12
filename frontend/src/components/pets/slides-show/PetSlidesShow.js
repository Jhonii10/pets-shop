'use client'
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs, Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import Image from 'next/image';
import { PetImage } from '../image/petImage';



export const PetSlideShow = ({images,title,className}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    

  return (
    <>
    <Swiper
    style={{
        '--swiper-navigation-color': '#4DD7F5' ,
        '--swiper-pagination-color': '#4DD7F5',
      
      }}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      
      autoplay={{
        delay: 2500,
      }}
      navigation={true}
      
      thumbs={{ swiper: thumbsSwiper}}
      modules={[FreeMode, Navigation, Thumbs , Pagination, Autoplay]}
      className='mySwiper2  '
      >
      {
        images.map((image)=>(
            <SwiperSlide 
            key={image} 
            className="w-full h-full flex items-center justify-center"
            style={{
              borderRadius: '0.5rem',
              aspectRatio: '1 / 1',
              overflow: 'hidden'
            }}
          >
            <Image
              src={image ?? '/images/placeholder.jpg'}
              alt={title}
              width={1000}
              height={1000}
              title={title}
              className='object-cover w-full h-full rounded-xl'
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
     
     <div className={className}>
    <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        style={{marginBottom:'12px', marginTop:'12px'}}
      >
        {
        images.map((image)=>(
            <SwiperSlide key={image} style={{borderRadius:'0.5rem', aspectRatio: '1 / 1',
                overflow: 'hidden'}} >
                <PetImage
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className='rounded-lg'
                />
            </SwiperSlide>
        ))
      }
      </Swiper>
      </div>
    </>
  )
}
