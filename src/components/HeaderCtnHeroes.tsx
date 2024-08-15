import React from 'react'
import hero from '../../public/assets/icones/heroi/noun_Superhero_2227044.png'
import Image from 'next/image'
import toggleOff from '../../public/assets/toggle/Group 2@1,5x.png'
import heart from '../../public/assets/icones/heart/Path Copy 7.svg'

export default function HeaderCtnHeroes() {
  return (
    <div className='w-full h-full flex justify-between my-[50px]'>
        <p className='text-grayThird'>Encontrados 20 heróis</p>

        <div  className='flex items-center gap-8'>
        <span className='flex items-center gap-4 text-[14px] text-[#ff1410d3] cursor-pointer'>
            <Image src={hero} alt="Icone Heroi" /> 
        Ordenar por nome - A/Z
        <Image src={toggleOff} alt="toggle" className='w-[60px]' />
        </span>

        <span className='flex items-center gap-4 text-[14px] text-[#ff1410d3] cursor-pointer'>
            <Image src={heart} alt="Icone Heroi" /> 
        Somente favoritos
        </span>
        
        </div>
    </div>
  )
}
