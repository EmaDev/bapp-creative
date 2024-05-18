import React from 'react'

interface Props {
  isLast?: boolean;
}

export const VinetItem = ({isLast = false}:Props) => {
  return (
    <div className='w-[90%] grid gap-4 mt-6 mx-2 m-auto' style={{ gridTemplateColumns: "10% 90%" }}>

      <div className='h-full relative m-auto'>
        {!isLast && <div className='w-[1px] h-full border-accent border-r-4 border-dotted absolute top-0 left-0 right-0 m-auto z-0'></div>}
        <div className='w-6 h-6 lg:w-12 lg:h-12 rounded-full bg-accent z-10 transition-all duration-500 hover:scale-110'></div>
      </div>
      <div>
        <h2 className="font-[600] text-md md:text-xl">Community Management</h2>
        <p className="text-sm md:text-md mt-2 mx-4 max-w-96">verjv fire  irfnrie firfnire fernfier rireif erifm rifiremf remfiremf rfmerifmre fiermfirmf fernifmeif fremfife romfier f ifmerifmrei</p>
      </div>
    </div>

  )
}
