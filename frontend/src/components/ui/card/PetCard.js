'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export const PetCard = ({pet}) => {

    const [displayImage, setDisplayImage] = useState(pet?.imageUrl);

    const localSrc = (displayImage)
    ? displayImage.startsWith('http')
        ? displayImage
        : `/products/${displayImage}`
    : '/images/fondo.png'


  return (
    <div className='rounded-lg overflow-hidden fade-in hover:shadow-[0_0_26px_0_rgba(0,0,0,0.25)] hover:z-[1] group'>
        <Link
             href={`#`}
        >
        <div className="w-full h-80 overflow-hidden">
        <Image
            src={localSrc}
            alt={pet?.breed}
            width={1000}
            height={1000}
            className='rounded-lg object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105 ' 
            
        />
        </div>
        </Link>
        <div className='flex flex-col p-4'>
            <Link href={`#`} className='hover:text-blue-600'>
                {pet.breed}
            </Link>
            <span className='font-bold'>${pet.price}</span>

        </div>
        
    </div>
  )
}
