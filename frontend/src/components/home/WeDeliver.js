import React from 'react'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { MdVaccines } from 'react-icons/md';
import { SiDatadog } from "react-icons/si";


export const WeDeliver = () => {
  return (
    <div className='bg-[#4DD7F5] w-full p-12 flex flex-col flex-wrap justify-center items-center gap-4 '>
        <div>
            <h2 className='text-3xl font-bold'>Te entregamos:</h2>
        </div>
        <div>
            <ul className='flex flex-col md:flex-row gap-6'>
                <li className='p-5 flex flex-col justify-center items-center text-center gap-2'>
                    <HiOutlineClipboardDocumentList size={110}/>
                    <p className='text-xl font-semibold'>Salud por escrito</p>
                </li>
                <li className='p-5 flex flex-col justify-center items-center text-center gap-2'>
                    <MdVaccines size={110} />
                    <p className='text-xl font-semibold'>Vacunados y desparacitados</p>
                </li>
                <li className='p-5 flex flex-col justify-center items-center text-center gap-2'>
                    <SiDatadog size={110}/>
                    <p className='text-xl font-semibold'>Garantía de raza</p>
                </li>

            </ul>
        </div>
    </div>
  )
}
