import React from 'react';
import style from '../styles/Header.module.scss';
import {Link} from 'react-router-dom';

import {HeaderMenu} from './HeaderMenu.js';

export const Header = () => (
  <div className={style.nav}>
    <h1><Link to='/'>Mimicoin</Link></h1>
    <HeaderMenu/>
  </div>
);
