import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';
import IconLogo from '../assets/IconLogo/IconLogo';
import IconFork from '../assets/IconFork/IconFork';

const Header = () => {
  return (
    <header className={s.wrap}>
      <div className={s.logo}>
        <div className={s.icon}>
          <NavLink exact to={'/'}>
            <IconLogo />
          </NavLink>
        </div>
        <p>Statistics of your github repos</p>
      </div>

      <div className={s.fork}>
        <IconFork />
        <a href={'https://github.com/Halo-Lab/STTS'}>
          <span>Fork me on github</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
