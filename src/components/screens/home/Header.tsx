import { Divider } from '@/components/ui/Divider'
import React from 'react'

export const Header = () => {
    return (
        <section className='w-full min-h-[100vh] relative'>
            <img alt="" loading="lazy" width="1728" height="894" decoding="async" data-nimg="1" className="absolute" src="https://jane-next-obfuscated-preview.vercel.app/_next/static/media/home-hero-gradient.ed3d81f3.svg" />

            <div className='mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0'>
                <div className='relative ml-auto pt-32 md:pt-40 xl:pt-36'>
                    <div className="gap-12 md:flex md:items-center">
                        <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
                            <h1 className="text-5xl font-black dark:text-white md:text-6xl xl:text-7xl">Hola, somos Bapp</h1>
                            <div className="">
                                <p className="mt-8 text-lg text-gray-700 dark:text-gray-100">Odio incidunt nam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                                <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                                    <a href="/register" className="before:bg-primary astro-Z4ZYBUMP"><span className="text-white astro-Z4ZYBUMP">
                                        Get started
                                    </span></a>


                                    <a href="#solution" className="before:border before:border-transparent before:bg-primary/10 dark:before:border-gray-700 dark:before:bg-gray-800 astro-Z4ZYBUMP"><span className="text-primary dark:text-white astro-Z4ZYBUMP">
                                        Learn more
                                    </span></a>


                                </div>
                            </div>
                        </div>
                        <div className="relative md:mt-0 md:w-2/5 lg:w-3/5">
                            <div className="-ml-6 md:-mr-72 lg:mr-0">
                                <img className="h-full object-cover object-left dark:hidden" src="https://astrolus-premium.netlify.app/images/hero-dark.webp" alt="app screenshot" width="1628" height="1233" />
                                <img className="hidden h-full object-cover object-left dark:block" src="https://astrolus-premium.netlify.app/images/hero-dark.webpp" alt="app screenshot" width="1628" height="1233" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
                        <span className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">EMPRESAS QUE CONFIAN EN NOSOTROS</span>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
                            <img className="h-8 w-auto lg:h-14" src="https://astrolus-premium.netlify.app/images/clients/airbnb.svg" loading="lazy" alt="airbnb" width="100" height="" />
                            <img className="h-6 w-auto lg:h-10" src="https://astrolus-premium.netlify.app/images/clients/google.svg" loading="lazy" alt="bissell" width="100" height="" />
                            <img className="h-6 w-auto lg:h-10" src="https://astrolus-premium.netlify.app/images/clients/ge.svg" loading="lazy" alt="ge" width="100" height="100" />
                            <img className="h-6 w-auto lg:h-10" src="https://astrolus-premium.netlify.app/images/clients/netflix.svg" loading="lazy" alt="lilly" width="100" height="100" />
                            <img className="h-8 w-auto lg:h-14" src="https://astrolus-premium.netlify.app/images/clients/microsoft.svg" loading="lazy" alt="microsoft" width="100" height="" />
                        </div>
                    </div>
                </div>
            </div>
            <Divider className='mt-8'/>
        </section>
    )
}
