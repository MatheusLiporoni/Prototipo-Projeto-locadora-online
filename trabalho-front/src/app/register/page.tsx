"use client";
import authService from "../../services/locService/locService";
import styles from "./register.module.scss";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Button, Container } from "reactstrap";
import { useRouter } from "next/navigation";
import ToastComponent from "@/components/common/toast";

const Registro = () => {
    const router = useRouter();
    const [toastIsOpen, setToastIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name")!.toString();
        const phone = formData.get("phone")!.toString();
        const email = formData.get("email")!.toString();
        const cnpj_cpf = formData.get("cnpj")!.toString();
        const estado = formData.get("estado")!.toString();
        const cidade = formData.get("cidade")!.toString();
        const endereco = formData.get("endereco")!.toString();
        const password = formData.get("password")!.toString();
        const confirmpassword = formData.get("confirmpassword")!.toString();

        if (password != confirmpassword) {
            setToastMessage("Senha e confirmação diferentes");
            setToastIsOpen(true);
            setTimeout(() => {
                setToastIsOpen(false);
            }, 3000);
            return;
        }

        const params = { name, phone, email, cnpj_cpf, estado, cidade,endereco, password };
            const res = await authService.locRegister(params)

                if (res) {
                    router.push("/login?registered=true");  
                } 
    }

    return (
        <>
            <Head>
                <title>Registro</title>
                <meta property="og:title" content="Drive Easy" key="Title" />
                <meta name="description" content="Alugue seu carro de maneira mais rápida e simples!!!" />
            </Head>
            <main className={styles.main}>
                <Container className={styles.formcontainer}>
                    <h1>Registro</h1>
                    <div className={styles.form}>
                        <form onSubmit={handleRegister} className={styles.form1}>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" name="name" id="name" required />
                            <br />
                            <label htmlFor="phone">Telefone:</label>
                            <input type="text" name="phone" id="phone" required />
                            <br />
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required />
                            <br />
                            <label htmlFor="cnpj">CNPJ:</label>
                            <input type="text" name="cnpj" id="cnpj" required />
                            <br />
                            <label htmlFor="estado">Estado:</label>
                            <select id="estado" name="estado" required>
                                <option value="">Selecione um estado</option>
                                <option value="">Selecione um estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                                
                            </select>
                            <br />
                            <label htmlFor="cidade">Cidade:</label>
                            <input type="text" name="cidade" id="cidade" required />
                            <br />
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" name="endereco" id="endereco" required />
                            <br />
                            <label htmlFor="password">Senha:</label>
                            <input type="password" name="password" id="password" required />
                            <br />
                            <label htmlFor="confirmpassword">Confirme sua senha:</label>
                            <input type="password" name="confirmpassword" id="confirmpassword" required />
                            <br />
                            <Button outline color="dark" className={styles.button} type="submit">
                                Criar Conta
                            </Button>
                        </form>
                    </div>
                </Container>
                <ToastComponent color="bg-danger" isOpen={toastIsOpen} message={toastMessage} />
            </main>
        </>
    );
};

export default Registro;
