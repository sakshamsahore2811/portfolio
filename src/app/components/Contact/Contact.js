import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

const Contact = ()=>{
    return(
        <div id="contact">
            <div className={styles.heading}>
                Contact Me
            </div>
            <div className={styles.container}>
                <a href="https://github.com/sakshamsahore2811" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/saksham-2811" target="_blank">Linkedin</a>
                <a href="https://leetcode.com/saksham2811" target="_blank">Leetcode</a>
            </div>
            <div className={styles.email}>
                sakshamsahore@gmail.com
            </div>
           
        </div>

    )
}

export default Contact;