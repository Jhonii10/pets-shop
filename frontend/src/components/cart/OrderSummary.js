'use client'

import { fCurrency } from '@/utils/formatNumber'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const OrderSummary = () => {

    const router = useRouter();


    const [isClient, setIsClient] = useState(false);

    const total = 500000;
    const subtotal = total - total*0.19;
    const tax = total*0.19;
    const itemsInCart = 1;

    useEffect(() => {
        setIsClient(true)
    }, []);

    useEffect(() => {

      if ( itemsInCart === 0 && isClient === true )   {
        redirect('/pets');
      }
  
  
    },[ itemsInCart, isClient, router])
  
  

    if(!isClient) return <p>Cargando...</p>

    
    
  return (
    <div>
            <div className="bg-white rounded-lg shadow-xl p-7">
              <h2 className="text-xl mb-2 font-semibold">Resumen del pedido</h2>
              <div className="grid grid-cols-2">
                <span className="font-medium">No mascotas</span>
                <span className="text-right">{itemsInCart} cachorros</span>

                <span className="font-medium">Subtotal</span>
                <span className="text-right">{fCurrency(subtotal)}</span>

                <span className="font-medium">impuesto 19%</span>
                <span className="text-right">{fCurrency(tax)}</span>

                <span className="font-bold">Total</span>
                <span className="text-right font-bold"  >{fCurrency(total)}</span>
              </div>

              <div>
                <Link 
                  href={'/checkout'}
                  className="btn-primary flex justify-center mt-2 "
                  >
                  Verificar
                </Link>
              </div>

            </div>
            </div>
  )
}
