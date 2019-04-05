import React, {useState,useEffect} from 'react';
import axios from 'axios';
import style from '../styles/CurrencyTable.module.scss';


export const CurrencyTable = (props) => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState("market_cap");
  const [interval, setInterval] = useState("1d");

  useEffect(() => {
      const fetchCoins = async () => {
        const result = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=e316afa1075c427a9a44512bbd7f2c3b&interval=${interval}`);
        await setData(result.data);
      }

      fetchCoins();
  }
  ,[flag, interval]);

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
  }

  return(
    <div className={style.currency}>
      <h2>Currency List</h2>
      <table className={style.currencyTable}>
        <thead>
          <tr>
            <th><a onClick={switchFlag('currency')}>Coin</a></th>
            <th><a onClick={switchFlag('market_cap')}>Market Cap</a></th>
            <th><a onClick={switchFlag('price')}>Price</a></th>
            <th><a onClick={switchFlag('volume')}>Volume</a></th>
          </tr>
        </thead>
        <tbody>
          {data.sort(flagSort(flag)).slice(0,10).map(item =>
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
}
