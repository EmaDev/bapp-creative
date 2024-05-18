import { Divider } from '@/components/ui/Divider'
import React from 'react'

export const Team = () => {
    return (
        <section className='py-6 md:py-12 bg-red'>
            <Divider />
            <p className='text-center text-md md:text-xl mb-2'>Conoce al equipo Bapp</p>
            <p className='text-center text-md md:text-xl mx-4'>Un equipo <b>experimentado y multidisciplinar</b>, una máquina de fabricar ideas para convertir tu marca en toda una experiencia.</p>
            <h3 className="text-center text-3xl md:text-5xl font-bold my-6">Equipo</h3>

            <div className='m-auto max-w-[1200px] lg:flex justify-center gap-12'>
                <div className='text-center mb-4 lg:mb-0'>
                    <div className='w-64 m-auto lg:w-96 bg-gray-100 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl'>
                        <img
                            src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            className='grayscale hover:grayscale-0 rounded-xl w-full object-contain'
                        />
                    </div>
                    <p className='mt-2 text-sm lg:text-xl'><b>CEO</b></p>
                    <p className='font-[600] tex-xl lg:text-2xl'>Fatima Citerna</p>
                </div>
                
                <div className='text-center mb-4 lg:mb-0'>
                    <div className='w-64 m-auto lg:w-96 bg-gray-100 rounded-xl transition duration-300 transform hover:scale-105 shadow-xl'>
                        <img
                            src="https://i0.wp.com/weremote.net/wp-content/uploads/2022/08/mujer-sonriente-apunta-arriba.jpg?ssl=1"
                            className='grayscale hover:grayscale-0 rounded-xl w-full object-contain'
                        />
                    </div>
                    <p className='mt-2'><b>CEO</b></p>
                    <p className='font-[600] text-2xl'>Fatima Citerna</p>
                </div>
            </div>
           
        </section>
    )
}
