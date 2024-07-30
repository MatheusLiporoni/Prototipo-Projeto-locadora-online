"use client";
import Link from "next/link"
import styles from "./styles.module.scss"
import { Container,Row,Col,Button } from "reactstrap"
import "aos/dist/aos.css"
import AOS from "aos";
import { useEffect } from "react";
const Main = () => { 
    useEffect(() => {
        AOS.init()
    }, [])
    
    
    return(
        <div className={styles.main}>
            <Row className={styles.row}>
                <Col className={styles.col1} data-aos="zoom-in-right" data-aos-duration="2000">
                    <img src="icone.jpeg" alt="" />
                </Col>
                <Col className={styles.col2}>
                    <h2 data-aos="flip-left" data-aos-duration="2000">Explore nossa frota e reserve online sem complicações!</h2>
                   <Row className={styles.row2}>
                        <Col className={styles.col3} data-aos="fade-right" data-aos-duration="2000">
                            <p>Você é uma locadora?</p>
                            <p className={styles.prop}>Coloque seus veículos imediatamente</p>
                            <p>Cadastre-se Agora !!!</p>
                            <Link href="/register">
                                <Button outline color="dark" className={styles.button}>Cadastre-se</Button>
                            </Link>
                            
                        </Col>
                        <Col className={styles.col4} data-aos="fade-left" data-aos-duration="2000">
                            <p>Esta procurando um Automóvel?</p>
                            <p className={styles.prop}>Alugue-o rapído e fácil</p>
                            <p>Crie sua Conta !!!</p>
                            <Link href="/cadastrarCliente">
                                <Button outline color="dark" className={styles.button}>Criar Conta</Button>
                            </Link>     
                        </Col>
                   </Row>        
                </Col>
            </Row>
        </div>
    )


}


export default Main