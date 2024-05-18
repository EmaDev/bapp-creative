"use client"
import React from 'react';
import { motion } from "framer-motion";
import { TextGenerateEffect } from '@/components/ui/aceternity/TextGenerateEffect';
import { MdArrowForward } from "react-icons/md";
import { WobbleCard } from '@/components/ui/aceternity/WobbleCard';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';

export const Header2 = () => {
    return (
        <header className='w-full m-auto py-24 xl:py-4 lg:h-[100vh] bg-accent overflow-hidden' style={{ clipPath: "polygon(0 0, 5760px 0, 5760px calc(100% - 352px), 0 100%)" }}>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className='px-6 xl:px-12 3xl:px-0 3xl:w-4/5 m-auto h-full items-center justify-center lg:grid grid-cols-2'
            >

                <div className='w-full m-auto'>
                    <h2 className="text-2xl xl:text-6xl font-[600] font-Poppins text-white"><span className='text-4xl xl:text-8xl'>Hola!</span>
                        <br /> Somos Bapp Creative
                    </h2>
                    <TextGenerateEffect words={"Un estudio de Marketing Digital orientado a Redes Sociales. Ofrecemos servicios de Branding, Diseño Gráfico, Community Management y Creación de Contenido"} />

                    <div className='mt-6 lg:mt-12 flex gap-2 lg:gap-4'>
                        <Button text='Concocenos' icon={<MdArrowForward />} />
                        <Button text='Nuestros servicios' type='Secondary' />
                    </div>

                    <Divider className='lg:hidden'/>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full relative'>
                    <div className='absolute w-full h-full top-4 right-4 border border-2 border-[rgba(255,255,255,0.3)] rounded-xl'></div>
                    <WobbleCard
                        containerClassName="col-span-3 lg:col-span-2 bg-pink-800"
                        className="xl:py-20"
                    >
                        <div className="max-w-xs">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            ESTRATEGIA DE MARKETING
                            </h2>
                            <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Consigue llegar a tus objetivos de manera eficaz.
                            </p>
                        </div>
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-3 lg:col-span-1">
                        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        DISEÑO WEB
                        </h2>
                        <p className="max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Creamos la web de tu marca con el diseño que hará que tus visitas se disparen
                        </p>
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-3 w-full">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        MARKETING DIGITAL
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Gestionamos y promovemos tu marca en medios digitales
                        </p>
                    </WobbleCard>

                </div>
            </motion.div>
        </header>
    )
}