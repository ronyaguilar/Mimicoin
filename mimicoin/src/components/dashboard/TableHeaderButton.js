import React from 'react';

import style from '../styles/TableHeaderButton.module.scss';

export const TableHeaderButton = (props) => {
  return(
    <th><button className={style.headerButton} onClick={props.sortHandler(props.flag)}>{props.label}</button></th>
  )
}
