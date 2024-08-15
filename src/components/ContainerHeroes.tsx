// components/CharacterGrid.tsx
import React from 'react';
import CardHero from './Card';
import HeaderCtnHeroes from './HeaderCtnHeroes';

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharacterGridProps {
  characters: Character[];
}

const Heroes: React.FC<CharacterGridProps> = ({ characters }) => {
  return (
    <div className="flex flex-wrap justify-between gap-4 w-full h-full w-[90%]">
        <HeaderCtnHeroes />
      {characters.map((character) => (
        <>
        <CardHero imagem={`${character.thumbnail.path}.${character.thumbnail.extension}`} name={character.name} />
        </>
      ))}
    </div>
  );
};

export default Heroes;



  {/* <div className='w-[85%] h-full mb-[100px]'>
                <HeaderCtnHeroes />
                <div className='flex flex-wrap justify-between gap-4 w-full h-full'>
               <Card data={props.data} />
                </div>
            </div> */}