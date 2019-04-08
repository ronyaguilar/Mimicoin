import React from 'react';

import style from '../styles/TableRow.module.scss';
export const TableRow = (props) => {
  let label = props.item.currency;
  let market_cap = parseInt(props.item.market_cap);
  let price = (Math.round(parseFloat(props.item.price) * 10000)/10000).toFixed(4);
  let volume = parseInt(props.item['1d'].volume);

  let cleanData = () => {
      if(isNaN(market_cap))
        market_cap = "Unknown";
      else
        market_cap = `$${market_cap.toLocaleString()}`;

      if(isNaN(price))
        price = "Unknown";
      else
        price = `$${price.toLocaleString()}`;

      if(isNaN(volume))
        volume = "Unknown";
      else
        volume = `$${volume.toLocaleString()}`;
  }

  cleanData();

  return(
    <tr>
      <td>{label}</td>
      <td>{market_cap}</td>
      <td>{price}</td>
      <td>{volume}</td>
    </tr>
  );
}
