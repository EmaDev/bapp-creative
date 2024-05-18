import { SwirlArrowIcon } from '@/assets/icons/SwirlArrow'
import React from 'react'

export const Testimonial = () => {
    return (
        <section className="mb-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="flex gap-4">
                    <h5 className="text-3xl lg:text-4xl font-Hallelujah"><span className="text-[#ffc9c9]">Testimonios</span> de<br />Clientes</h5>
                    <SwirlArrowIcon className="h-[74px] lg:h-[102px]" />
                </div>


                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
                        <div className="flex h-full flex-col justify-center space-y-6 md:space-y-8">
                            <img className="mr-auto h-12 w-auto" src="images/clients/microsoft.svg" loading="lazy" alt="microsoft" />

                            <div className="flex items-center gap-3">
                                <img className="h-12 w-12 rounded-full" src="./images/avatars/avatar-2.webp" loading="lazy" alt="user avatar" width="200" height="200" />
                                <div>
                                    <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Andy Doe</h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                        <img className="h-12 w-auto" src="images/clients/airbnb.svg" loading="lazy" alt="airbnb" width="" height="" />
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                        <div className="flex items-center gap-3 text-left">
                            <img className="h-12 w-12 rounded-full" src="./images/avatars/avatar-3.webp" alt="user avatar" width="200" height="200" loading="lazy" />
                            <div>
                                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Janet Doe</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">UX Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                        <img className="h-12 w-auto" src="images/clients/ge.svg" loading="lazy" alt="ge" />
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span className="font-serif">"</span></p>
                        <div className="flex items-center gap-3 text-left">
                            <img className="h-12 w-12 rounded-full" src="./images/avatars/avatar-4.webp" alt="user avatar" width="200" height="200" loading="lazy" />
                            <div>
                                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">John Doe</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}
