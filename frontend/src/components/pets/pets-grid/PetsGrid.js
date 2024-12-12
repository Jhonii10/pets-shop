
import React from 'react'
import { PetsItem } from '../pets-item/PetsItem'


export const PetsGrid = ({products}) => {

  return (
    <div className='grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6  '>
      {
        products.map((product) => (
          <PetsItem key={product.id} product={product}/>
        ))
      }

    </div>
  )
}