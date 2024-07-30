'use client'
import { Button, Container } from "reactstrap";
import styles from "./style.module.scss"
import  Head  from "next/head";
import { FormEvent, useEffect } from "react";
import carService from "@/services/CarService/carService";;
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    id: number;
    name: string // ou o tipo de dado correspondente ao seu ID
}
;



const CadastrarCarro = () =>{
    const router = useRouter()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault() 
        const formData = new FormData(event.currentTarget)
        const preco = formData.get("preco")!.toString() 
        const modelo = formData.get("modelo")!.toString()
        const marca = formData.get("marca")!.toString()
        const grupo = formData.get("grupo")!.toString();
        const token = sessionStorage.getItem("key");
      
        
        if (token){
            const decoded: JwtPayload = jwtDecode<JwtPayload>(token)
            const locid = decoded.id
            const params = {locid , preco ,modelo,marca, grupo}
            const res = await carService.postCar(params)

           if(res){
                alert("Carro criado")
                router.push("/home")
           }

        }

            
    }


    
    return(
        <>
            <Head>
                <title>Registro</title>
                <meta property="og:title" content="Drive Easy" key="Title" />
                <meta name="description" content="Alugue seu carro de maneira mais rápida e simples!!!" />
            </Head>
            <main className={styles.main}>
                <Container className={styles.formcontainer}>
                    <h1>Cadastre o Veículo</h1>
                    <div className={styles.form}>
                        <form className={styles.form1} method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <label htmlFor="preco">Valor Mensal:</label>
                        <input type="number" name="preco" id="preco" required  />
                        <br />
                        <label htmlFor="modelo">Modelo:</label>
                        <input type="text" name="modelo" id="modelo" required />
                        <br />
                        <label htmlFor="marca">Marca:</label>
                        <select name="marca" id="marca" required>
                            <option value="">Selecione a marca</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Ford">Ford</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Honda">Honda</option>
                            <option value="Fiat">Fiat</option>
                            <option value="Mitsubichi">Mitsubichi</option>
                            <option value="Pegeot">Pegeot</option>
                            <option value="Renault">Renault</option>

                        </select>
                        <br />
                        <label htmlFor="grupo">Grupo:</label>
                        <select name="grupo" id="grupo" required >
                            <option value="">Selecione o grupo</option>
                            <option value="SUV">SUV</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Pickup">Pickup</option>

                        </select>
                        <br />
                        <label htmlFor="fileinput" className={styles.fileLabel}>Clique aqui para anexar Imagem</label>
                        <input type="file" id="fileinput" name='fileinput'accept="image/" className={styles.fileInput}/>            
                        <br />
                    
                            <Button outline color="dark" className={styles.button} type="submit">
                                Criar Carro
                            </Button>
                        </form>
                    </div>
                </Container>
               
            </main>
        </>
    );
};
    


export default CadastrarCarro