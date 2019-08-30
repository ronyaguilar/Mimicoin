import React, {useState} from 'react';

import {NavGroup} from './NavGroup.js';
import style from '../styles/header/HeaderMenu.module.scss';

export const HeaderMenu = (props) => {
  const [active, toggleActive] = useState(false);

  if(active){
    return (
      <div className = {style.dropDownMenu}>
        <div className = {style.menuButton}>
          <a onClick={() => toggleActive(!active)}><i className="fas fa-bars"></i></a>
        </div>
        <NavGroup active={active}/>
      </div>
    );
  }
  else{
    return (
      <div className = {style.headerMenu}>
        <NavGroup active={active}/>
        <div className = {style.menuButton}>
          <a onClick={() => toggleActive(!active)}><i className="fas fa-bars"></i></a>
        </div>
      </div>
    );
  }

}
