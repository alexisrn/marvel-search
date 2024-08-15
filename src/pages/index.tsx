// pages/index.tsx
import React from "react";
import { GetStaticProps } from "next";

import { getMarvelCharacters } from "@/services/api";

import Layout from "@/template/Layout";
import Header from "@/template/Header";
import TitleHome from "@/components/TitleHome";
import HeaderCtnHeroes from "@/components/HeaderCtnHeroes";
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
  return (
    <>
      <Layout title="Home - Marvel Search Heroes" description="">
        <Header />

        <TitleHome
          title="EXPLORE O UNIVERSO"
          text="Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!"
        />
        <Input placeholder="Procure por heróis" />
        <ContainerHeroes characters={characters} />
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const characters = await getMarvelCharacters();
  return {
    props: {
      characters,
    },
    revalidate: 86400, // Revalidar a cada 24 horas
  };
};

export default CharactersPage;

// return (
//     <>
//         <Layout title="Home - Marvel Search Heroes" description="">
//             <Header />

//             <TitleHome
//                 title="EXPLORE O UNIVERSO"
//                 text="Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!"
//             />
//             <Input placeholder="Procure por heróis" />

//             <Footer />
//         </Layout>
//     </>

// )
