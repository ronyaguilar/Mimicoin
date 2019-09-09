import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Slug from './Slug';

import style from '../styles/header/NavGroup.module.scss';

export const NavGroup = (props) => {
  let defaultNav = style.navGroup;
  let dropdown = style.hideDropdown;
  let shouldDropdown = props.active

  if(shouldDropdown){
    dropdown = style.showDropdown;
  }

  
  return (
    <div className={style.wrapper}>
      <div className={defaultNav}>
        <ul>
          <li><Link style={{textDecoration: "none", color:"white"}} to='/dashboard'>Currencies</Link></li>
          <li>About</li>
          <Slug />
        </ul>
      </div>
      <div className={dropdown}>
        <ul>
          <li><Link style={{textDecoration: "none", color:"white"}} to='/dashboard'>Currencies</Link></li>
          <li>About</li>
          <Slug />
        </ul>
      </div>
    </div>
  );
}
