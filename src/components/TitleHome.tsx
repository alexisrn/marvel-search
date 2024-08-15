import React from 'react'

interface TitleHomeProps{
    title: string,
    text: string,
}

export default function TitleHome(props:TitleHomeProps) {
  return (
    <>
    <div className='w-full flex flex-col items-center mt-[30px] '>
        <h2 className='text-3xl font-bold text-grayPrimary'> {props.title} </h2>
        <p className='text-graySecondary my-2 text-[15px]'>{props.text}</p>
    </div>
    </>
  )
}
