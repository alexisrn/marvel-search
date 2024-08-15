import React from 'react'
import logo from '../../public/assets/logo/Group.png'
import Image from 'next/image'


export default function Header() {
  return (
    <>
    <header className="">
    <Image src={logo} alt="Logo"/>
   </header>
    </>
  )
}
