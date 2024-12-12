import Image from 'next/image';
import React from 'react'

export const PetImage = ({src,alt,width,height,className }) => {
 

    const localSrc = (src)
    ? src.startsWith('http')
        ? src
        : `/pets/${src}`
    : '/images/placeholder.jpg' 

  return (
    <Image
        src={localSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        title={alt}
    />
  )
}