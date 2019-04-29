import React from 'react';
import {Link} from 'react-router-dom';

import Slug from './Slug';

import style from '../styles/NavGroup.module.scss';

export const NavGroup = (props) => {
  let navClass = style.navGroup;

  if(props.active){
    navClass = style.dropDownGroup;
  }

  return (
    <div className={navClass}>
      <ul>
        <li><Link to='/dashboard'>Currencies</Link></li>
        <li>About</li>
        <Slug />
      </ul>
    </div>
  );
}
