import React from 'react';
import axios from 'axios';

import AddToWatchlist from './AddToWatchlist';
import {CoinDashboard} from './CoinDashboard';
import UserAssets from './UserAssets';

import style from '../styles/CoinPage.module.scss';
export const CoinPage = (props) => {

  return (
    <div style={{height: '100%'}} className={style.wrapper}>
      <div className={style.watchlist}><AddToWatchlist id={props.match.params.label}/></div>
      <div className={style.dashboard}><CoinDashboard label={props.match.params.label}/></div>
      <div className={style.wallet}><UserAssets /></div>
    </div>
  );
}
