import React from 'react'
import shape from '../../public/assets/busca/Shape/Rectangle@3x.png'
import Image from 'next/image'
import lupa from '../../public/assets/busca/Lupa/Shape.png'

interface InputProps{
    placeholder: string,
}

export default function Input(props:InputProps) {
  return (
    <>
    <div className='bg-primary w-[65%] my-10 rounded-full h-[60px] flex items-center' style={{
        backgroundImage: `url(${shape.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Image src={lupa} alt="Lupa" className='cursor-pointer mx-6'/>
        <input type="text" className='bg-transparent outline-none placeholder-[#ff1410d3] text-[#ff1410d3]' placeholder={props.placeholder} />
    </div>
    </>
  )
}
