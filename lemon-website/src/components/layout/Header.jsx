import React, { useState, useEffect } from 'react';
import Logo from './../../assets/Logo.svg';
import styles from "./../../styles/Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [active, setActive] = useState("");
    const navigation = useNavigate();

    useEffect(() => {
        let pathname = window.location.pathname;
        setActive(pathname.replace("/", ""))
    }, [])


    return (
        <header className={styles.header}>
            <div>
                <img onClick={()=>{navigation("/")}} className={styles.logo} src={Logo} alt="logo-lemon" />
            </div>
            <nav className={styles.navbar}>
                <ul className={isNavExpanded ? styles.navbarExpanded : styles.navbarHide}>
                    <li className={active === "" && styles.selected}>
                        <Link onClick={() => { setActive("") }} to="/">HOME</Link>
                    </li>
                    <li className={active === "about" && styles.selected}>
                        <Link onClick={() => { setActive("about") }} to="/">ABOUT</Link>
                    </li>
                    <li className={active === "menu" && styles.selected}>
                        <Link onClick={() => { setActive("menu") }} to="/">MENU</Link>
                    </li>
                    <li className={active === "booking" && styles.selected}>
                        <Link onClick={() => { setActive("booking") }} to="/booking">RESERVATIONS</Link>
                    </li>
                    <li className={active === "login" && styles.selected}>
                        <Link onClick={() => { setActive("login") }} to="/">LOGIN</Link>
                    </li>

                </ul>
                <button
                    className={styles.hamburguer}
                    type="button"
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                > {isNavExpanded ?
                    <FontAwesomeIcon icon={faXmark} size="2x" /> :
                    <FontAwesomeIcon icon={faBars} size="2x" />}
                </button>
            </nav>
        </header>
    );
}

export default Header;
