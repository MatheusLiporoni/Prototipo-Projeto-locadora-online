'use client'
import Head from "next/head"
import style from "./style.module.scss"
import Footer from "@/components/homeNoauth/footer/footer"
import HeaderHome from "@/components/Home/Header"
import carService, { CarType } from "@/services/CarService/carService"
import { Container } from "reactstrap"
import Card from "@/components/Home/Card"
import { useEffect, useState } from "react"


interface JwtPayload {
    id: number;
    name: string // ou o tipo de dado correspondente ao seu ID
}
const carros = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await carService.getCarsloc();
                console.log('Cars fetched:', res); // Log the response to the console
                setCars(res);
            } catch (error) {
                console.error('Error fetching cars:', error);
                setCars([]); // Set cars to an empty array on error
            }
        };

        fetchCars();
    }, []);
    

    return(
        <>
         <Head>
         <title>Home</title>
            <meta property="og:title" content="Drive Easy" key='Title'/>
            <meta name="description" content="Alugue seu carro de maneira mais rápida e simples!!!" />

        </Head>
        <main>
            <HeaderHome cabeçalho={"Minhas Locações"}/>
            <Container>
                {cars.map((res) =>
                <div className={style.cars}>
                    <Card car={res}/>
                    <br />
                </div>
                )}
            </Container>
            <Footer/>
        </main>
        </>
       
    )
}



export default carros