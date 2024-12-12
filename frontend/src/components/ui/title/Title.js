import { quicksand } from '@/font'
import React from 'react'


export const Title = ({title,subtitle,className}) => {
  return (
    <div className={`mt-3 ${className} `}>
        <h1 className={`${quicksand.className} antialiased text-3xl font-semibold my-4 `}>{title}</h1>
        {
            subtitle && <h2 className={`${quicksand.className} text-xl mb-4`}>
                {subtitle}
            </h2>
        }

    </div>
  )
}