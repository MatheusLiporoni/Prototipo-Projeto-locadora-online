"use client"
import authService from "../../services/locService/locService";
import styles from "./style.module.scss"
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Button, Container } from "reactstrap";
import ToastComponent from "@/components/common/toast";
import { useRouter } from "next/navigation";
import ClienteService from "@/services/ClienteService/clienteService";


const Registro = () => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("nome")!.toString();
    const idade = formData.get("idade")!.toString();
    const dataNascimento = formData.get("dataNascimento")!.toString();
    const cpf = formData.get("cpf")!.toString();
    const phone = formData.get("phone")!.toString();
    const email = formData.get("email")!.toString()
    const password = formData.get("password")!.toString();
    const confirmpassword = formData.get("confirmpassword")!.toString();
    // Faça a validação dos dados, por exemplo, se a senha e a confirmação coincidem
    if (password !== confirmpassword) {
      setToastMessage("Senha e confirmação diferentes");
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 3000);
      return;
    }
    const params = {name,idade, dataNascimento, cpf,phone ,email ,password}
    const res = await ClienteService.clientRegister(params)

    if (res) {
      router.push("/login");
    }
  };

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
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" id="nome" required />
              <br />
              <label htmlFor="idade">Idade:</label>
              <input type="number" name="idade" id="idade" required />
              <br />
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input type="date" name="dataNascimento" id="dataNascimento" required />
              <br />
              <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required />
                <br />
              <label htmlFor="password">Senha:</label>
              <input type="password" name="password" id="password" required />
              <br />
              <label htmlFor="confirmpassword">Confirme sua senha:</label>
              <input type="password" name="confirmpassword" id="confirmpassword" required />
              <br />
              <label htmlFor="phone">Telefone:</label>
              <input type="text" name="phone" id="phone" required />
              <br />
              <label htmlFor="cpf">CPF:</label>
              <input type="text" name="cpf" id="cpf" required />
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
