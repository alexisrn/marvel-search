import React from 'react'
import HeaderCtnHeroes from './HeaderCtnHeroes'
import Card from './Card'

export default function ContainerHeroes() {
  return (
    <>
    <div className='w-[85%] h-ful mb-[100px]'>
    <HeaderCtnHeroes />

    <div className='flex flex-wrap justify-between gap-4'>
        <Card />
    
    </div>
    </div>
    </>
  )
}
