'use client'

import React, { useEffect, useState } from 'react'
import { QuantitySelector } from '@/components'
import Link from 'next/link'
import { PetImage as Image } from '../pets/image/petImage'
import { fCurrency } from '@/utils/formatNumber'

export const PetsInCart = () => {

    const petsInCart = [
        {
            id: '9',
            slug: 'Pastor_aleman',
            title: 'Pastor aleman',
            size: 'grande',
            price: 500000,
            quantity: 1,
            stock: 2,
            image: 'https://images.pexels.com/photos/29443619/pexels-photo-29443619/free-photo-of-retrato-de-un-perro-pastor-aleman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ];
    
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, []);

    if (!loaded) {
        return <p>Cargando...</p>
    }

  return (
    <>
    {
        petsInCart?.map((pet) => (
                <div key={`${pet.slug} + ${pet.size}`} className="flex gap-1 border rounded-lg p-2">
                    
                    <Image
                      src={pet.image}
                      alt={pet.title}
                      width={80}
                      height={80}
                      className=" mr-2 rounded-md object-cover"
                    />
                    
                    <div className="flex flex-col justify-around gap-2 ">
                        <Link href={`/pets/${pet.id}`}>
                        <p className="text-sm sm:text-md font-semibold">{pet.title}</p>
                        </Link>
                        <p className="text-sm sm:text-md font-medium">Tamaño: {pet.size}</p>
                        <p className="font-semibold">{fCurrency(pet.price)}</p>
                         <div className="flex flex-wrap items-start sm:flex-row sm:items-center gap-2  ">
                          <QuantitySelector quantity={pet.quantity}  setQuantityChange={()=>{}} inStock={pet.stock}/>
                        <button 
                            className="ml-0 sm:ml-2 "
                            >
                          <p className='underline font-medium  hover:text-red-500 hover:font-bold'>Eliminar</p>
                        </button>

                         </div>
                        
                    </div>
                </div>
              ))
            }
    </>
  )
}
