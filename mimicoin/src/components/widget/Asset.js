import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {formatDollars2} from '../utils/helper';
import style from '../styles/widget/Asset.module.scss';

export const Asset = (props) => {
  const [currentWorth, setCurrentWorth] = useState(0);

  const updateCoinWorth = async (coin) => {
    if(coin.id === 'USD'){
      await setCurrentWorth(coin.amount);
    }
    else {
      const prices = await axios.get(`https://api.nomics.com/v1/markets/prices?key=${process.env.REACT_APP_NOMICS_KEY}&currency=${coin.id}`);

      prices.data.forEach(result => {
        if(result.quote === "USD"){
          setCurrentWorth(result.price * coin.amount);
          return;
        }
      });
    }
  };

  useEffect(() => {
    updateCoinWorth(props.coin);
  },[]);

  return (<li className={style.row}>
            <h4 className={style.label}>{props.coin.id}</h4>
            <p className={style.amount}>{props.coin.amount}</p>
            <p className={style.worth}>${formatDollars2(currentWorth)}</p>
            <p className={style.profit}>${formatDollars2(currentWorth - (props.coin.amount * props.coin.lastBoughtAt))}</p>
          </li>);
}
