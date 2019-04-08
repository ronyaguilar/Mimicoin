import React from 'react';

import style from './styles/LandingPage.module.scss';
import coinImage from '../images/coin-group.png';
import magnifyChart from '../images/magnify-chart.svg';
import digitalWallet from '../images/digital-wallet.svg';

export const LandingPage = () => {
  return(
    <div className={style.landing}>
      <div className={style.welcome}>
        <h1>Welcome to Mimicoin!</h1>
        <h4>Explore the wonders of cryptocurrency trading with a platform that allows you to simulate the real world.</h4>
      </div>
      <div className={style.introRow}>
        <div className={style.introGroup}>
          <img style={{width: '180px'}}src={coinImage}/>
          <p>Follow the traffic of the giants and the newest altcoins that can be the next big thing.</p>
        </div>
        <div className={style.introGroup}>
          <img src={magnifyChart}/>
          <p>Coin prices are tracked in real-time for a more immersive experience.</p>
        </div>
        <div className={style.introGroup}>
          <img src={digitalWallet}/>
          <p>Learn what it takes to become profitable in the volatile market of cryptocurrency</p>
        </div>
      </div>
    </div>
  )
}
