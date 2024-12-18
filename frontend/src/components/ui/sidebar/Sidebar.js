'use client'

import { logOut } from '@/lib/auth/actions'
import { useUiStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPersonOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'

export const Sidebar =  ({session}) => {

  const isSideMenuOpen = useUiStore((state)=>state.isSideMenuOpen);
  const closeSideMenu = useUiStore((state)=>state.closeSideMenu);
  
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user?.name === 'jhoni' || session?.user?.name === 'valeria garcia' || session?.user?.name === 'nicole garcia'; 

  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.classList.add('overflow-hidden');
    }
    else {
      document.body.classList.remove('overflow-hidden');
    }
    
  }, [isSideMenuOpen , closeSideMenu]);



  
  return (
    <> 
        
       {
        isSideMenuOpen && 
        <>
             
       
            <div
                className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 '
                
            />
            <div
                className='fade-in fixed top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm z-20'
                onClick={closeSideMenu}
                
            />
        </>
        }
            <nav
                className={
                    clsx(
                    "fixed p-5 right-0 top-0  w-full sm:w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-500",
                    {
                        "translate-x-full": !isSideMenuOpen,
                        "overflow-scroll":isSideMenuOpen
                    }
                    )
                }
            >
                <IoCloseOutline
                    className='absolute right-5 cursor-pointer'
                    size={30}
                    onClick={closeSideMenu}
                />

                <hr className='relative mt-14 border-[#4DD7F5]'/>

                {/* menu */}

                {
                    isAuthenticated && (
                        <>
                            <Link 
                                href={'/profile'}
                                className='flex items-center mt-5 p-2 hover:bg-gray-100 rounded-md transition-all'
                                onClick={closeSideMenu}
                            >
                                <IoPersonOutline size={20}/>
                                <span className='ml-3 text-md font-medium'>Perfil</span>
                            </Link>
                            

                            <Link 
                                href={'/orders'}
                                className='flex items-center mt-5 p-2 hover:bg-gray-100 rounded-md transition-all'
                                onClick={closeSideMenu}
                            >
                                <IoTicketOutline size={20}/>
                                <span className='ml-3 text-md font-medium'>Ordenes</span>
                            </Link>
                        </>
                    )
                }

                

                {
                    isAuthenticated
                    && ( <button 
                        className='flex items-center mt-5 p-2 hover:bg-gray-100 rounded-md transition-all w-full'
                        onClick={()=>{
                            logOut();
                            closeSideMenu();
                            toast.success('session finalizada')
                            redirect('/')
                        }}
                        
                    >
                        <IoLogOutOutline size={20}/>
                        <span className='ml-3 text-md font-medium'>Salir</span>
                    </button>

                    )
                }
                {
                !isAuthenticated &&(
                        <Link 
                        href={'/auth/login'}
                        className='flex items-center mt-5 p-2 hover:bg-gray-100 rounded-md transition-all'
                        onClick={closeSideMenu}
                        >
                        <IoLogInOutline size={20}/>
                        <span className='ml-3 text-md font-medium'>Iniciar session</span>
                        
                        </Link>

                    )
                }

                
                {
                    isAuthenticated && isAdmin && 
                
                (
                <>
                <div className='w-full h-px bg-gray-200 my-5'/>

                <Link 
                    href={'/dashboard'}
                    className='flex items-center mt-5 p-2 hover:bg-gray-100 rounded-md transition-all'
                    onClick={closeSideMenu}
                >
                    <MdDashboard size={20}/>
                    <span className='ml-3 text-md font-medium'>Panel administrativo</span>
                </Link>
                </>
                )
                }
            </nav>
        
    </>
  )
}