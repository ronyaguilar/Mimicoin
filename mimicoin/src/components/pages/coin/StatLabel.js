import React from 'react';

import style from '../../styles/pages/coin/StatLabel.module.scss';
import {formatDollars2} from '../../utils/helper.js';

export const StatLabel = (props) => {

  let val = (<h4>${props.val}</h4>);

  if(props.pct && props.pct >= 0) {
    val = (<div className={`${style.positive} ${style.pct}`}>
            <h4>${props.val}</h4> <h4>({formatDollars2(props.pct)}%)</h4>
          </div>);
  } else if(props.pct && props.pct < 0){
    val = (<div className={`${style.negative} ${style.pct}`}>
            <h4>${props.val}</h4> <h4>({formatDollars2(props.pct)}%)</h4>
          </div>);
  }
  return (
    <div style={{display:  'flex', flexDirection: 'column'}} className={style.cell}>
      <h3>{props.stat}</h3>
      {val}
    </div>
  );
}
