'use client';

import { useUiStore } from '@/store';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const Navbar = () => {

    const openSideMenu = useUiStore((state)=>state.openSideMenu)
    const openSearch = useUiStore((state) => state.openSearch)

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
                    href={'/size/mini'} 
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-medium'>
                    Mini
                </Link>
                <Link 
                    href={'/size/small'} 
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-medium'>
                    Pequeño
                </Link>
                <Link 
                    href={'/size/medium'}   
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-medium'>
                    Mediano
                </Link>
                <Link 
                    href={'/size/big'} 
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 font-medium'>
                    Grande
                </Link>
            </div>
    
    
            <div className='flex items-center gap-4'>
                <div className='cursor-pointer'>
                <button
                className='relative flex flex-row items-center justify-center w-12 h-12 text-black transition-colors duration-[350ms] ease-0'
                onClick={openSearch}
                aria-label="Buscar"
                role="button"
                tabIndex={0}
                >
                    <IoSearchOutline className='w-5 h-5' />
                </button>
                </div>
                
                <Link href={'/cart'}>
                <div className='cursor-pointer relative'> 
                    <IoCartOutline className='w-5 h-5'/>
                </div>
                </Link>
    
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
