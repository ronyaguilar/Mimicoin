import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {StatLabel} from './StatLabel';
import {CandleStick} from './CandleStick';

import {formatDollars2, formatDollarAbbr} from '../utils/helper.js';
import style from '../styles/CoinDashboard.module.scss';

export const CoinDashboard = (props) => {
  const [coin, setCoin] = useState({'price': 0, 'price_change': 0, 'high': 0, '1d' : 0});
  const [period, setPeriod] = useState('1d');

  useEffect(() => {

    const fetchCoin = async () => {

      let target = props.match.params.label;
      const results = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=e316afa1075c427a9a44512bbd7f2c3b&interval=${period}`);
      const coin = results.data.filter((item) => item.currency === target)[0];
      await setCoin(coin);
    };

    fetchCoin();
  }, []);

  console.log(coin[period['price_change_pct']]);

  return (
    <div style={{height: '100%'}}>
      <div className={style.container}>
        <div className={style.topline}>
          <h2>{coin.currency}</h2>
          <StatLabel stat='Price' val={formatDollars2(coin.price)}/>
          <StatLabel stat='Price Change' val={formatDollars2(coin[period]['price_change'])} pct={coin[period]['price_change_pct']}/>
          <StatLabel stat='All-Time High' val={formatDollars2(coin.high)}/>
        </div>
        <CandleStick />
      </div>
    </div>
  );
}
