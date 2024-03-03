import React from 'react';
import styles from './style.module.css';

const Navbar = () =>{
    return(
        <div>
            <div className={styles.navbar}>
                <div className={styles.rightlinks}>
                    <a href="https://drive.google.com/file/d/13kDzWnz1Sj57JPZUPJ5fZrs4bSfjkZld/view?usp=sharing" target="_blank">Resume</a>
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