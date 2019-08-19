import React from 'react';
import {Link} from 'react-router-dom';

import style from '../styles/TableRow.module.scss';

export const TableRow = (props) => {
  console.log(props.item);
  let label = props.item.name;
  let market_cap = parseInt(props.item.market_cap);
  let price = (Math.round(parseFloat(props.item.price) * 10000)/10000).toFixed(4);
  let volume;
  if(typeof(props.item[props.period]) !== 'undefined')
    volume = parseInt(props.item[props.period].volume);
  else
    volume = NaN;

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
      <td className={style.coin}>
        <img src={props.item.logo_url}/>
        <div>
          <Link to={`/coin/${props.item.currency}`} className={style.label}>{label} </Link>
          {props.item.id}
        </div>
      </td>
      <td>{market_cap}</td>
      <td>{price}</td>
      <td>{volume}</td>
    </tr>
  );
}
