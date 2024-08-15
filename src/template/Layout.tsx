import Head from 'next/head'
import React from 'react'

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
    <main>
        {props.children}
    </main>
    </>
  )
}
