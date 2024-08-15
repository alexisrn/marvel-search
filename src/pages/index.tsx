import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Layout title="Home - Marvel Search Heros" description="">
    <h1>teste</h1>
    </Layout>
   </>
  );
}
