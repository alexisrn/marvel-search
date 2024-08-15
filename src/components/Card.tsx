import React from 'react'
import heart from '../../public/assets/icones/heart/Path Copy 2.png'
import Image from 'next/image'

interface CardProps{
 imagem?: any,

}
export default function Card(props:CardProps) {
  return (
    <>
    <div className='w-[22%] h-[280px]'>
        <div className='h-[75%] bg-red-200  border-primary border-b-4'>
            <img className='w-full h-full' src={props.imagem} />
        </div>
        <div className='h-[25%] flex items-center justify-between font-bold text-grayPrimary'>
        Spider-Man
        <p className='cursor-pointer w-[18px]'>
            <Image src={heart} alt="" />
        </p>
        </div>
        
    </div>
    </>
  )
}
