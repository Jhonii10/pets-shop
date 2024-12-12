'use client'

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";


export const QuantitySelector = ({quantity , setQuantityChange , inStock }) => {

    const onQuantityChanged = (value)=>{
        
        if (quantity + value < 1) return;
        if (quantity + value > inStock ) return;
        setQuantityChange(quantity + value)
        
    }

  return (
    <div className="flex items-center">
        <button
            onClick={()=>onQuantityChanged(-1)}
        >
            {<IoRemoveCircleOutline size={30} />}
        </button>
        
        <span className="w-12 md:w-20 mx-3 px-5 bg-zinc-300 text-center rounded">
            {quantity}
        </span>

        <button
            onClick={()=>onQuantityChanged(+1)}
        >
            {<IoAddCircleOutline size={30} />}
        </button>

    </div>
  )
}
