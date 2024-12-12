'use client'

import React, { useState } from 'react'
import clsx from 'clsx'

export const AddToCart = ({product}) => {

    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const [posted, setPosted] = useState(false);

    const addToCart = ()=>{

        if (!size) {
            setPosted(true)
            return
        };

        const { id, slug, title, price,images,inStock} = product;

        const CartProduct = {
            id,
            title,
            slug,
            price,
            image:images[0],
            quantity,
            size,
            stock:inStock,
        };

        addProductToCart(CartProduct);
        setSize(undefined);
        setQuantity(1);
        setPosted(false);

    }
    

  return (
    <>
        <button 
            className={clsx('max-w-48',{
                "btn-primary my-5 ": product.stock > 0,
                "btn-disabled my-5": product.Stock === 0
            })}
            onClick={addToCart}
            disabled={product.inStock === 0}
        >
         Agregar al carrito
        </button>
    </>
  )
}