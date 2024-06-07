import React, {useState} from "react";

import styles from "./Navbar.module.css";

import {getImageUrl} from "../../u";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className = {styles.navbar}>
            <a className = {styles.title} href = "/"><img className = {styles.float} src = "/favicon.ico" height = "25" width = "25"></img>Mabel Hong</a>
            <div className = {styles.menu}>
                <img className = {styles.menuBtn} src = {menuOpen ? getImageUrl("navbar/exit.png") : getImageUrl("navbar/nav.png")} 
                alt = "menu-button" onClick= {() => setMenuOpen(!menuOpen)}></img>
                <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick = {() => setMenuOpen(false)}>
                    <li>
                        <a href = "#about">About</a>
                    </li>
                    <li>
                        <a href = "#experience">Experience</a>
                    </li>
                    <li>
                        <a href = "#skills">Skills</a>
                    </li>
                    <li>
                        <a href = "#projects">Projects</a>
                    </li>
                    <li>
                        <a href = "#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};