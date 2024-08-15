
import React, { useEffect } from 'react';
import HeaderCtnHeroes from './HeaderCtnHeroes';
import Card from './Card';

interface ContainerHeroesProps {
    characters?: any,
    data:any,
}
export default function ContainerHeroes(props:ContainerHeroesProps) {


    return (
        <>
            <div className='w-[85%] h-full mb-[100px]'>
                <HeaderCtnHeroes />
                <div className='flex flex-wrap justify-between gap-4 bg-red-500 w-full h-full'>
               <Card data={props.data} />
                </div>
            </div>
        </>
    );
}