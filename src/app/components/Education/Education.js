import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import mcs from '../../../../public/images/mcs.jpg';
import juit from '../../../../public/images/juit.jpg';
const Education = ()=>{
    return(
        <div id="edu">
            <div className={styles.heading}>
                Education
            </div>
            <div className={styles.edu}>
                <Image src={juit} height={350} width={400}/>
                <Image src={mcs} height={350} width={400}/>
            </div>
            <div className={styles.name}>
                <div>Jaypee University, Waknaghat (HP)</div>
                <div>Mount Carmel School, Jindwari (PB)</div>
            </div>
        </div>

    )
}

export default Education;