import React from "react";
import styles from './Header.module.scss';


const Header = () => {

    return (
        <header className={styles.header}>
            <img className={styles.logo}
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?"
            />
            <p className={styles.text}>Meme generator</p>
        </header>
    )
};


export default Header;