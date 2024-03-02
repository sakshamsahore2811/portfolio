import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import dawa from '../../../../public/images/dawa-ai.png';
import ffi from '../../../../public/images/ffi.png';
import iiit from '../../../../public/images/iiit.png';
const Experience = ()=>{
    return(
        <div id="experience">
            <div className={styles.heading}>
            Experience    
            </div>  
            <div className={styles.container}>
                <div className={styles.hoverimg}>
                <Image src={dawa} height={2000} width={2000}/>
                </div>
                <div className={styles.hoverimg}>
            <Image src={ffi} height={2000} width={2000}/>
            </div>
            <div className={styles.hoverimg}>
                <Image src={iiit} height={2000} width={2000}/>
            </div>
            
            </div>
            <div className={styles.title}>
                
                <div>Full Stack Developer || <a href="https://dawaai.co.in" target="_blank">Dawa AI</a></div>
                <div>Python Developer || <a href="https://friendsforinclusion.org" target="_blank">Friends For Inclusion</a></div>
                <div>Research Intern || <a href="https://iiitu.ac.in" target="_blank">IIIT Una</a></div>
                
            </div>
            <div className={styles.subtitle}>
                <div>Startup founded by IITians || Worked on building MVP and<br/> official website along with handling backend<br/> and deployment tasks </div>
                <div>Sign language application || Worked on Signer<br/> application with python frameworks like FastAPI and Django to help<br/> people with disabilities</div>
                <div>ML and data science projects || Worked on Data<br/> Science projects under the guidnace of <br/>university professors</div>
            </div>
            </div>  

    )
}

export default Experience;