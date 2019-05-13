import React from 'react';
import {Asset} from './Asset';

export const OwnedAssets = (props) => {
  return(
    <ul>
      {props.coins.map(coin => <Asset coin={coin}/>)}
    </ul>
  );
}
