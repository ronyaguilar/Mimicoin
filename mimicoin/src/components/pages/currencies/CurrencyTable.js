import React, {useState,useEffect} from 'react';

import {TableHeaderButton} from './TableHeaderButton';
import {TableRow} from './TableRow';

import style from '../../styles/pages/currencies/CurrencyTable.module.scss';

export const CurrencyTable = (props) => {
  const [flag, setFlag] = useState("market_cap");
  const [order, setOrder] = useState(-1);

  let flagSort = (a, b) => {
    let reverse = order;
    switch(flag){
      case 'currency': a = a[flag]; b = b[flag]; reverse = -reverse; break;
      case 'volume': 
        if(typeof(a[props.period]) !== 'undefined')
          a = parseFloat(a[props.period][flag]);
        else
          a = 0;
        if(typeof(b[props.period]) !== 'undefined')
          b = parseFloat(b[props.period][flag]);
        else
          b = 0; 
        break;
      default:
        a = parseFloat(a[flag]);
        b = parseFloat(b[flag]);
    }

    if(isNaN(a) && flag !=='currency')
      a = 0;
    if(isNaN(b) && flag !=='currency')
      b = 0;

    if(a > b)
      return reverse;
    else
      return -reverse;
  }

  const switchFlag = f => () => {
    if(f === flag)
      setOrder(-order);
    else
      setOrder(-1);
    setFlag(f);
  };

  return(
    <div className={style.currency}>
      <table className={style.currencyTable}>
        <thead>
          <tr>
            <TableHeaderButton sortHandler={switchFlag} flag='currency' label='Coin'/>
            <TableHeaderButton sortHandler={switchFlag} flag='market_cap' label='Market Cap'/>
            <TableHeaderButton sortHandler={switchFlag} flag='price' label='Price'/>
            <TableHeaderButton sortHandler={switchFlag} flag='volume' label='Volume'/>
          </tr>
        </thead>
        <tbody>
          {props.coins.sort(flagSort).slice(0,10).map(item => <TableRow key={item.currency} item={item} period={props.period}/>)}
        </tbody>
      </table>
    </div>
  );
};
