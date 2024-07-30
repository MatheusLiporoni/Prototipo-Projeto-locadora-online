import { Container} from "reactstrap"
import styles from "./styles.module.scss"
import Link from "next/link"

const Header = () => {
    return(
        <>
        <div className={styles.header}>
            <h2 className={styles.inicio}>Início</h2>
            <Link href={"/login"} className={styles.link}><h2>Locadora</h2> </Link>
            <Link href={`/carros`}  className={styles.link}><h2>Veículos</h2></Link>
            <Link href={"/logincliente"} className={styles.link}><h2>Login</h2></Link>
            <div className={styles.search}>
                <input type="text" name="Search" id="Search" placeholder="Search"/>
                <i></i>
            </div>

            
        </div>
        </>
    )
}


export default Header