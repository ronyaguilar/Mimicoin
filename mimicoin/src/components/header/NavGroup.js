import React from 'react';

import style from '../styles/NavGroup.module.scss';

export const NavGroup = (props) => {
  let navClass = style.navGroup;

  if(props.active){
    navClass = style.dropDownGroup;
  }

  return (
    <div className={navClass}>
      <ul>
        <li>Currency</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </div>
  );
}
