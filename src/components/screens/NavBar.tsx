"use client"

import React, { useState } from 'react'

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent astro-ESKEKC2M">
            <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
                <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4 astro-ESKEKC2M">
                    <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max astro-ESKEKC2M">
                        <a href="/#home" aria-label="logo" className="flex items-center space-x-2 astro-ESKEKC2M">
                            <div aria-hidden="true" className="flex space-x-1 astro-ESKEKC2M">
                                <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white astro-ESKEKC2M"></div>
                                <div className="h-6 w-2 bg-primary astro-ESKEKC2M"></div>
                            </div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white astro-ESKEKC2M">Bapp</span>
                        </a>

                        <div className="relative flex max-h-10 items-center lg:hidden astro-ESKEKC2M">
                            <button onClick={() => setIsOpen(!isOpen)} aria-label="humburger" id="hamburger" className={`relative -mr-6 p-6 astro-ESKEKC2M ${isOpen && "toggled"}`}>
                                <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 astro-ESKEKC2M"></div>
                                <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 astro-ESKEKC2M"></div>
                            </button>
                        </div>
                    </div>
                    <div id="navLayer" aria-hidden="true" 
                    className={`fixed inset-0 z-10 h-screen w-screen bg-white/70 backdrop-blur-2xl
                     transition duration-500 dark:bg-gray-900/70 lg:hidden astro-ESKEKC2M ${!isOpen ? "origin-top scale-y-0" : "origin-bottom scale-y-100"}`}></div>
                    
                    <div className={`z-20 p-2 border shadow w-full rounded-xl transition duration-500 origin-top-right 
                    ${!isOpen ? "scale-y-0" : "scale-y-100"} lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100
                    lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:justify-end`}>
                        <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                            <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                                <li className="astro-ESKEKC2M">
                                    <a href="/#features" className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M">
                                        <span className="astro-ESKEKC2M">Servicios</span>
                                    </a>
                                </li><li className="astro-ESKEKC2M">
                                    <a href="/#solution" className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M">
                                        <span className="astro-ESKEKC2M">Casos de exito</span>
                                    </a>
                                </li><li className="astro-ESKEKC2M">
                                    <a href="/#reviews" className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M">
                                        <span className="astro-ESKEKC2M">Nosotros</span>
                                    </a>
                                </li><li className="astro-ESKEKC2M">
                                    <a href="/#pricing" className="hover:text-primary block transition dark:hover:text-white md:px-4 astro-ESKEKC2M">
                                        <span className="astro-ESKEKC2M">Testimonios</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12 lg:mt-0">
                        <a href="/register" className="relative flex h-9 w-full items-center justify-center px-4 
                        before:absolute before:inset-0 before:rounded-full before:bg-accent before:transition
                         before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                            <span className="relative text-sm font-semibold text-white">Contactar</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
