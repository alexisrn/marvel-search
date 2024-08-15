import { Inter, Work_Sans } from "next/font/google";
import Layout from "@/template/Layout";
import Header from "@/template/Header";
import TitleHome from "@/components/TitleHome";
import Input from "@/components/Input";
import ContainerHeroes from "@/components/ContainerHeroes";
import Footer from "@/template/Footer";
import { useEffect, useState } from "react";
import api from "@/services/api";
import axios from 'axios'
import Card from "@/components/Card";

interface ResponseProps {
    id: string,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string,
    }
}



export default function Home() {
    const [url,setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d738c79c76b55b39b1dc8fd16f5116a6&hash=58a9b15e4a8bfc59c798a645d2198bf0")
    const [item, setItem] = useState();

    useEffect(() => {
      const fetch = async () => {
        const res = await axios.get(url)
        setItem(res.data.data.results)
      }
      fetch();
    }, [url]);

    return (
        <>
            <Layout title="Home - Marvel Search Heroes" description="">
                <Header />
                
                
                <TitleHome
                    title="EXPLORE O UNIVERSO"
                    text="Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!"
                />
                <Input placeholder="Procure por heróis" />
                
                {(!item)?<p>Não encontrado</p> : <ContainerHeroes data={item}  />}
                <Footer />
            </Layout>
        </>
   
    )}