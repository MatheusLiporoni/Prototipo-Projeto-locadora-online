import { Col, Row } from "reactstrap"
import style from "./footer.module.scss"


const Footer = () => {
    return(
        <>
        <div className={style.footer}>
            <Row className={style.row}>
                <Col className={style.col1}>
                    <h1>Institucional</h1>
                    <p>Sobre Nós</p>
                    <p>Política de Privacidade</p>
                    <p>Termos de Uso</p>
                </Col>
                <Col className={style.col2}>
                    <h1>Fale Conosco</h1>
                    <p>Email e Telefone</p>
                    <p>Perguntas Frequentes</p>
                </Col>
                <Col className={style.col3}>
                    <img src="whatsapp.svg" alt="" />
                    <img src="twitter-x.svg" alt="" />
                    <img src="facebook.svg" alt="" />
                    <img src="instagram.svg" alt="" />
                </Col>
            </Row>
        </div>

        </>
    )
}



export default Footer