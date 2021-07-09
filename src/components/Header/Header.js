import React from "react";


import s from './Header.module.scss'
import IconLogo from "../assets/IconLogo/IconLogo";
import IconFork from "../assets/IconFork/IconFork";


const Header = () => {


  return (
   <header className={s.wrap}>

     <div className={s.logo}>
       <div className={s.icon}>
         <IconLogo/>
       </div>
       <p>Statistics of your github repos</p>
     </div>

     <div className={s.fork}>
       <IconFork/>
       <p>Fork me on github</p>
     </div>

   </header>
  )
}

export default Header