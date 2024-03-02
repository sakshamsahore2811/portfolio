import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import me from '../../../../public/images/Saksham.png';
import hi from '../../../../public/images/hi.png';
import tech from '../../../../public/images/tech.png';
const Header = () =>{
    return(
        <div>
            <div className={styles.me}>
            <Image src={me} height={360} width={360}/>
            </div>
            <div className={styles.greeting}>
                <div className={styles.animatedtext}>
                Hi ! I am Saksham Sharma <Image src={hi} height={50} width={50}/>
                </div>
            </div>
            <div className={styles.subgreeting}>
                <div className={styles.animatedtext2}>
                Full stack / Python Developer <Image src={tech} height={40} width={40}/>
                </div>
            </div>
            <div className={styles.funfact}>
            Random Fact : "The average person spends about six months of<br/> 
            </div>
            <div className={styles.funfact2}>their lifetime waiting for red lights to turn green."
            </div>
            <div className={styles.piccaption}>
                (Captured in February 2024)
            </div>
        </div>
    )
}

export default Header;