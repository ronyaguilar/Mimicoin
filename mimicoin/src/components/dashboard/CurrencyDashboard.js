import React, {useState, useEffect} from 'react';
import axios from 'axios';
import style from '../styles/CurrencyDashboard.module.scss';
import {CurrencyTable} from './CurrencyTable';

export const CurrencyDashboard = (props) => {
  const [coins, setCoins] = useState([]);
  const [period, setPeriod] = useState("1d");
  const [refreshRate, setRate] = useState(10000);

  const fetchCoins = async () => {
    const result = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=e316afa1075c427a9a44512bbd7f2c3b&interval=${period}`);
    await setCoins(result.data);
  };

  useEffect(()=> {
    fetchCoins();
  },[]);


  return(
    <div style={{'height': '100%'}}>
      <div className={style.container}>
        <h2>Cryptocurrencies</h2>
        <CurrencyTable coins={coins}/>
      </div>
    </div>
  )

}
