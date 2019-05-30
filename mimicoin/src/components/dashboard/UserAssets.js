import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from '../styles/UserAssets.module.scss';
import {OwnedAssets} from './OwnedAssets';

class UserAssets extends Component {
    render(){
      if(this.props.user){
        return(
          <div className={style.container}>
            <div className={style.title}>
              <h2>My Coins: </h2>
              <div className={style.label}>
                <p>Name</p>
                <p>QTY</p>
                <p>Value</p>
                <p>Profit</p>
              </div>
            </div>
            <OwnedAssets coins={this.props.user.wallet.currencies} />
            <div></div>
            <h2 className={style.title}>My Watchlist: </h2>
            {/*this.renderWatchList()*/}
          </div>
        );
      }else{
        return null;
      }
    }
}

const mapStateToProps = (state) => {
  return {user: state.user};
}

export default connect(mapStateToProps)(UserAssets);
