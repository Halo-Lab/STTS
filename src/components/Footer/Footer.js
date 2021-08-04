import React from "react";

import s from './Footer.module.scss'
import IconLogoHaloLab from "../assets/IconLogoHaloLab/IconLogoHaloLab";


const Footer = () => {


    return (
        <footer className={s.wrap}>

            <a href={'https://www.halo-lab.com/'} className={s.content}>

                <p>
                    With
                </p>

                <div className={s.heart}>
                    <p>&#x2764;&#xFE0F;</p>
                </div>

                <p>from</p>

                <div className={s.logo}>
                    <IconLogoHaloLab/>
                </div>

                <p className={s.haloLab}>
                    HALO LAB
                </p>
            </a>
        </footer>
    )
}

export default Footer


