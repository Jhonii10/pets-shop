'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import { QuantitySelector } from '@/components';
import toast from 'react-hot-toast';

export const AddToCart = ({product}) => {

    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const [posted, setPosted] = useState(false);

    const addToCart = ()=>{

        const { id, slug, title, price,imageUrl,inStock} = product;

        const CartProduct = {
            id,
            title,
            slug,
            price,
            image:imageUrl[0],
            quantity,
            size,
            stock:inStock,
        };

        toast.success('Mascota añadida al carrito')

        setSize(undefined);
        setQuantity(1);
        setPosted(false);

    }
    

  return (
    <>

        <QuantitySelector 
            quantity={quantity}
            setQuantityChange = {setQuantity}
            inStock={product.stock}
        />
        
        <button 
            className={clsx('max-w-48',{
                "btn-primary ": product.stock > 0,
                "btn-disabled ": product.Stock === 0
            })}
            onClick={addToCart}
            disabled={product.Stock === 0}
        >
         Agregar al carrito
        </button>
    </>
  )
}