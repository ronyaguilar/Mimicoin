import React from 'react';
import {Asset} from './Asset';

export const AssetList = (props) => {
  return(
    <ul>
      {props.coins.map(coin => <Asset coin={coin}/>)}
    </ul>
  );
}
