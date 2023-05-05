import React from 'react';

import Logo from "./../../assets/logo-white.png";
import styles from "./../../styles/Footer.module.css";

const Footer = () => {

    return (
        <footer className={styles.container}>
            <div>
                <div>
                    <img className={styles.logo} src={Logo} alt="logo" />
                </div>
                <div>
                    <ul className={styles.linkGroup}>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Menu
                        </li>
                        <li>
                            Reservations
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
                </div>
                <div>
                    <strong>Contact us</strong>
                    <p>9910384595</p>
                </div>
            </div>
            <div>
                Copyright All Righs Reserver Little Lemon 2023
            </div>
        </footer>
    );
};

export default Footer;