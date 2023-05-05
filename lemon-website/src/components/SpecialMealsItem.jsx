import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import styles from "./../styles/SpecialMealsItem.module.css";
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const SpecialMealsItem = ({ meal }) => {
    return (
        <article className={styles.card}>
            <div>
                <img className={styles.preview} src={meal.image} alt={"Meal1"} />
            </div>
            <div className={styles.info}>
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
            </div>
            <div className={styles.footer}>
                <p>{meal.description}</p>
                <Link to={"/"}>
                    Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
                </Link>
            </div>
        </article>
    );
};

export default SpecialMealsItem;