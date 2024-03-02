import React from 'react';
import styles from './style.module.css';

const Navbar = () =>{
    return(
        <div>
            <div className={styles.navbar}>
                <div className={styles.rightlinks}>
                    <a href='#experience'>Experience</a>
                    <a href='#tech'>Tech Stack</a>
                    <a href='#edu'>Education</a>
                    <a href='#contact'>Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;