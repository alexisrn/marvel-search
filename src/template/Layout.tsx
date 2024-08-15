import { Work_Sans } from 'next/font/google';
import Head from 'next/head'
import React from 'react'

const work = Work_Sans({ subsets: ["latin"] });

interface LayoutProps{
 title: string,
 description: string,
 children: any,
}

export default function Layout(props:LayoutProps) {
  return (
    <>
    <Head>
        <title>{props.title}</title>
        <meta property="og:description" content={props.description} />
    </Head>
    <main className={`w-full h-full flex flex-col justify-center items-center ${work.className}`}>

        {props.children}
    </main>
    </>
  )
}
