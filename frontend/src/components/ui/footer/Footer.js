'use client';

import Link from 'next/link'
import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { MdOutlineMail } from 'react-icons/md'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';

export const Footer = () => {

  return (
    <footer className="bg-[#4DD7F5] mt-8">
    <div className="mx-auto max-w-screen-xl p-6 lg:p-8 ">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <div className="flex justify-center text-teal-600 sm:justify-start">
          <Link
                 href={'/'}
                 >
                    <Image
                        src="/logo.png"
                        width={160}
                        height={50}
                        alt="Logo"
                        title='logo'
                    />
          </Link>
          </div>
          <p className="mt-6 max-w-lg text-center leading-relaxed text-gray-900  sm:text-left">
          Caninos shop es una marca registrada de A&M BRAND S.A.S. con NIT. 901-184-793-1.
          Nos enfocamos en brindarle SEGURIDAD durante todo el proceso de adquisición de su mascota;
          y creamos para ti un momento memorable a partir de una experiencia de ALTA CALIDAD.

          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          
          
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-gray-900">Contacto</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href={'mailto:contacto@caninosshop.com'} 
                >
                  
                  <MdOutlineMail className='h-5 w-5 shrink-0 text-gray-900' />
                  <span className="flex-1 text-gray-700">contacto@caninosshop.com</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href={'tel:+573163356371'} 
                >
                  <FiPhone  className="h-5 w-5 shrink-0 text-gray-900" />
                  <span className="flex-1 text-gray-700">+573163356371</span>
                </Link>
              </li>
              <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                
                <GoLocation className="h-5 w-5 shrink-0 text-gray-900" />
                <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                  Cali, Valle del cauca, Colombia
                </address>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-gray-900 ">Síguenos en nuestras redes</p>
            <ul className="mt-8 flex justify-center gap-4 text-sm">
                <li>
                    <FaInstagram size={24}/>
                </li>
                <li>
                    <FaFacebook  size={24}/>
                </li>
                <li>
                    <FaTiktok  size={24}/>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left">

          <p className="mt-4 text-sm text-gray-900 sm:order-first sm:mt-0">
             Caninos shop © {new Date().getFullYear()} - Todos los derechos reservados
          </p>

          <div className='flex justify-center text-xs sm:text-sm'>
            Contruido con ❤️ por {' '}
            <Link 
                href={'https://www.jhoniipia.com'}
                className='hover:font-bold mx-1'
                target='_blank'
            >
                Jhoni ipia
            </Link>
        </div>

        </div>
      </div>
    </div>
  </footer>
  )
}
