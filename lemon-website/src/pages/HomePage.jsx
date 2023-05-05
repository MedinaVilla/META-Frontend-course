import React from 'react';
import bannerLogo from "./../assets/restauranfood.jpg";

import styles from "./../styles/HomePage.module.css";
import SpecialMeals from '../components/SpecialMeals';
import Testimonials from '../components/Testimonials';
import History from '../components/History';

import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section className={styles.banner}>
                <div className={styles.container}>
                    <div >
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button onClick={()=>{navigate("/booking")}}> Reserve a table</button>
                    </div>
                    <div>
                        <img src={bannerLogo} className={styles.bannerLogo} alt="banner" />
                    </div>
                </div>
            </section>
            <SpecialMeals />
            <Testimonials />
            <History />

        </div>
    );
}

export default HomePage;
