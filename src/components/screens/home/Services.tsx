import { StarIcon } from '@/assets/icons/Star'
import { UnderlinedIcon } from '@/assets/icons/Underlined'
import { Divider } from '@/components/ui/Divider'
import { VinetItem } from '@/components/ui/VinetItem'
import React from 'react'

export const Services = () => {
    return (
        <aside className='w-full min-h-[90vh] relative flex flex-col m-auto'>
            <div aria-hidden="true" className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80">
                <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700" ></div>
                <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>

            <div className="relative w-full z-20 px-2 lg:w-4/5 py-12 m-auto lg:grid grid-cols-2 justify-center items-center">
                <div className="mb-10 font-Poppins">
                    {/*Titulo*/}
                    <h2 className="text-3xl md:text-5xl font-bold">Nuestros
                        <span className="text-accent relative"> principales
                            <div className="absolute -right-0 m-auto text-xl">
                                <UnderlinedIcon className="w-full" />
                            </div>
                        </span>
                    </h2>
                    <h2 className="text-3xl md:text-5xl font-[700]">servicios</h2>

                    <section className="mt-12 w-full">
                        <VinetItem />
                        <VinetItem />
                        <VinetItem isLast={true} />
                    </section>
                </div>

                <div className="cursor-pointer w-4/5 lg:w-full m-auto h-48 md:h-96 bg-[#e1e1e1] bg-cover bg-center bg-no-repeat relative shadow-xl transition duration-300 transform hover:scale-105 shadow-xl" style={{ backgroundImage: "url(https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexperience-image.c864d869.jpg&w=1200&q=75)" }}>


                    <div className="absolute shadow-xl left-0 right-0 -bottom-10 m-auto bg-accent w-4/5 h-24 
							rounded-lg flex justify-center gap-8 py-4 px-6 transition duration-300 transform hover:scale-110">
                        <div className="font-bold flex flex-col justify-center items-center text-white">
                            <span className="text-3xl lg:text-4xl">5</span>
                            <h4 className="text-sm lg:text-lg text-center">Años de experiencia</h4>
                        </div>
                        <div className="font-bold flex flex-col justify-center items-center text-white">
                            <span className="text-3xl lg:text-4xl">150</span>
                            <h4 className="text-sm lg:text-lg text-center">Proyectos realizados</h4>
                        </div>
                    </div>

                    <div className="absolute -right-4 -top-4 md:-right-8 md:-top-8">
                        <StarIcon classname='h-12 w-12 md:h-24 md:w-24'/>
                    </div>
                </div>
            </div>
            <Divider/>
        </aside >
    )
}
