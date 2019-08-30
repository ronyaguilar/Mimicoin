import React, {useState, useEffect} from 'react';
import axios from 'axios';
import style from '../../styles/pages/currencies/CurrencyDashboard.module.scss';
import {CurrencyTable} from './CurrencyTable';
import UserAssets from '../../widget/UserAssets';

export const CurrencyDashboard = (props) => {
  const [coins, setCoins] = useState([]);
  const [period, setPeriod] = useState("1d");
  const [refreshRate, setRate] = useState(10000);

  const fetchCoins = async () => {
    const result = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_NOMICS_KEY}&interval=${period}`);
    await setCoins(result.data);
  };

  useEffect(()=> {
    fetchCoins();
  },[]);

  return(
    <div style={{'height': '100%'}}>
      <div className={style.container}>
        <h2 className={style.tableTitle}>Cryptocurrencies</h2>
        <div className={style.table}>
          <CurrencyTable coins={coins} period={period}/>
        </div>
        <div className={style.wallet}><UserAssets /></div>
      </div>
    </div>
  )

}
