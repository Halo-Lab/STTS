import React from "react";
import {NavLink} from 'react-router-dom';
import useBreakpoints from 'use-breakpoints-width';


import s from './Navigation.module.scss'
import {styles} from './NavStyles';

const Navigation = () => {
  const {breakpoint} = useBreakpoints({
    breakpoints: {
      desktop: 1024,
      tablet: 768,
      mobile: 0
    },
    debounceDelay: 250
  });
  const screen = breakpoint === 'mobile';

  return (
    <ul className={s.list}>
      <li className={s.link}>
        <NavLink style={styles.link} activeStyle={styles.activeLink} exact to={'/'}>
          {screen ? 'Repositories' : 'Choosen Repositories'}
        </NavLink>
      </li>
      <li className={s.link}>
        <NavLink style={styles.link} activeStyle={styles.activeLink} exact to={'/all'}>
          {screen ? 'Organization Name' : 'Find Repo by Organization Name'}
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation