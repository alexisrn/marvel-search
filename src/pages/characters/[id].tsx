// pages/characters/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getMarvelCharacterById, getMarvelCharacters } from '@/services/api';

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharacterDetailsPageProps {
  character: Character;
}

const CharacterDetailsPage: React.FC<CharacterDetailsPageProps> = ({ character }) => {
  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-full h-auto mb-4"
      />
      <p className="text-gray-700">{character.description || 'No description available.'}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const characters = await getMarvelCharacters();
  const paths = characters.map((character: Character) => ({
    params: { id: character.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const character = await getMarvelCharacterById(id as string);

  return {
    props: {
      character,
    },
    revalidate: 86400, // Revalidar a cada 24 horas
  };
};

export default CharacterDetailsPage;
