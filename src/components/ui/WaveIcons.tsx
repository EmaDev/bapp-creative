import React from 'react';
import style from "./styles/WaveIcons.module.css";
import { ArrowIcon } from '@/assets/icons/Arrow';

export const WaveIcons = () => {

    const contruirIconos = () => {
        const items = [1, 2, 3, 5, 6, 7, 5, 9, 8, 5, 6, 8];
        return items.map((item, i) => {

            const text = "item ";
            return <div key={i} style={{ marginTop: `${Math.sin(i) * 30}px` }} className={style.circulo + " transition duration-300 transform hover:scale-110 cursor-pointer"}>{text + item}</div>
        });
    }
    return (
        <div className='relative mt-12 mb-24'>
            <div className='max-w-[100vw] overflow-auto px-6'>
                <section className={`${style.lista}`} >
                    {contruirIconos()}
                </section>
            </div>
            <div className='absolute left-12 md:left-[60%] -bottom-[80%] text-black flex items-center justify-center'>
                <ArrowIcon className='rotate-45 h-[48px] md:h-[70px]' />
                <span className='font-Hallelujah text-xl md:text-2xl'>Tecnologias que<br />utilizamos</span>
            </div>
        </div>
    )
}