'use client'

import { fCurrency } from '@/utils/formatNumber';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


export const PetsItem = ({product}) => {

    const [displayImage, setDisplayImage] = useState(product.imageUrl[0]);

    const localSrc = (displayImage)
    ? displayImage.startsWith('http')
        ? displayImage
        : `/products/${displayImage}`
    : '/images/placeholder.jpg'
    
    
  return (
    <div className='rounded-md overflow-hidden fade-in '>
        <Link
             href={`/pets/${product.id}`}
        >
        <Image
            src={localSrc}
            alt={product.title}
            width={500}
            height={500}
            className='w-full object-cover rounded aspect-square'
            onMouseEnter={()=>setDisplayImage(product.imageUrl[1])}
            onMouseLeave={()=>setDisplayImage(product.imageUrl[0])}
        />
        </Link>
        <div className='flex flex-col p-4'>
            <Link href={`/product/${product.id}`} className='hover:text-blue-600'>
                {product.breed}
            </Link>
            <span className='font-bold'>{fCurrency(product.price)}</span>

        </div>
        
    </div>
  )
}