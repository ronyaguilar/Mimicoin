import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {StatLabel} from './StatLabel';
import {CoinGraph} from './CoinGraph';

import {formatDollars2, formatDollarAbbr} from '../../utils/helper';
import style from '../../styles/pages/coin/CoinDashboard.module.scss';

export const CoinDashboard = (props) => {
  const [coin, setCoin] = useState({'price': 0, 'price_change': 0, 'high': 0, '1d' : 0});
  const [period, setPeriod] = useState('1d');

  useEffect(() => {

    const fetchCoin = async () => {

      let target = props.label;
      const results = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_NOMICS_KEY}&interval=${period}`);
      const coin = results.data.filter((item) => item.currency === target)[0];
      await setCoin(coin);
      console.log(coin);
    };

    fetchCoin();
  }, []);

  return (
      <div className={style.dashboard}>
        <div className={style.topline}>
          <h2>{coin.currency}</h2>
          <StatLabel stat='Price' val={formatDollars2(coin.price)}/>
          <StatLabel stat='Price Change' val={formatDollars2(coin[period]['price_change'])} pct={coin[period]['price_change_pct'] * 100}/>
          <StatLabel stat='All-Time High' val={formatDollars2(coin.high)}/>
        </div>
        <CoinGraph id={props.label}/>
      </div>
  );
}
