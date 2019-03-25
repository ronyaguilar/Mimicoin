import React from 'react';
import style from '../styles/Header.module.scss';

import {HeaderMenu} from './HeaderMenu.js';

export const Header = () => (
  <div className={style.nav}>
    <h1>Mimicoin</h1>
    <HeaderMenu/>
  </div>
);
