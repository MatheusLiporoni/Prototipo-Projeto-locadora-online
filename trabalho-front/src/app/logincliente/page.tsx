"use client"
import Head from "next/head"
import { Button, Container } from "reactstrap"
import style from "./style.module.scss"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import ClienteService from "@/services/ClienteService/clienteService"


const LoginCliente = () => {
    const router = useRouter();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const password = formData.get("password")!.toString() 
        const email = formData.get("email")!.toString()
        const params = {email,password}

        const rescli = await ClienteService.LoginCli(params)
        console.log(rescli)
        if (rescli){
            if(rescli.status === 200){

                router.push("/carros")
            }
        }

         

    }
    


    return(
        <>
            <Head>
            <title> Home</title>
            <meta property="og:title" content="Drive Easy" key='Title'/>
            <meta name="description" content="Alugue seu carro de maneira mais rápida e simples!!!" />
            </Head>
        <main>
            <Container className={style.formcontainer}>
                <h1>Bem vindo de volta</h1>
                <div className={style.form}>
                    
                    <form  className={style.form1} onSubmit={handleSubmit}>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" required></input>
                        <br />
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" required></input>
                        <br />
                        <Button outline color="dark" className={style.button} type="submit">Entrar</Button>
                    </form>
                </div>
            </Container>
            
            
        </main>

        </>
    )

    
}


export default LoginCliente