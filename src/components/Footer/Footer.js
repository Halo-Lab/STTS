import React from "react";
import heart from '../../images/heart.png';

import s from './Footer.module.scss'
import IconLogoHaloLab from "../assets/IconLogoHaloLab/IconLogoHaloLab";


const Footer = () => {


  return (
    <footer className={s.wrap}>

        <div className={s.content}>

          <p>
            With
          </p>

          <div className={s.heart}>
            <img src={heart}/>
          </div>

          <p>from</p>

          <div className={s.logo}>
           <IconLogoHaloLab/>
          </div>

          <p className={s.haloLab}>
            HALO LAB
          </p>
        </div>
    </footer>
  )
}

export default Footer


