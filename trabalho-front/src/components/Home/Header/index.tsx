"use client"
import Link from "next/link"
import styles from "./styles.module.scss"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react";
interface JwtPayload {
    id: number;
    name: string // ou o tipo de dado correspondente ao seu ID
}

interface props{
    cabeçalho: string

}

const getUserIdFromToken = (token: string): any => {
    try {
        const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
        return decoded
    } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        console.log("Não pegou o token")
        return 0
    }
}
const HeaderHome = ({cabeçalho}: props) => {
    const [userId, setUserId] = useState(4);
    const [usename, setname] = useState("")

    useEffect(() => {
        const token = sessionStorage.getItem("key"); 
        if (token) {
            const decoded = getUserIdFromToken(token);
            setUserId(decoded.id);
            setname(decoded.name)
        }
    }, []);

    return (
        <div className={styles.header}>
            <Link href={'/'} className={styles.link}><h2 className={styles.inicio}>Início</h2></Link>
            <Link href={`/CadastrarCarro/${userId}`} className={styles.link}>
                <h2>{cabeçalho}</h2>
            </Link>
            <h6>Seja bem vindo {usename}</h6>
        </div>
    );
}

export default HeaderHome;
