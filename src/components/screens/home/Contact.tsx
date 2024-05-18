import React from 'react';
import { RiWhatsappFill } from "react-icons/ri";

export const Contact = () => {
    return (
        <section className="relative before:absolute before:inset-0 before:h-px before:w-96 before:bg-gradient-to-r before:from-yellow-300 before:via-pink-400 before:to-transparent after:absolute after:inset-0 after:ml-auto after:mt-auto after:h-px after:w-96 after:bg-gradient-to-l after:from-yellow-300 after:via-pink-400 after:to-transparent">
            <div className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darker">
                <div className="relative mx-auto px-4 md:max-w-full md:px-12 lg:w-4/5 xl:px-0">
                    <div className="justify-between md:flex">
                        <div className="h-max py-4 lg:py-16 md:w-6/12 xl:w-5/12">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">
                                    Contactanos
                                </h2>
                                <p className="mb-8 mt-6 text-gray-600 dark:text-gray-300">Praesentium, atque exercitationem dolorum, iste libero eaque animi illum magnam velit iusto quidem omnis quas! Ad expedita quaerat.</p>
                                <form action="" className="mt-12">
                                    <div className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md dark:border-white/10 dark:bg-dark md:p-2 lg:pr-3">
                                        <div className="py-3 pl-4 lg:pl-5">
                                            <RiWhatsappFill size={"1.8rem"} color='green' />
                                        </div>
                                        <input placeholder="Escribe un mensaje" className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 dark:placeholder-white" type="email" />
                                        <div className="md:pr-1.5 lg:pr-0">
                                            <a href="/register" className="relative flex h-9 w-full items-center justify-center px-4 
                                                before:absolute before:inset-0 before:rounded-full before:bg-accent before:transition
                                                before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                                <span className="relative text-sm font-semibold text-white">Enviar</span>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="md:w-[42%] lg:w-1/2 my-2 mb-6 lg:mb-0 lg:mt-8 lg:p-6">
                            <form className="h-full relative rounded-xl border border-primary/20 bg-white p-2 px-4 shadow-md">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Contactanos por Email</h4>
                                <div className='flex flex-col mb-2'>
                                    <label className='mb-2 font-semibold'>Nombre</label>
                                    <input className='border border-primary/20 bg-white p-2 px-4 shadow-md rounded-xl' />
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <label className='mb-2 font-semibold'>Email</label>
                                    <input className='border border-primary/20 bg-white p-2 px-4 shadow-md rounded-xl' />
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <label className='mb-2 font-semibold'>Mensaje</label>
                                    <textarea className='min-h-24 border border-primary/20 bg-white p-2 px-4 shadow-md rounded-xl' />
                                </div>
                                <div className='flex justify-end'>
                                    <a href="/register" className="mt-4 relative flex h-9 w-full items-center justify-center px-4 
                                            before:absolute before:inset-0 before:rounded-full before:bg-accent before:transition
                                            before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                        <span className="relative text-sm font-semibold text-white">Enviar</span>
                                    </a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
