import React, {useState,useEffect} from 'react';
import style from '../styles/CurrencyTable.module.scss';

export const CurrencyTable = (props) => {
  const [flag, setFlag] = useState("market_cap");

  const flagSort = f => (a, b) => {
    let flagA = parseFloat(a[f]);
    let flagB = parseFloat(b[f]);
    let comparison = 0;
    let order = -1;

    if(f === 'currency'){
      flagA = a[f];
      flagB = b[f];
      order = 1;
    }

    if(flagA > flagB)
      comparison = 1;
    else if(flagA < flagB)
      comparison = -1;

    return comparison * order;
  }

  const switchFlag = f => async () => {
    setFlag(f);
  };

  return(
    <div className={style.currency}>
      <table className=`${style.currencyTable} striped`>
        <thead>
          <tr>
            <th><button onClick={switchFlag('currency')}>Coin</button></th>
            <th><button onClick={switchFlag('market_cap')}>Market Cap</button></th>
            <th><button onClick={switchFlag('price')}>Price</button></th>
            <th><button onClick={switchFlag('volume')}>Volume</button></th>
          </tr>
        </thead>
        <tbody>
          {props.coins.sort(flagSort(flag)).slice(0,10).map(item =>
            (<tr key={item.currency}>
              <td>{item.currency}</td>
              <td>${parseInt(item.market_cap).toLocaleString()}</td>
              <td>${(Math.round(parseFloat(item.price) * 100)/100).toLocaleString()}</td>
              <td>${parseInt(item['1d'].volume).toLocaleString()}</td>
            </tr>)
          )}
        </tbody>
      </table>
    </div>
  );
};
