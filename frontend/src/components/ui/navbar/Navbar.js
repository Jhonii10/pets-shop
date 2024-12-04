'use client';

import { useUiStore } from '@/store';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const Navbar = () => {

    const openSideMenu = useUiStore((state)=>state.openSideMenu)

    return (
        <nav className='flex px-4 py-4 justify-between items-center w-full bg-[#4DD7F5]'>
            <div>
                <Link
                 href={'/'}
                 >
                    <Image
                        src="/logo.png"
                        width={120}
                        height={50}
                        alt="Logo"
                        title='logo'
                    />
                </Link>
            </div>
    
            {/* center menu */}
            <div className='hidden sm:block'>
                <Link 
                    href={'#'} 
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-medium'>
                    Mini
                </Link>
                <Link 
                    href={'#'} 
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-medium'>
                    Pequeño
                </Link>
                <Link 
                    href={'#'}  
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-medium'>
                    Mediano
                </Link>
                <Link 
                    href={'#'} 
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-medium'>
                    Grande
                </Link>
            </div>
    
    
            <div className='flex items-center gap-4'>
                <div className='cursor-pointer'>
                    <IoSearchOutline className='w-5 h-5' />
                </div>
                <div className='cursor-pointer'> 
                    <IoCartOutline className='w-5 h-5'/>
                </div>
    
                <button 
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                    onClick={openSideMenu}
                >
                  Menu  
                </button>
                
            </div>
    
        </nav>    
    )
}
