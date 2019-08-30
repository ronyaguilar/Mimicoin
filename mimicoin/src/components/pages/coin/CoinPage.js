import React from 'react';

import AddToWatchlist from '../../widget/AddToWatchlist';
import {CoinDashboard} from './CoinDashboard';
import SideWidget from '../../widget/SideWidget';

import style from '../../styles/pages/coin/CoinPage.module.scss';
export const CoinPage = (props) => {

  return (
    <div style={{height: '100%'}} className={style.wrapper}>
      <div className={style.watchlist}>
        <AddToWatchlist id={props.match.params.label}/>
      </div>
      <div className={style.dashboard}>
        <CoinDashboard label={props.match.params.label}/>
      </div>
      <div className={style.wallet}>
        <SideWidget />
      </div>
    </div>
  );
}
