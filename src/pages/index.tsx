// pages/index.tsx
import React, { useState } from "react";
import { GetStaticProps } from "next";

import { getMarvelCharacters } from "@/services/api";

import Layout from "@/template/Layout";
import Header from "@/template/Header";
import TitleHome from "@/components/TitleHome";
import Footer from "@/template/Footer";
import Input from "@/components/Input";
import ContainerHeroes from "@/components/ContainerHeroes";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharactersPageProps {
  characters: Character[];
}

const CharactersPage: React.FC<CharactersPageProps> = ({ characters }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Função para lidar com mudanças no input de busca
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filtrando os personagens com base no nome
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout title="Home - Marvel Search Heroes" description="">
      <Header />
      <TitleHome
        title="EXPLORE O UNIVERSO"
        text="Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!"
      />
      <Input
        placeholder="Procure por heróis"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ContainerHeroes characters={filteredCharacters} />
      <Footer />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const characters = await getMarvelCharacters();
  return {
    props: {
      characters,
    },
    revalidate: 86400,
  };
};

export default CharactersPage;
