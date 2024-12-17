'use client'

import { PETS_ALL } from '@/seed/pets'
import { useUiStore } from '@/store'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Search = () => {
    const isSearchOpen = useUiStore((state) => state.isSearchOpen)
    const closeSearch = useUiStore((state) => state.closeSearch)

    useEffect(() => {
        if (isSearchOpen) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
          setQuery('');
        }
      }, [isSearchOpen]);

      const [query, setQuery] = useState('');

   


    function extractRoutesFromPets(pets) {
        return pets.map(pet => ({
          path: `/pets/${pet.id}`,
          name: pet.breed,
          id: pet.id
        }));
      }


    // Definir las rutas manualmente
    const routes = [
        { path: '/', name: 'Inicio' },
        { path: '/size/mini', name: 'mini' },
        { path: '/size/small', name: 'pequeño' },
        { path: '/size/medium', name: 'mediano' },
        { path: '/size/big', name: 'grande' },
        { path: '/cart', name: 'carrito' },
        ...extractRoutesFromPets(PETS_ALL)
    ];

    const filteredRoutes = routes.filter((route) =>
        route.name.toLowerCase().includes(query.toLowerCase()) ||
        route.path.toLowerCase().includes(query.toLowerCase())
    );


  return (
    <>
    {
        isSearchOpen && 
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24"
      id="headlessui-dialog-:r169:"
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      data-headlessui-state="open"
      data-open=""
    >
      <div
        className="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100"
        onClick={closeSearch}
      />
      <div
        className="relative w-full max-w-lg transform px-4 transition-all opacity-100 scale-100"
      >
        <div
          className="overflow-hidden rounded-lg bg-white shadow-md"
          id="headlessui-dialog-panel-:r16a:"
          data-headlessui-state="open"
          data-open=""
        >
          <div className="relative">
            <input
              className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6"
              placeholder="Encuentra cualquier cosa.."
              aria-label="Search components"
              id="headlessui-combobox-input-:r16c:"
              role="combobox"
              type="text"
              aria-expanded="false"
              aria-autocomplete="list"
              data-headlessui-state="autofocus"
              data-autofocus=""
              defaultValue=""
              style={{ caretColor: "rgb(107, 114, 128)" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              className="pointer-events-none absolute right-4 top-4 h-6 w-6 fill-black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z" />
            </svg>
          </div>
          {
            filteredRoutes.length > 0 && query && (
            <div className='max-h-[18.375rem] divide-y divide-slate-200 overflow-y-auto rounded-b-lg border-t border-slate-200 text-sm leading-6'>
                {

                    filteredRoutes.map((route , index)=>(
                        <Link
                            href={route.path}
                            key={index}
                            onClick={closeSearch}
                        >
                        <div
                        className="flex items-center justify-between p-4 hover:bg-slate-50 group"
                        id="headlessui-combobox-option-:r1gv:"
                        tabIndex={-1}
                        data-headlessui-state=""
                        key={index}
                        >
                            <span className="whitespace-nowrap font-semibold text-slate-900 group-hover:text-[var(--primary-color-400)] capitalize  ">
                                {route.name}
                            </span>
                            <span className="ml-4 text-right text-xs text-slate-600">
                                {route.path}
                            </span>
                        </div>
                        </Link>
                    ))
                    
                }
            </div>)
          }
        </div>
      </div>
    </div>
    }
  </>
  )
}