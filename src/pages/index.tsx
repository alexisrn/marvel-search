import Image from "next/image";
import { Inter, Work_Sans } from "next/font/google";
import Layout from "@/template/Layout";
import logo from '../../public/assets/logo/Group.png'
import Header from "@/template/Header";
import TitleHome from "@/components/TitleHome";
import Input from "@/components/Input";
import ContainerHeroes from "@/components/ContainerHeroes";
import Footer from "@/template/Footer";



export default function Home() {
  return (
   <>
   <Layout title="Home - Marvel Search Heros" description="">
    <Header />
    <TitleHome title="EXPLORE O UNIVERSO" text="Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!" />
    <Input placeholder="Procure por heróis" />
    <ContainerHeroes />
    <Footer />
   </Layout>
   </>
  );
}
