import React from 'react';

import style from './styles/Footer.module.scss';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <p>Some or all data provided by Nomics.com <a href="https://p.nomics.com/cryptocurrency-bitcoin-api">Cryptocurrency Market Data API.</a></p>
    </div>
  );
};
