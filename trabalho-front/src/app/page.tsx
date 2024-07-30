import Head from  "next/head";
import styles from "../app/styles/HomeNoaAuth.module.scss"
import Header from "@/components/homeNoauth/header";
import Main from "@/components/homeNoauth/main";
import Footer from "@/components/homeNoauth/footer/footer";

const HomeNoAuth = () => {
  return (
    <>
     <Head>
        <title> Home</title>
        <meta property="og:title" content="Drive Easy" key='Title'/>
        <meta name="description" content="Alugue seu carro de maneira mais rápida e simples!!!" />
     </Head>
     <main>
        <Header/>
        <Main/>
        <Footer/>
     </main>
    </>

  )
}


export default HomeNoAuth