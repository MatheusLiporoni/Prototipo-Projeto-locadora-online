import { CarType } from "@/services/CarService/carService";
import styles from "./styles.module.scss"

interface props {
    car: CarType
}
const Card = ({car}: props) => {

    return (
                    <div className={styles.cardcar}>
                        <div className={styles.wrapperimg}>
                            <img src="img-car.jpg" alt="" />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.model}>
                                <p>{car.modelo}</p>
                            </div>
                            <div className={styles.brand}>
                                <span>Marca:</span>
                                <p>{car.marca}</p>
                            </div>
                            <div className={styles.price}>
                                <span>Grupo:</span>
                                <p>{car.grupo}</p>
                            </div>
                            <div className={styles.price}>
                                <p>${car.preco}</p>
                            </div>
                        </div>
                        <div className={styles.buttonbuy}>
                            <a href="#">Alugar</a>
                            <a href="">{car.situation}</a>
                        </div>
                    </div>
          
   
    );
}

export default Card;