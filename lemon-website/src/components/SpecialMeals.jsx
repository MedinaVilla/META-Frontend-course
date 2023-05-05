import React from 'react';

import { Link } from "react-router-dom";

import Meal1 from "./../assets/bruchetta.svg";
import Meal2 from "./../assets/greeksalad.jpg";
import Meal3 from "./../assets/lemondessert.jpg";

import styles from "./../styles/SpecialMeals.module.css";
import SpecialMealsItem from './SpecialMealsItem';

const SpecialMeals = () => {
    const meals = [
        {
            name: 'Greek Salad',
            price: '$14.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: Meal1
        },
        {
            name: 'Greek Salad',
            price: '$14.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: Meal2
        },
        {
            name: 'Greek Salad',
            price: '$14.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: Meal3
        }
    ]

    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <h2>This week specials!</h2>
                <Link className={styles.button} to="/">
                    Online Menu
                </Link>
            </div>
            <div className={styles.mealsBox}>
                {
                    meals.map((meal) => {
                        return <React.Fragment><SpecialMealsItem meal={meal} /></React.Fragment>
                    })
                }
            </div>

        </section>
    );
}

export default SpecialMeals;
